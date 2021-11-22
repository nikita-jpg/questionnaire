import { View,ModalRoot,ModalPage,List, SimpleCell, Div, usePlatform, ViewWidth, Group } from '@vkontakte/vkui';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import IteamListQuestion from './IteamListQuestion/IteamListQuestion';
import ModalPageHead from '../../components/ModalPageHead/ModalPageHead';
import vkBridge from '@vkontakte/vk-bridge'
import AlertWrapper from '../../components/Alert/AlertWrapper/AlertWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { getArrQuestions, getCurQuestions, getCurSurveyId } from '../../Selectors/data_selectors';
import { getSurveyFinishedGoToResult } from '../../Selectors/listSurvey_selectors';
import { downloadImagesArr, sendUserAnswersToServer } from '../../NotUI/Server/server';
import ModalPageForListQuestions from '../../components/Modal/Modals/ModalPageForListQuestions/ModalPageForListQuestions';
import { QUESTION_NOT_ANSWERED } from '../../NotUI/Data/consts';
import LoadingPanel from '../../components/LoadingPanel/LoadingPanel'
import {closeModal, openModalListQuestions } from '../../components/Modal/actions';
import { setDataModalListQuestions } from '../../components/Modal/Modals/ModalPageForListQuestions/actionsModalListQuestions';
import { isModalListQuestionsOpen } from '../../Selectors/modal_selectors';

const MODAL_ID = "MODAL_ID"
const PANEL_LOADING = "PANEL_LOADING-0"


const ListQuestions = ({id,
    goToLoadingViewAction=()=>{}, 
    goToViewListQuestionsAction=()=>{},
    goToPollViewAction=()=>{}, 
    goToResultViewAction=()=>{}, 
    goToListSurveyAction=()=>{},
    saveUserAnswersAction=()=>{}
}) => {


    //Получение данных
    const arrQuestions = useSelector(getCurQuestions)
    const curSurveyId = useSelector(getCurSurveyId)
    // const [imageArr, setImageArr] = useState([])
    const dispath = useDispatch();

    //Внутренняя навигация
    const [activePanel, setActivePanel] = useState(0);
    const setIndexQuestionAndHistory = (newIndex) => {
        setActivePanel(newIndex)
        changeHistory(newIndex)
    }

    // // //Подгрузка картинок
    // useEffect(()=>{

    //     let imageArrNames = [];
    //     arrQuestions.map((question)=>{
    //         imageArrNames.push(question.image.imageName)
    //     })

    //     downloadImagesArr(imageArrNames)
    //     .then((res)=>{
    //         setImageArr(res)
    //         setActivePanel(0)
    //     })

    // },[])


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
    const saveAnswersToServer= () => sendUserAnswersToServer(getPrepareDataToSendToServer())



    //Внешняя навигация
    const goToLoadingView = () => dispath(goToLoadingViewAction)
    const goToResultView = () => dispath(goToResultViewAction())
    const goToPollView = () => {
        dispath(goToListSurveyAction())
        dispath(goToPollViewAction())
    }
    const goToViewListQuestions = () =>dispath(goToViewListQuestionsAction())





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

        if(checkIndex(indexQuestion)){
            changeHistory(indexQuestion)
            setActivePanel(indexQuestion)
        }
    }
    const goToPrevQuestion=()=> goToCurrentQuestion(activePanel - 1)
    const goToNextQuestion=()=> goToCurrentQuestion(history.length)


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
        saveAnswersToServer()
        goToResultView()}, 750)
    
    const finishWithOutTimeOut = () => {
        saveAnswersToState()
        saveAnswersToServer()
        goToResultView()
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
    const [history, setHistory] = useState([0]);
    const changeHistory = (nextIndex) => {

        //Установка истории
        let his = [];
        for(let i=0;i<nextIndex+1;i++){
            his.push(i)
        }
        setHistory(his)


        //vkBridge
        if (nextIndex === 0) {
            vkBridge.send('VKWebAppDisableSwipeBack');
            }
        else{
            vkBridge.send('VKWebAppEnableSwipeBack');
        }
    }




    // const modal = (
    //     <ModalRoot activeModal={isModalOpen} onClose={changeModal}>
    //         <ModalPageForListQuestions
    //             id={MODAL_ID}
    //             arrQuestions={arrQuestions}
    //             getUserAnswer={getUserAnswer}
    //             changeModal={changeModal}
    //             goToCurrentQuestion={goToCurrentQuestion}
    //             finishSurvey={finishSurvey}
    //         />
    //     </ModalRoot>
    // )



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



    // const setNotActiveBackgoundToAnswerButton = () =>{
    //     let panel = document.getElementsByName(createIdActivePanel(indexQuestion));
    //     const buttons = panel[0].getElementsByClassName("IteamListQuestion__answer");

    //     for(let i=0;i<buttons.length;i++){
    //         buttons[i].style.backgroundColor = "var(--main-second-bg-color)"
    //     }
    // }


    return (
        <View id={id} 
            activePanel={activePanel} 
            // modal={modal} 
            history={history} 
            onSwipeBack={goToPrevQuestion}
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
                        goToPrevQuestion={goToPrevQuestion}
                        getUserAnswer={getUserAnswer}

                        changeModal={openModal}

                        // setNotActiveBackgoundToAnswerButton={setNotActiveBackgoundToAnswerButton}
                    />
                ))
            }
        </View>
    )
}

export default ListQuestions;
