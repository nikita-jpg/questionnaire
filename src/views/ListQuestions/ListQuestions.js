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
import * as appNavigate from '../../App/Actions';

import * as alert from '../../components/Alert/actions'

import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import * as alertActions from '../../components/Alert/actions'

const PANEL_LOADING = "PANEL_LOADING-0"


let activePanel = 0;
let isStartExitModalOpen =  false;
let isAllowedGoToPoolView = false;



const ListQuestions = ({id,
    goToPollViewAction=()=>{}, 
    goToResultViewAction=()=>{},
    goToListSurveyAction=()=>{},
    saveUserAnswersAction=()=>{}
}) => {

    // window.onpopstate = function(event) {
    //     setActivePanel(activePanel-1)
    //     console.log("pop")
    //     // console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
    //   };

    
    // window.addEventListener('popstate', (event) => {
    //     console.log("pop");
    // });



    // window.addEventListener('pushstate', (event) => {
    //     console.log("pop");
    //     // setActivePanel(activePanel-1)
    // });



    //Получение данных
    const arrQuestions = useSelector(getCurQuestions)
    const curSurveyId = useSelector(getCurSurveyId)
    const dispath = useDispatch();

    //Если пропало соединение с интернетом
    const goToViewListQuestions = () => dispath(appNavigate.App_goToLoadingtView())
    const serverErrorAlert = <AlertCloseApp errorText = {"К сожалению, потеряно соединение с сервером. Просим вас зайти позже"}></AlertCloseApp>


    //Внутренняя навигация
    // const [activePanel, setActivePanel] = useState(0);


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
    const goToResultView = () => dispath(goToResultViewAction())
    let navigate = useNavigate();
    const goToPollView = () => {
        dispath(goToListSurveyAction())
        dispath(goToPollViewAction())
        navigate("/PoolView/ListQuizes")
    }


    //Навигация
    const checkIndex = (indexQuestion) =>{

        // //Если мы переходим к этому индексу, значит пользователь ответил на посл вопрос и надо завершать опрос
        // if(indexQuestion===arrQuestions.length){
        //     finishSurvey()
        //     return false;
        // }

        // if(indexQuestion === -1){
        //     openCloseListQuestionsAleret()
        //     return false;
        // }

        return true
    }
    const goToCurrentQuestion = (indexQuestion)=>{
        
        if(checkIndex(indexQuestion)){
            changeHistory(indexQuestion)

            if(indexQuestion > activePanel){
                for(let i=activePanel+1;i<=indexQuestion;i++){
                    navigate(`${i}`)
                }
                activePanel = indexQuestion
            }else{
                for(let i=indexQuestion;i<activePanel;i++){
                    navigate(-1)
                }
            }
        }
    }
    // const goToPrevQuestion=()=> goToCurrentQuestion(activePanel - 1)
    const goToPrevQuestion=() => {goToCurrentQuestion(activePanel - 1)}
    // const goToNextQuestion=()=> navigate(`${activePanel + 1}`)
    const goToNextQuestion=() => {goToCurrentQuestion(activePanel + 1)}


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

    // const backEventListener = (event) =>{
    //     const activePanelNumber = Number.parseInt(document.location.toString().slice(-1))
    //     // setActivePanel( activePanelNumber )
    //     activePanel = indexQuestion

    //     console.log(test)

    //     // console.log(Number.parseInt(document.location.toString().slice(-1)) + 1)
    //     // navigate(     `${Number.parseInt(document.location.toString().slice(-1)) + 1 }`   )
    // }

    useEffect(() => {
        dispath(setDataModalListQuestions({
            arrQuestions:arrQuestions,
            getUserAnswer:getUserAnswer,
            goToCurrentQuestion:goToCurrentQuestion,
            finishSurvey:finishSurvey
        }))   

        window.addEventListener('popstate', (event) =>{
            activePanel = activePanel - 1;
            console.log(window.history)

            if(activePanel === -1){

                if(!isAllowedGoToPoolView){
                    if(!isStartExitModalOpen){
                        openCloseListQuestionsAleret();
                    } 
                    navigate(`${activePanel + 1}`)
                    activePanel = activePanel + 1;
                }
            }
        })
        // window.onpopstate = function(event) {
        //     console.log(activePanel)
        //     setActivePanel(activePanel-1)
        // }

        // window.onpopstate = function(event) {
        //     console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
        //     navigate(Number.parseInt(document.location.toString().slice(-1)) + 1)
        // };
        // window.addEventListener('popstate', backEventListener);

        // const unblock = history.block((location, action) => {
        //     if (true) {
        //       return window.confirm("Navigate Back?");
        //     }
        //     return true;
        //   });
        
        //   return () => {
        //     unblock();
        //   };

        // window.addEventListener('pushstate', (event) => {
        //     console.log("pop");
        // // setActivePanel(activePanel-1)
        // });

        // window.onhashchange = function(event) {
        //     console.log("vdsklfvsdlf");
        // }


        // window.history.pushState = function(event) {
        //     setActivePanel(activePanel+1)
        //     console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
        // };

    //     window.onpopstate = function(event) {
    // 	// if(event.state === null){
    //     // 	window.history.forward()
    // 	// }
	// 	console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
	// };
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


    //Alert
    const [alert, setAlert] = useState(null);

    const openCloseListQuestionsAleret = () => {

        dispath(alertActions.Alert_setAlert(
            <AlertWrapper
                header="Уверены, что хотите выйти?"
                leftText={"Отмена"}
                rightText={"Выйти"}
                rightFunc={()=>{  
                    isAllowedGoToPoolView = true;
                    navigate(-1) 
                    // goToPollView()
                }}
                onClose={()=>{dispath(alertActions.Alert_closeAlert())}}
            >
            </AlertWrapper>
        ))
    }
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

    // console.log(window.location)
    return (
            
            <Routes>
                {
                    arrQuestions.map((question, i) =>(
                        <Route exact path={`${i}`} element={
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
                            />
                        }/>
                    ))
                }
            </Routes>
    )
}

export default ListQuestions;
