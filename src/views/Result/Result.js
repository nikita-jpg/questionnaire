import bridge from '@vkontakte/vk-bridge';
import { ContentCard, Div, Panel, PromoBanner, View } from "@vkontakte/vkui";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import AlertQuestionResult from "../../components/AlertQuestionResult/AlertQuestionResult";
import CustomTooltip from '../../components/CustomTooltip/CustomTooltip';
import Header from "../../components/Header/Header";
import "../../components/ListCard/ListCard.css";
import PanelWrapper from '../../components/PanelWrapper/PanelWrapper';
import { getAnswersResultSurvey } from '../../help';
import { getArrQuestions, getCurSurvey } from '../../Selectors/data_selectors';
import PanelAnswersQuestions from './PanelAnswersQuestions/PanelAnswersQuestions';
// import { getIndexEraAndSurvey } from '../../Selectors/data_selectors';
import PanelResult from './PanelResult/PanelResult';
import "./Result.css";
import ResultButtons from "./ResultButtons/ResultButtons";
import ResultCards from './ResultCards/ResultCards';

const Result = ({ id, titleAge, percent, eras, quizes, indexesAnswers, questions, isFirstOpenResult, setIsFirstOpenResult, indexQuiz,
    createOnClickItemQuizes = (index) => null,
    onAgain=()=>{}, 
    goToViewListAndQuizes=()=>{},
    goToSurveyViewAction=()=>{},
    goToPollViewAction=()=>{},
 }) => {

    //Получаем необходимые данные
    const curSurvey = useSelector(getCurSurvey)
    const dispatch = useDispatch()


    // const indexAgeAndSurvey = useSelector(getIndexEraAndSurvey);
    // const indexAge = 0;

//Внешняя навигация
        const goToSurveyView = () => {
            dispatch(goToSurveyViewAction())
        }

        const goToPollView = () => {
            dispatch(goToPollViewAction())
        }

    //Работа с панелями
        const PANEL_RESULT = "PANEL_RESULT";
        const PANEL_ANSWERS_QUESTIONS = "PANEL_ANSWERS_QUESTIONS";
        const [activePanel, setActivePanel] = useState(PANEL_RESULT)

        const goToPanelAnswers = () => {
            goForwardInHistory(PANEL_ANSWERS_QUESTIONS)
            setActivePanel(PANEL_ANSWERS_QUESTIONS)
        }


    //История
        const [history, setHistory] = useState([PANEL_RESULT]);

        const goBackInHistory = () => {
			let his = history;
			his.pop()
			if (activePanel === PANEL_RESULT) {
				bridge.send('VKWebAppEnableSwipeBack');
			}
			setHistory(his)
            setActivePanel(history[history.length - 1])	
		}

		const goForwardInHistory = (panelId) => { 
			let his = history;
			his.push(panelId);
			if (activePanel === PANEL_RESULT) {
				bridge.send('VKWebAppDisableSwipeBack');
				setHistory(his)
			}
			else{
				setHistory(his)
			}
		}


    //Кнопки
        // Переход к эпохам
        const goToViewListAndQuizesWrapper = () => {
            setIsFirstOpenResult(true)
            goToViewListAndQuizes()
        }
        // Ещё раз
        const modifyIsFirstOpenResult = (f) => (...args) => {
            setIsFirstOpenResult(true);
            return f(...args);
        }

    //Анимация 
        const getClassNameForPercent = (percent) => {
            if (percent <= 4) {
                return "Result__points-postfix_bad";
            }

            if (percent <= 6) {
                return "Result__points-postfix_normal";
            }

            return "Result__points-postfix_good";
        }

    //Реклама
        const [isAdVisible, setAdVisible] = useState(true)
        const [adDate, setAdDate] = useState({
            title: 'Заголовок',
            domain: 'vk.com',
            trackingLink: 'https://vk.com',
            ctaText: 'Перейти',
            advertisingLabel: 'Реклама',
            iconLink: 'https://sun9-7.userapi.com/c846420/v846420985/1526c3/ISX7VF8NjZk.jpg',
            description: 'Описание рекламы',
            ageRestrictions: "14+",
            statistics: [
              { url: '', type: 'playbackStarted' },
              { url: '', type: 'click' }
            ]
          })    

    //Alert
        const getAnswerText = (indexQuestion, indexInAnswer) => {
            if (indexesAnswers[indexQuestion] === -1) return "Вы не ответили"
            return `${questions[indexQuestion].answerOptions[indexInAnswer].text}`;
        }

        const [isVisibleAlert, setIsVisibleAlert] = useState(false);
        const [indexQuestion, setIndexQuestion] = useState();
        const calcIndexRightAnswer = (indexQuestion) => {
            return questions[indexQuestion].answerOptions.findIndex(a => a.score === 1);
        }
        const calcIndexUserAnswer = (indexQuestion) => {
            return indexesAnswers[indexQuestion];
        }
        const openAlert = (indexQuestion) => {
            setIndexQuestion(indexQuestion);
            setIsVisibleAlert(true);
        }

        // let startAnimDealyForCard = 0.2;
        // let stepAnimDealyForCard = 0.1;
        // let curAnimDealyForCard = -stepAnimDealyForCard;

        // const makeStepAnimDealyForCard = () => {
        //     curAnimDealyForCard = curAnimDealyForCard + stepAnimDealyForCard;
        //     return startAnimDealyForCard + curAnimDealyForCard + "s";
        // }

    return (
        <View 
            id={id} 
            activePanel={activePanel} 
            // popout={
            //     isVisibleAlert
            //     ?<AlertQuestionResult
            //         onClose={() => { console.log(document.getElementsByClassName("vkuiAlert--ios")); setIsVisibleAlert(false) }}
            //         indexQuestion={indexQuestion}
            //         indexUserAnswer={calcIndexUserAnswer(indexQuestion)}
            //         indexRightAnswer={calcIndexRightAnswer(indexQuestion)}
            //         getAnswerText={getAnswerText}
            //         answerOptions={questions[indexQuestion].answerOptions}
            //         questionText={questions[indexQuestion].questionText}
            //     />
            //     :null
            // } 
            onSwipeBack={goBackInHistory}
            history={history}>

            <PanelResult
                id={PANEL_RESULT}
                totalResult={getAnswersResultSurvey(curSurvey)}
                goSurveyAgain={goToSurveyView}
                goToPollView={goToPollView}
                goToPanelAnswers={goToPanelAnswers}
            />

            {/* <PanelWrapper id={PANEL_RESULT} onClose={()=>{setIsFirstOpenResult(false)}} isOneColumn={true}> */}

            {/* <div className={`Result__title ${isFirstOpenResult ? "Result__fade-anim":""}`} style={{animationDelay:makeStepAnimDealyForCard()}}> */}
                        {/* Цифра в виде результата */}
                        {/* <div className={`Result__title`} style={{animationDelay:makeStepAnimDealyForCard()}}>
                            <span className={`Result__points ${getClassNameForPercent(percent)}`}>
                                <CustomTooltip
                                    text={`${titleAge}: ${quizes[indexQuiz].title}`}
                                    defaultIsShown={isFirstOpenResult}
                                >
                                    {percent}
                                    <span>/{questions.length}</span>
                                </CustomTooltip>
                            </span>
                        </div> */}

                        {/* Панелька с кнопками */}
                        {/* <div className={`Result__buttons ${isFirstOpenResult ? "Result__fade-anim":""}`} style={{animationDelay:makeStepAnimDealyForCard()}}>
                            <ResultButtons 
                                onAgain={modifyIsFirstOpenResult(onAgain)}
                                onGoToAnswersQuestion={ () => { setIsFirstOpenResult(false); goToPanelAnswers()}}
                                goToViewListAndQuizes={goToViewListAndQuizesWrapper}
                            />
                        </div> */}

                        {/* Реклама */}
                        {/* {
                            isAdVisible &&
                            <div className={`Result__adds ${isFirstOpenResult ? "Result__fade-anim":""}`} style={{animationDelay:makeStepAnimDealyForCard()}}>
                                <PromoBanner bannerData={adDate} onClose={() => {setAdVisible(false)}}></PromoBanner>
                            </div>
                        } */}

                        {/* Карточки опросов */}
                        {/* <ResultCards 
                            indexAge={indexAge}
                            indexQuiz={indexQuiz}
                            eras={eras}
                            isFirstOpenResult={isFirstOpenResult}
                            isCompletedQuiz={percent === questions.length ? true : false}

                            makeStepAnimDealyForCard={makeStepAnimDealyForCard}
                            onAgain={modifyIsFirstOpenResult(onAgain)}
                            goToQuiz={createOnClickItemQuizes}
                            goToEras={goToViewListAndQuizes}
                        >
                        </ResultCards> */}

            {/* </PanelWrapper> */}

            <PanelAnswersQuestions
                id={PANEL_ANSWERS_QUESTIONS}
                questions={questions}
                indexesAnswers={indexesAnswers}
                onBack={goBackInHistory}
                openAlert={openAlert}
            >
            </PanelAnswersQuestions>

        </View>
    )
}

export default Result;
