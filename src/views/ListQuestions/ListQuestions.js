import { View,ModalRoot,ModalPage,List, SimpleCell, Div, usePlatform, ViewWidth, Group } from '@vkontakte/vkui';
import React, { useState } from 'react';
import IteamListQuestion from './IteamListQuestion/IteamListQuestion';
import ModalPageHead from '../../components/ModalPageHead/ModalPageHead';
import vkBridge from '@vkontakte/vk-bridge'
import AlertWrapper from '../../components/AlertWrapper/AlertWrapper';
import './ListQuestions.css'
import { useDispatch, useSelector } from 'react-redux';
import { getArrQuestions } from '../../Selectors/data_selectors';

const MODAL_ID = "MODAL_ID"
const PANEL_FIRST_ID="IteamListQuestion-0"



const ListQuestions = ({id, goToPollView, onBack=()=>{}, onFinish=totalScore=>{}}) => {
    const createIdActivePanel = index => `IteamListQuestion-${index}`;
    const [history, setHistory] = useState([PANEL_FIRST_ID]);
    const [alert, setAlert] = useState(null);

    const dispath = useDispatch()

    // логика хранения ответов
    const getInitStateAnswers = () => [
        -1,-1,-1,-1,-1,-1,-1,-1
    ];

    const [stateAnswers, setStateAnswers] = useState( getInitStateAnswers());

    const giveAnswer = (indexQuestion, indexAnswer) => {
        stateAnswers[indexQuestion] = indexAnswer;
        setStateAnswers([...stateAnswers]);
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
            onFinishWithAlert();
        }
    }

    const createGoToPrevQuestion = (indexQuestion) => () => {
        if (indexQuestion > 0) {
            setIndexQuestionAndHistory(indexQuestion - 1);
        } else {
            openCloseListQuestionsAleret();
        }
    }

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
	}

    //Alert
    const onFinishWithAlert = () => {
        isAllAnswered() ? onFinish(stateAnswers) : openFinishAlert()
    }
    const isAllAnswered = () => {
        for (let i=0;i<stateAnswers.length;i++){
            if(stateAnswers[i] === -1) return false;
        }
        return true
    }
    const openCloseListQuestionsAleret = () => {

        setAlert(
            <AlertWrapper
                header="Уверены, что хотите выйти?"
                leftText={"Отмена"}
                rightText={"Выйти"}
                rightFunc={ () =>  {dispath(goToPollView); resetData()}}
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
                rightFunc={ () => {onFinish(stateAnswers)}}
                onClose={()=>{setAlert(null)}}
            >
            </AlertWrapper>

    )}

    const arrQuestions = useSelector(getArrQuestions)
    //Модальное окно
    const modal = (
        <ModalRoot activeModal={isModalOpen} onClose={changeModal}>
            <ModalPage 
                id={MODAL_ID}
                settlingHeight={100}
                header={
                    <ModalPageHead text="Вопросы" onClose={changeModal}></ModalPageHead>
                }>
                <Div>
                {
                    arrQuestions.map(({questionText, indexAnswer}, i, arr) => (
                        <SimpleCell 
                            key={i}
                            onClick={() => {createGoToQuestionWithoutAnswer(i); changeModal()}}
                            className={`ListQuestions__modal-el ${stateAnswers[i] !== -1 ? 'ListQuestions__modal-el_answered':''}`}>
                            <div className="ListQuestions__modal-el__text">
                                {i+1}) {questionText}
                            </div>
                        </SimpleCell>
                    ))
                    
                }
                <SimpleCell
                    hasActive={false}
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

    const setNotActiveBackgoundToAnswerButton = () =>{
        let panel = document.getElementsByName(createIdActivePanel(indexQuestion));
        const buttons = panel[0].getElementsByClassName("IteamListQuestion__answer");

        for(let i=0;i<buttons.length;i++){
            console.log(buttons[i])
            buttons[i].style.backgroundColor = "var(--main-second-bg-color)"
        }
    }
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
                        name={createIdActivePanel(i)}
                                        
                        question={question}
                        numberCurrentQuestion={i+1}
                        countQuestions={arr.length}

                        indexAnswer={stateAnswers[i]}

                        lastIndexQuestion={lastIndexQuestion}
                        currentIndexQuestion={i}
                        goToLastQuestion={goToLastQuestion}

                        goToNextQuestion={createGoToNextQuestion(i, arr.length)}
                        goToPrevQuestion={createGoToPrevQuestion(i)}

                        onFinish={() => onFinishWithAlert()}
                        
                        changeModal={changeModal}
                        changeHistory={changeHistory}
                        isModalOpen={isModalOpen}

                        setNotActiveBackgoundToAnswerButton={setNotActiveBackgoundToAnswerButton}
                    />
                ))
            }
        </View>
    )
}

export default ListQuestions;
