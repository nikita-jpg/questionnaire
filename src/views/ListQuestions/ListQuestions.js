import { View,ModalRoot,ModalPage,List, SimpleCell, Div, usePlatform, ViewWidth, Group } from '@vkontakte/vkui';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import IteamListQuestion from './IteamListQuestion/IteamListQuestion';
import ModalPageHead from '../../components/ModalPageHead/ModalPageHead';
import vkBridge from '@vkontakte/vk-bridge'
import AlertWrapper from '../../components/AlertWrapper/AlertWrapper';
import './ListQuestions.css'
import { useDispatch, useSelector } from 'react-redux';
import { getArrQuestions, getCurQuestions, getCurSurveyId } from '../../Selectors/data_selectors';
import { getSurveyFinishedGoToResult } from '../../Selectors/listSurvey_selectors';
import { sendUserAnswersToServer } from '../../NotUI/Server/server';
import ModalPageForListQuestions from './ModalPageForListQuestions/ModalPageForListQuestions';
import { QUESTION_NOT_ANSWERED } from '../../NotUI/Data/consts';

const MODAL_ID = "MODAL_ID"
const PANEL_FIRST_ID="IteamListQuestion-0"


const ListQuestions = ({id, 
    goToPollViewAction=()=>{}, 
    goToResultViewAction=()=>{}, 
    goToListSurveyAction=()=>{},
    saveUserAnswersAction=()=>{}
}) => {



    //Получение данных
    const arrQuestions = useSelector(getCurQuestions)
    const curSurveyId = useSelector(getCurSurveyId)
    const dispath = useDispatch();



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
    const saveAnswersToServer= () => sendUserAnswersToServer(getPrepareDataToSend())



    //Внешняя навигация
    const goToResultView = () => dispath(goToResultViewAction())
    const goToPollView = () => {
        dispath(goToListSurveyAction())
        dispath(goToPollViewAction())
    }



    //Логика переключения вопросов
    const [indexQuestion, setIndexQuestion] = useState(0);
    const setIndexQuestionAndHistory = (newIndex) => {
        setIndexQuestion(newIndex)
        changeHistory(newIndex)
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

        if(checkIndex(indexQuestion)){
            changeHistory(indexQuestion)
            setIndexQuestion(indexQuestion)
        }
    }
    const goToPrevQuestion=()=> goToCurrentQuestion(indexQuestion - 1)
    const goToNextQuestion=()=> goToCurrentQuestion(history.length)



    //Окончание опроса
    const cheakAllAnswered = () => {
        return arrQuestions.length === userAnswers.length;
    }

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

    const finishSurveyWithOutCheck = () =>{
        saveAnswersToState()
        saveAnswersToServer()
        goToResultView()
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



    // Работа с модальным окном
    const [isModalOpen, setModalOpen] = useState(null)
    const changeModal = () => {
        if(isModalOpen === MODAL_ID){
            setModalOpen(null)
        }
        else{
            setModalOpen(MODAL_ID)
        }
    }
    const modal = (
        <ModalRoot activeModal={isModalOpen} onClose={changeModal}>
            <ModalPageForListQuestions
                id={MODAL_ID}
                arrQuestions={arrQuestions}
                getUserAnswer={getUserAnswer}
                changeModal={changeModal}
                goToCurrentQuestion={goToCurrentQuestion}
                finishSurvey={finishSurvey}
            />
        </ModalRoot>
    )



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
                    finishSurveyWithOutCheck();
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
            activePanel={indexQuestion} 
            modal={modal} 
            history={history} 
            onSwipeBack={goToPrevQuestion}
            popout={alert}
            >
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

                        changeModal={changeModal}

                        // setNotActiveBackgoundToAnswerButton={setNotActiveBackgoundToAnswerButton}
                    />
                ))
            }
        </View>
    )
}

export default ListQuestions;
