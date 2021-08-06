import bridge from '@vkontakte/vk-bridge';
import { ContentCard, Div, Panel, PromoBanner, View } from "@vkontakte/vkui";
import React, { useState } from "react";
import AlertQuestionResult from "../../components/AlertQuestionResult/AlertQuestionResult";
import Header from "../../components/Header/Header";
import "../../components/ListCard/ListCard.css";
import AnswersQuestions from "../AnswersQuestions/AnswersQuestions";
import "./Result.css";
import ResultButtons from "./ResultButtons/ResultButtons";


const Result = ({ id, year, percent, historicalEvent, quizes, indexesAnswers, questions, isFirstOpenResult, setIsFirstOpenResult, indexQuiz,
    onBack = () => {}, createOnClickItemQuizes = (index) => null,
    onAgain=()=>{}, onGoToAnswersQuestion=()=>{}, goToViewListAndQuizes=()=>{} }) => {

    //Работа с панелями
        const PANEL_RESULT = "PANEL_RESULT";
        const PANEL_ANSWERS_QUESTIONS = "VIEW_ID_ANSWERS_QUESTIONS";
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

        let startAnimDealyForCard = 0.2;
        let stepAnimDealyForCard = 0.1;
        let curAnimDealyForCard = -stepAnimDealyForCard;

        const makeStepAnimDealyForCard = () => {
            curAnimDealyForCard = curAnimDealyForCard + stepAnimDealyForCard;
            return startAnimDealyForCard + curAnimDealyForCard + "s";
        }

    return (
        <View 
            id={id} 
            activePanel={activePanel} 
            popout={
                isVisibleAlert
                ?<AlertQuestionResult
                    onClose={() => { console.log(document.getElementsByClassName("vkuiAlert--ios")); setIsVisibleAlert(false) }}
                    indexQuestion={indexQuestion}
                    indexUserAnswer={calcIndexUserAnswer(indexQuestion)}
                    indexRightAnswer={calcIndexRightAnswer(indexQuestion)}
                    getAnswerText={getAnswerText}
                    answerOptions={questions[indexQuestion].answerOptions}
                    questionText={questions[indexQuestion].questionText}
                />
                :null
            } 
            onSwipeBack={goBackInHistory}
            history={history}>

            <Panel id={PANEL_RESULT} onClose={()=>{setIsFirstOpenResult(false)}}>
                <div className="Result">

                    <Header fixed={false}></Header>

                    <div className="Result__content">

                        <div className={`Result__title ${isFirstOpenResult ? "Result__fade-anim":""}`} style={{animationDelay:makeStepAnimDealyForCard()}}>
                            <span className={`Result__points ${getClassNameForPercent(percent)}`}>
                                    {percent}
                                <span>/{questions.length}</span>
                            </span>
                        </div>

                        <div className={`Result__buttons ${isFirstOpenResult ? "Result__fade-anim":""}`} style={{animationDelay:makeStepAnimDealyForCard()}}>
                            <ResultButtons 
                                onAgain={modifyIsFirstOpenResult(onAgain)}
                                onGoToAnswersQuestion={ () => { setIsFirstOpenResult(false); goToPanelAnswers()}}
                                goToViewListAndQuizes={goToViewListAndQuizesWrapper}
                            />
                        </div>


                        {
                            isAdVisible &&
                            <div className={`Result__adds ${isFirstOpenResult ? "Result__fade-anim":""}`} style={{animationDelay:makeStepAnimDealyForCard()}}>
                                <PromoBanner bannerData={adDate} onClose={() => {setAdVisible(false)}}></PromoBanner>
                            </div>
                        }


                        {
                            quizes.map((record,i) => {

                                if((record.percentProgress !== record.questions.length) && (i!==indexQuiz))
                                {
                                    return(
                                        <div className={`Result__card ${isFirstOpenResult ? "Result__fade-anim":""}`} style={{animationDelay:makeStepAnimDealyForCard() }}>
                                        <ContentCard
                                            header={
                                                <div className="ListCard__title">
                                                    <div>{record.title}</div>
                                                    <div>{record.percentProgress}/{record.numberOfQuestions}</div>
                                                </div>
                                            }
                                            mode={"tint"}
                                            onClick={createOnClickItemQuizes(i)}
                                            image={record.imageSrc}
                                            caption={record.description}
                                            className="ListCard__Card"
                                        />
                                    </div>
                                    )
                                }
                            })
                        }
                        
                    </div>
                </div>
            </Panel>

            <AnswersQuestions
                id={PANEL_ANSWERS_QUESTIONS}
                questions={questions}
                indexesAnswers={indexesAnswers}
                onBack={goBackInHistory}
                openAlert={openAlert}
            >
            </AnswersQuestions>
        </View>
    )
}

export default Result;
