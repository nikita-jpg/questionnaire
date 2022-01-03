import vkBridge from '@vkontakte/vk-bridge';
import { View } from '@vkontakte/vkui';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AlertCloseApp from '../../components/Alert/AlertCloseApp/AlertCloseApp';
import AlertWrapper from '../../components/Alert/AlertWrapper/AlertWrapper';
import LoadingPanel from '../../components/LoadingPanel/LoadingPanel';
import { closeModal, openModalListQuestions } from '../../components/Modal/actions';
import { setDataModalListQuestions } from '../../components/Modal/Modals/ModalPageForListQuestions/actionsModalListQuestions';
import { QUESTION_NOT_ANSWERED } from '../../NotUI/Data/consts';
import { sendUserAnswersToServer } from '../../NotUI/Server/server';
import { getCurQuestions, getCurSurveyId } from '../../Selectors/data_selectors';
import { isModalListQuestionsOpen } from '../../Selectors/modal_selectors';
import IteamListQuestion from './IteamListQuestion/IteamListQuestion';
import * as appNavigate from '../../App/Actions'

import * as alertActions from '../../components/Alert/actions'
import { useNavigate } from 'react-router-dom';

const PANEL_LOADING = "PANEL_LOADING-0"



let activePanel = 0;
let history = [0]

const ListQuestions = ({id,
    goToPollViewAction=()=>{}, 
    goToResultViewAction=()=>{}, 
    goToListSurveyAction=()=>{},
    saveUserAnswersAction=()=>{}
}) => {

    let  [,setState]=useState();


    //Получение данных
    const arrQuestions = useSelector(getCurQuestions)
    const curSurveyId = useSelector(getCurSurveyId)
    const dispath = useDispatch();

    //Если пропало соединение с интернетом
    const goToViewListQuestions = () => {
        removeAndroidBackListener()
        dispath(appNavigate.App_goToLoadingtView())
    }
    const serverErrorAlert = <AlertCloseApp errorText = {"К сожалению, потеряно соединение с сервером. Просим вас зайти позже"}></AlertCloseApp>


    //Внутренняя навигация
    // const [activePanelLocal, setActivePanelLocal] = useState(0);
    // useEffect(()=>{
    //     console.log("setActivePanelLocal")
    //     setActivePanelLocal(activePanelLocal=>activePanel)
    // },[activePanel])


    //Работа с ответами
    const [userAnswers, setUserAnswers] = useState([])
    const [userAnswersFinishValidator, setUserAnswersFinishValidator] = useState(false)

    const giveAnswer = (idQuestion, idAnswerOption) => {
        let isAnswerBe = false;

        let newUserAnswers = Object.assign([],userAnswers);

        for(let i=0;i<userAnswers.length;i++){
            if(userAnswers[i].idQuestion === idQuestion){
                isAnswerBe = true
                newUserAnswers[i].idAnswerOption = idAnswerOption
            }
        }

        if(!isAnswerBe){
            newUserAnswers.push({idQuestion:idQuestion, idAnswerOption:idAnswerOption})
        }
        setUserAnswers(newUserAnswers)
    }
    const getUserAnswer = (idQuestion) =>{

        let idAnswer = QUESTION_NOT_ANSWERED;

        userAnswers.map((userAnswer)=>{
            if(userAnswer.idQuestion === idQuestion){
                idAnswer = userAnswer.idAnswerOption
            }
        })

        return idAnswer
    }


    const getPrepareDataToSendToServer = () =>{
        let userAnswersForState = Object.assign([],userAnswers)


        for(let i=0;i<userAnswersForState.length;i++){
            userAnswersForState[i] = {
                idSurvey:curSurveyId,
                idQuestion:userAnswersForState[i].idQuestion,
                idAnswerOption:userAnswersForState[i].idAnswerOption
            }
        }

        return {surveyId:curSurveyId, userAnswers:userAnswersForState}
    }

    const getPrepareDataToSend = () =>{
        let userAnswersForState = Object.assign([],userAnswers)


        for(let i=0;i<userAnswersForState.length;i++){
            userAnswersForState[i] = {
                idSurvey:curSurveyId,
                idQuestion:userAnswersForState[i].idQuestion,
                idAnswerOption:userAnswersForState[i].idAnswerOption
            }
        }

        return userAnswersForState
    }

    const saveAnswersToState = () => {dispath(saveUserAnswersAction(getPrepareDataToSend()))}
    const saveAnswersToServer= () => sendUserAnswersToServer(getPrepareDataToSendToServer()).then(data=>{return data})



    //Внешняя навигация
    const goToResultView = () => {
        removeAndroidBackListener()
        dispath(goToResultViewAction())
    }
    const goToPollView = () => {
        removeAndroidBackListener()
        dispath(goToListSurveyAction())
        dispath(goToPollViewAction())
    }


    //Навигация
    const checkIndex = (indexQuestion) =>{

        //Если мы переходим к этому индексу, значит пользователь ответил на посл вопрос и надо завершать опрос
        if(indexQuestion===arrQuestions.length){
            finishSurvey()
            return false;
        }

        if(indexQuestion === -1){
            openCloseListQuestionsAleret()
            return false;
        }

        return true
    }
    const goToCurrentQuestion = (indexQuestion)=>{

        // console.log(activePanel)
        // console.log(indexQuestion)
        if(checkIndex(indexQuestion)){
            changeHistory(indexQuestion)
            activePanel = indexQuestion
            // setActivePanel(indexQuestion)
            // setActivePanel(indexQuestion)
        }
    }
    // const goToPrevQuestion=()=> setActivePanel(activePanel => {
    //     return checkIndex(activePanel - 1) ? activePanel - 1 : activePanel;
    // });
    const goToPrevQuestion=()=> goToCurrentQuestion(activePanel - 1)
    const goToNextQuestion=()=> goToCurrentQuestion(activePanel + 1)


    // Работа с модальным окном
    const isModalOpen = useSelector(isModalListQuestionsOpen)
    const openModal = () => {
            dispath(setDataModalListQuestions({
                arrQuestions:arrQuestions,
                getUserAnswer:getUserAnswer,
                goToCurrentQuestion:goToCurrentQuestion,
                finishSurvey:finishSurvey
            }))
            dispath(openModalListQuestions())
    }
    const closeModalListQuestions = () => dispath(closeModal())
    const closeModalListQuestionsWithTimuot = () => setTimeout(()=>{closeModalListQuestions()}, 450)




    //Окончание опроса
    const cheakAllAnswered = () => {
        return arrQuestions.length === userAnswers.length;
    }

    useEffect(() => {
        dispath(setDataModalListQuestions({
            arrQuestions:arrQuestions,
            getUserAnswer:getUserAnswer,
            goToCurrentQuestion:goToCurrentQuestion,
            finishSurvey:finishSurvey
        }))   
    },[])

    useEffect(() => {
        if(userAnswersFinishValidator){
            if(!cheakAllAnswered()){
                openFinishAlert();
            }else{
                finishSurveyWithOutCheck()
            }
        }
	}, [userAnswersFinishValidator]);

    const finishSurvey = () => {
        setUserAnswersFinishValidator(true)
    }
    
    const finishWithTimeOut = () => setTimeout(()=>{
        saveAnswersToState()
        saveAnswersToServer().then(res=>{
            if (res === null){
                dispath(alertActions.Alert_setAlert(serverErrorAlert))
                goToViewListQuestions()
            }else{
                goToResultView()
            }
        })
    }, 750)
    
    const finishWithOutTimeOut = () => {
        saveAnswersToState()
        saveAnswersToServer().then(res=>{
            if (res === null){
                dispath(alertActions.Alert_setAlert(serverErrorAlert))
                goToViewListQuestions()
            }else{
                goToResultView()
            }
        })
    }

    const finishSurveyWithOutCheck = () =>{
        if(isModalOpen){
            closeModalListQuestionsWithTimuot()
            finishWithTimeOut()
        }
        else{
            finishWithOutTimeOut()
        }
        
    }



    // История
    // const [history, setHistory] = useState([0]);
    const changeHistory = (nextIndex) => {

        //Установка истории
        let his = [];
        for(let i=0;i<nextIndex+1;i++){
            his.push(i)
        }
        // setHistory(his)
        history = his


        //vkBridge
        if (nextIndex === 0) {
            vkBridge.send('VKWebAppDisableSwipeBack');
            }
        else{
            vkBridge.send('VKWebAppEnableSwipeBack');
        }
    }


    // let  [,setState]=useState();
    //Кнопка назад на андроиде
    const backAndroid = (event) => {
        goToPrevQuestion()
        setState({});
        console.log("ListQuestions")
    }
	useEffect(()=>{
        addAndroidBackListener()
	},[])

    const addAndroidBackListener = () =>{
        window.addEventListener('popstate', backAndroid)
    }

    const removeAndroidBackListener = () =>{
        window.removeEventListener('popstate', backAndroid)
    }


    //Alert
    const [alert, setAlert] = useState(null);

    const openCloseListQuestionsAleret = () => {

        setAlert(
            <AlertWrapper
                header="Уверены, что хотите выйти?"
                leftText={"Отмена"}
                rightText={"Выйти"}
                rightFunc={()=>{goToPollView()}}
                onClose={()=>{setAlert(null)}}
            >
            </AlertWrapper>
    )}
    const openFinishAlert = () => {       
        setAlert(

            <AlertWrapper
                header="Вы ответили не на все вопросы"
                leftText={"Отмена"}
                rightText={"Завершить"}
                rightFunc={ () => {
                    finishSurveyWithOutCheck()
                }}
                onClose={()=>{ 
                    setUserAnswersFinishValidator(false)
                    setAlert(null)
                }}
            >
            </AlertWrapper>

    )}


    const backAndroidImmitator = () =>{
        window.history.back()
    }
    return (
        <View id={id} 
            activePanel={activePanel} 
            history={history} 
            onSwipeBack={backAndroidImmitator}
            popout={alert}
            >
            
            <LoadingPanel id={PANEL_LOADING}/>
            
            {
                arrQuestions.map((question, i) =>(
                    <IteamListQuestion
                        id={i}            
                        question={question}
                        countQuestions={arrQuestions.length}
                        isModalOpen={isModalOpen}

                        giveAnswer={giveAnswer}
                        goToNextQuestion={goToNextQuestion}
                        goToPrevQuestion={backAndroidImmitator}
                        getUserAnswer={getUserAnswer}

                        changeModal={openModal}

                    />
                ))
            }
        </View>
    )
}

export default ListQuestions;
