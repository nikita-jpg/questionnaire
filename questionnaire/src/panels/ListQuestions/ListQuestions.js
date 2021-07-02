import { View,ModalRoot,ModalPage,List, SimpleCell, Div, usePlatform, ViewWidth, Group } from '@vkontakte/vkui';
import React, { useState } from 'react';
import IteamListQuestion from './IteamListQuestion/IteamListQuestion';
import ModalPageHead from '../../components/ModalPageHead/ModalPageHead';
import vkBridge from '@vkontakte/vk-bridge'
import AlertWrapper from '../../components/AlertWrapper/AlertWrapper';
import './ListQuestions.css'

const MODAL_ID = "MODAL_ID"
const PANEL_FIRST_ID="IteamListQuestion-0"



const ListQuestions = ({id, curWidth, arrQuestions, onBack=()=>{}, onFinish=totalScore=>{}, test=() => {}}) => {
    const createIdActivePanel = index => `IteamListQuestion-${index}`;
    const [history, setHistory] = useState([PANEL_FIRST_ID]);
    const [alert, setAlert] = useState(null);

    // логика хранения ответов
    const getInitStateAnswers = () => [
        ...arrQuestions.map(question => ({
            questionText: question.questionText.substring(0, 15),
            indexAnswer: -1
        }))
    ];

    const [stateAnswers, setStateAnswers] = useState(getInitStateAnswers());

    const giveAnswer = (indexQuestion, indexAnswer) => {
        stateAnswers[indexQuestion].indexAnswer = indexAnswer;
        setStateAnswers([...stateAnswers]);
    }

    const calculateScore = () => { 
        return stateAnswers.reduce((sum, dataAnswer, indexQuestion) => {
            if (dataAnswer.indexAnswer === -1) {
                return sum;
            }

            return sum + arrQuestions[indexQuestion].answerOptions[dataAnswer.indexAnswer].score;
        }, 0);
    }

    const resetStateAnswers = () => setStateAnswers(getInitStateAnswers());

    // логика переключения вопросов
    const [indexQuestion, setIndexQuestion] = useState(0);
    const setIndexQuestionAndHistory = (newIndex) => {
        setIndexQuestion(newIndex)
        changeHistory(newIndex)
    }

    const resetData = () => {
        resetStateAnswers();
        setIndexQuestionAndHistory(0);
    }

    const createGoToNextQuestion = (indexQuestion, maxLength) => (indexAnswer) => {
        giveAnswer(indexQuestion, indexAnswer);

        if (indexQuestion < maxLength - 1) {
            setIndexQuestionAndHistory(indexQuestion + 1);
        } else {
            onFinish(calculateScore(), stateAnswers.map(answer => answer.indexAnswer));
            resetData();
        }
    }

    const createGoToPrevQuestion = (indexQuestion) => () => {
        console.log(indexQuestion)
        if (indexQuestion > 0) {
            setIndexQuestionAndHistory(indexQuestion - 1);
        } else {
            openCloseListQuestionsAleret();
        }
    }

    // логика перехода к любому вопросу
    const [lastIndexQuestion, setLastIndexQuestion] = useState(-1);

    const createGoToQuestionWithoutAnswer = (toIndexQuestion) => {
        // console.log(indexQuestion)
        // console.log(toIndexQuestion)
        if (indexQuestion != toIndexQuestion)
        {
            // setLastIndexQuestion(fromIndexQuestion);
            setIndexQuestionAndHistory(toIndexQuestion);
        }   
    }

    const goToLastQuestion = () => {
        setIndexQuestionAndHistory(lastIndexQuestion);
        setLastIndexQuestion(-1);
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

    // История
    const changeHistory = (nextIndex) => { 
        setHistory()
		let his = [];
        for(let i=0;i<nextIndex+1;i++){
            his.push(createIdActivePanel(i))
        }
        setHistory(his)

		if (createIdActivePanel(nextIndex) === PANEL_FIRST_ID) {
			vkBridge.send('VKWebAppDisableSwipeBack');
		  }
        else{
            vkBridge.send('VKWebAppEnableSwipeBack');
        }
        console.log(his)
	}

    //Alert
    const onFinishWithAlert = () => {
        isAllAnswered() ? onFinish(calculateScore()) : openFinishAlert()
    }
    const isAllAnswered = () => {
        for (let i=0;i<stateAnswers.length;i++){
            if(stateAnswers[i].indexAnswer === -1) return false;
        }
        return true
    }
    const openCloseListQuestionsAleret = () => {

        setAlert(
            <AlertWrapper
                header="Уверены, что хотите выйти?"
                leftText={"Отмена"}
                rightText={"Выйти"}
                rightFunc={ () =>  {onBack(); resetData()}}
                onClose={closeAlert}
            >
            </AlertWrapper>
        )}
    const openFinishAlert = () => {        
        setAlert(

            <AlertWrapper
                header="Вы ответили не на все вопросы"
                leftText={"Отмена"}
                rightText={"Завершить"}
                rightFunc={ () => {onFinish(calculateScore())}}
                onClose={closeAlert}
            >
            </AlertWrapper>

        )}
        
    const closeAlert = () => {
        setAlert(null)
    }

    //Модальное окно
    const modal = (
        <ModalRoot activeModal={isModalOpen} onClose={changeModal}>
            <ModalPage 
                id={MODAL_ID}
                settlingHeight={75}
                header={
                    <ModalPageHead text="Вопросы" curWidth={curWidth} onClose={changeModal}></ModalPageHead>
                }>
                <Div>
                {
                    arrQuestions.map(({questionText, indexAnswer}, i, arr) => (
                        <SimpleCell 
                            key={i}
                            onClick={() => {createGoToQuestionWithoutAnswer(i); changeModal()}}
                            className={`ListQuestions__modal-el ${stateAnswers[i].indexAnswer !== -1 ? 'ListQuestions__modal-el_answered':''}`}>
                            <div className="ListQuestions__modal-el__text">
                                {questionText}
                            </div>
                        </SimpleCell>
                    ))
                    
                }
                <SimpleCell
                    onClick={ () => {onFinishWithAlert()}}
                    className="ListQuestions__modal-el">
                    <div className="ListQuestions__modal-el__finish-btn">
                       Завершить
                    </div>
                </SimpleCell>
                </Div>
            </ModalPage>

        </ModalRoot>
    )

    return (
        <View id={id} 
            activePanel={createIdActivePanel(indexQuestion)} 
            modal={modal} 
            history={history} 
            onSwipeBack={createGoToPrevQuestion(indexQuestion)}
            popout={alert}>
            {
                arrQuestions.map((question, i, arr) =>(
                    <IteamListQuestion
                        key={i}
                        id={createIdActivePanel(i)}
                        curWidth={curWidth}

                        question={question}
                        numberCurrentQuestion={i+1}
                        countQuestions={arr.length}

                        stateAnswers={stateAnswers}
                        indexAnswer={stateAnswers[i].indexAnswer}

                        lastIndexQuestion={lastIndexQuestion}
                        currentIndexQuestion={i}
                        goToLastQuestion={goToLastQuestion}
                        // goToQuestionWithoutAnswer={createGoToQuestionWithoutAnswer(i)}

                        goToNextQuestion={createGoToNextQuestion(i, arr.length)}
                        goToPrevQuestion={createGoToPrevQuestion(i)}

                        onFinish={() => onFinishWithAlert()}
                        
                        changeModal={changeModal}
                        changeHistory={changeHistory}
                        isModalOpen={isModalOpen}
                    />
                ))
            }
        </View>
    )
}

export default ListQuestions;
