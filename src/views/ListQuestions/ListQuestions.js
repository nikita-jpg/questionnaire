import { View,ModalRoot,ModalPage,List, SimpleCell, Div, usePlatform, ViewWidth, Group } from '@vkontakte/vkui';
import React, { useEffect, useState } from 'react';
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

// const resetQuestions = (arrQuestions) =>{
//     return arrQuestions.map((question)=>{
//         question.userAnswer = null;
//     })
// }

const ListQuestions = ({id, goToPollViewAction=()=>{}, goToResultViewAction=()=>{}, goToListSurveyAction=()=>{}}) => {

    //Получаем все данные для работы компонента
    let arrQuestions = useSelector(getArrQuestions)
    const dispath = useDispatch()


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





    // console.log(arrQuestions)
    // const surveyFinishedGoToResult = useSelector(getSurveyFinishedGoToResult);
    // const dispath = useDispatch()

    //Если мы уже проходили этот опросник или пользователь не нажал "Заново" в Result, то переходим к Result.
    // const isGoToResult = () => {
    //     if((arrQuestions[0].userAnswer !== null) && (!surveyFinishedGoToResult)){
    //         dispath(goToResultView())
    //     }
    // }
    // isGoToResult()

    const createIdActivePanel = index => `IteamListQuestion-${index}`;


    const onFinish = () => {

    }

    // логика хранения ответов
    const getInitStateAnswers = () => [
        -1,-1,-1,-1,-1,-1,-1,-1
    ];

    const [stateAnswers, setStateAnswers] = useState(getInitStateAnswers());

    // const giveAnswer = (indexQuestion, indexAnswer) => {
    //     stateAnswers[indexQuestion] = indexAnswer;
    //     setStateAnswers([...stateAnswers]);
    // }

    const resetStateAnswers = () => setStateAnswers(getInitStateAnswers());

    // логика переключения вопросов
    const [indexQuestion, setIndexQuestion] = useState(0);
    const setIndexQuestionAndHistory = (newIndex) => {
        setIndexQuestion(newIndex)
        changeHistory(newIndex)
    }

    // const resetData = () => {
    //     resetStateAnswers();
    //     setIndexQuestionAndHistory(0);
    // }

    // const createGoToNextQuestion = (indexQuestion, maxLength) => (indexAnswer) => {
    //     giveAnswer(indexQuestion, indexAnswer);

    //     if (indexQuestion < maxLength - 1) {
    //         setIndexQuestionAndHistory(indexQuestion + 1);
    //     } else {
    //         onFinishWithAlert();
    //     }
    // }

    // const createGoToPrevQuestion = (indexQuestion) => () => {
    //     if (indexQuestion > 0) {
    //         setIndexQuestionAndHistory(indexQuestion - 1);
    //     } else {
    //         openCloseListQuestionsAleret();
    //     }
    // }

    // логика перехода к любому вопросу
    const [lastIndexQuestion, setLastIndexQuestion] = useState(-1);

    const createGoToQuestionWithoutAnswer = (toIndexQuestion) => {
        setNotActiveBackgoundToAnswerButton()
        if (indexQuestion != toIndexQuestion)
        {
            setIndexQuestionAndHistory(toIndexQuestion);
        }   
    }

    const goToLastQuestion = () => {
        setIndexQuestionAndHistory(lastIndexQuestion);
        setLastIndexQuestion(-1);
    }

    








    const setNotActiveBackgoundToAnswerButton = () =>{
        let panel = document.getElementsByName(createIdActivePanel(indexQuestion));
        const buttons = panel[0].getElementsByClassName("IteamListQuestion__answer");

        for(let i=0;i<buttons.length;i++){
            buttons[i].style.backgroundColor = "var(--main-second-bg-color)"
        }
    }

    //Получение необходимых данных
    // const dispath = useDispatch();
    // let arrQuestions = useSelector(getArrQuestions);
    // const sendAnswersToServer = () => dispath(goToPollViewAction())
    // const sendAnswersToState = () => dispath(goToPollViewAction())

    //Дать ответ
    // const giveAnswer = (indexQuestion, indexAnswer) => {

    // }

    // const goToQuestion = (indexQuestion) =>{

    // }

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
        // const onFinishWithAlert = () => {
        //     isAllAnswered() ? onFinish(stateAnswers) : openFinishAlert()
        // }
        // const isAllAnswered = () => {
        //     for (let i=0;i<stateAnswers.length;i++){
        //         if(stateAnswers[i] === -1) return false;
        //     }
        //     return true
        // }
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
                        // key={i}
                        id={i}
                        // name={createIdActivePanel(i)}
                                        
                        question={question}
                        giveAnswer={giveAnswer}
                        goToNextQuestion={goToNextQuestion}
                        goToPrevQuestion={goToPrevQuestion}
                        countQuestions={arrQuestions.length}
                        isModalOpen={isModalOpen}
                        // numberCurrentQuestion={i+1}
                        // countQuestions={arr.length}

                        // indexAnswer={stateAnswers[i]}

                        // lastIndexQuestion={lastIndexQuestion}
                        // currentIndexQuestion={i}
                        // goToLastQuestion={goToLastQuestion}

                        // goToNextQuestion={createGoToNextQuestion(i, arr.length)}
                        // goToPrevQuestion={createGoToPrevQuestion(i)}

                        // onFinish={() => onFinishWithAlert()}
                        
                        changeModal={changeModal}
                        // changeHistory={changeHistory}
                        // isModalOpen={isModalOpen}

                        // setNotActiveBackgoundToAnswerButton={setNotActiveBackgoundToAnswerButton}
                    />
                ))
            }
        </View>
    )
}

export default ListQuestions;
