import { View,ModalRoot,ModalPage,List, SimpleCell, Div, usePlatform, ViewWidth, Group } from '@vkontakte/vkui';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import IteamListQuestion from './IteamListQuestion/IteamListQuestion';
import ModalPageHead from '../../components/ModalPageHead/ModalPageHead';
import vkBridge from '@vkontakte/vk-bridge'
import AlertWrapper from '../../components/AlertWrapper/AlertWrapper';
import './ListQuestions.css'
import { useDispatch, useSelector } from 'react-redux';
import { getArrQuestions } from '../../Selectors/data_selectors';
import { getSurveyFinishedGoToResult } from '../../Selectors/listSurvey_selectors';
import { saveUserAnswers } from '../../NotUI/Data/actions';
import { sendUserAnswersToServer } from '../../NotUI/Server/server';
import ModalPageForListQuestions from './ModalPageForListQuestions/ModalPageForListQuestions';
import { QUESTION_NOT_ANSWERED } from '../../NotUI/Data/consts';

const MODAL_ID = "MODAL_ID"
const PANEL_FIRST_ID="IteamListQuestion-0"


const ListQuestions = ({id, goToPollViewAction=()=>{}, goToResultViewAction=()=>{}, goToListSurveyAction=()=>{}}) => {


    //Сбрасываем ответы пользователя при первом открытии
    const resetAnswers = (arrQuestions) => {
        arrQuestions.map((question)=>{
            question.userAnswer = QUESTION_NOT_ANSWERED
        })
        return arrQuestions
    }

    //Получаем все данные для работы компонента
    const arrQuestions = useSelector(getArrQuestions)
    const dispath = useDispatch();




	useEffect(() => {
        resetAnswers(arrQuestions)
	}, []);



    //Работа с ответами
    const giveAnswer = (indexQuestion, indexAnswer) => {
        arrQuestions[indexQuestion].userAnswer={idAnswerOption:arrQuestions[indexQuestion].answerOptions[indexAnswer].idAnswerOption}
    }
    const saveAnswersToState = () => dispath(saveUserAnswers(arrQuestions))
    const saveAnswersToServer= () => sendUserAnswersToServer(arrQuestions)



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
        let ret = true;
        arrQuestions.map((question)=>{
            if(question.userAnswer === QUESTION_NOT_ANSWERED){
                ret = false;
            }
        })
        return ret;
    }
    const finishSurvey = () => {
        if(!cheakAllAnswered()){
            openFinishAlert();
            return;
        }
        finishSurveyWithOutCheck()
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
                onClose={()=>{setAlert(null)}}
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

                        changeModal={changeModal}

                        // setNotActiveBackgoundToAnswerButton={setNotActiveBackgoundToAnswerButton}
                    />
                ))
            }
        </View>
    )
}

export default ListQuestions;
