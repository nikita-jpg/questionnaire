import { Icon24Back } from "@vkontakte/icons";
import { Alert, Panel, PanelHeader, PanelHeaderButton, PromoBanner, useAdaptivity, View } from "@vkontakte/vkui";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import bridge from '@vkontakte/vk-bridge';

import "./Result.css";
import animate from "../../anime/animate";
import easeOut from "../../anime/easeOut";
// import ListQuizes from "../../components/ListQuizes/ListQuizes";
import ResultButtons from "./ResultButtons/ResultButtons";
import ListCard from "../../components/ListCard/ListCard";
import AnswersQuestions from "../AnswersQuestions/AnswersQuestions";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const Result = ({ id, year, percent, historicalEvent, quizes, indexesAnswers, questions, isFirstOpenResult, setIsFirstOpenResult,
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


        const [testAnim,setTestAnim] = useState(false)
    //Анимация 
        const getClassNameForPercent = (percent) => {
            if (percent <= 4) {
                return "Result__year-postfix_bad";
            }

            if (percent <= 6) {
                return "Result__year-postfix_normal";
            }

            return "Result__year-postfix_good";
        }

        const HEIGHT_HEADER = 60;
        const HEIGHT_YEAR = 76;
        const WIDTH_CHAR_IN_YEAR = 58;
        const WIDTH_PERCENT = 78;
        const WIDTH_YEAR = WIDTH_CHAR_IN_YEAR * year.length;
        const WIDTH_POSTFIX = WIDTH_CHAR_IN_YEAR * String(percent).length;
        const WIDTH_PRETFIX = WIDTH_YEAR - WIDTH_POSTFIX;
        const PADDING_LEFT_AND_RIGHT = 10;

        
        const stringPrefix = String(year).replace(String(percent), "");
        const widthContent = document.documentElement.clientWidth - PADDING_LEFT_AND_RIGHT * 2;

        const shiftX = WIDTH_YEAR + WIDTH_PERCENT > widthContent
            ?(widthContent - WIDTH_YEAR) / 2
            :WIDTH_PERCENT / 2;

        let initialTransitionYearX;

        if (WIDTH_YEAR + WIDTH_PERCENT > widthContent) {
            initialTransitionYearX = (widthContent - WIDTH_POSTFIX - WIDTH_PERCENT) / 2 + (WIDTH_YEAR + WIDTH_PERCENT - widthContent);
        } else {
            initialTransitionYearX = WIDTH_PRETFIX / 2;
        }

    
        const initialStyles = {
            overflowResult: "hidden",
            opacityPercent: 1,
            opacityPrefixYear: 0,
            transitionYearY: document.documentElement.clientHeight / 2 - HEIGHT_YEAR - HEIGHT_HEADER,
            transitionYearX: -initialTransitionYearX,
            opacityHistoricalEvent: 0,
            transitionContentY: document.documentElement.clientHeight / 2 + HEIGHT_YEAR / 2,
            opacityContent: 0
        };

        const finishStyles = {
            overflowResult: "",
            opacityPercent: 0,
            opacityPrefixYear: 1,
            transitionYearY: 0,
            transitionYearX: shiftX,
            opacityHistoricalEvent: 1,
            transitionContentY: 0,
            opacityContent: 1
        }

        const [styles, setStyles] = useState(isFirstOpenResult ?initialStyles :finishStyles);

        const stylePercent = {
            opacity: styles.opacityPercent
        }

        const stylePrefixYear = {
            opacity: styles.opacityPrefixYear
        }

        const styleYear = {
            transform: `translate(${styles.transitionYearX}px, ${styles.transitionYearY}px)`
        }

        const styleHistoricalEvent = {
            opacity: styles.opacityHistoricalEvent,
            transform: `translateY(${styles.transitionYearY}px)`
        }

        const styleContent = {
            opacity: styles.opacityContent,
            transform: `translateY(${styles.transitionContentY}px)`,
            width: "100%",
            maxWidth:"370px"
        }

        const styleResult = {
            overflow: styles.overflowResult
        }

        // useEffect(() => {
        //     if (isFirstOpenResult) {
        //         setIsFirstOpenResult(false);
        //     } else {
        //         return;
        //     }
        // });



    //Реклама
        const [isAdVisible, setAdVisible] = useState(true)
        const [adDate,setAdDate] = useState({
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

        // const getAdData = () => {
        //     bridge.send('VKWebAppGetAds')
        //         .then((promoBannerProps) => {
        //             setAdDate(promoBannerProps)
        //             setAdVisible(true);
        //         })
        //         .catch(error => console.log(error))
        //         .finally(()=>{
        //             console.log("final")
        //         })
        // }
        // getAdData();

    

    //Alert
        const getAnswerText = (indexQuestion, indexInAnswer) => {
            if (indexesAnswers[indexQuestion] === -1) return "Вы не ответили"
            return `${questions[indexQuestion].answerOptions[indexInAnswer].text}`;
        }

        const [alert, setAlert] = useState(null)
        const openAlert = (indexQuestion) => {
            const indexRightAnswer = questions[indexQuestion].answerOptions.findIndex(a => a.score === 1);
            const indexUserAnswer = indexesAnswers[indexQuestion];

            setAlert(
            <div className="AnswersQuestions__alert_big">
                <Alert
                    // style={{width:"710px"}}   
                    actionsLayout={"horizontal"}
                    onClose={() => {console.log(document.getElementsByClassName("vkuiAlert--ios")); setAlert(null)}}
                    actions={[{
                        title:"Закрыть",
                        autoclose:true,
                        mode:"cancel"
                    }]}
                >
                    <div className="AnswersQuestions__alert">
                        <div className="AnswersQuestions__alert__answers">

                            {
                                indexUserAnswer !== indexRightAnswer &&
                                <div className="AnswersQuestions__alert__answer">
                                    <div className="AnswersQuestions__alert__title-answer-wrap AnswersQuestions__alert__title-answer-wrap_bad">
                                        <div
                                            className="AnswersQuestions__alert__title-answer AnswersQuestions__alert__title-answer_bad"
                                            >Ваш ответ
                                        </div>
                                    </div>

                                    <div
                                        className="AnswersQuestions__alert__text-answer"
                                    >
                                        {getAnswerText(indexQuestion, indexUserAnswer)}
                                    </div>
                                    {/* <div className="AnswersQuestions__alert__text-answer">
                                        {getAnswerText(indexQuestion)}
                                    </div> */}
                                </div>
                            }
                        
                            <div className="AnswersQuestions__alert__answer">
                                <div className="AnswersQuestions__alert__title-answer-wrap AnswersQuestions__alert__title-answer-wrap_good">
                                    <div
                                        className="AnswersQuestions__alert__title-answer AnswersQuestions__alert__title-answer_good"
                                    >
                                        {
                                            indexUserAnswer === indexRightAnswer
                                                ? "Ваш ответ верен"
                                                : "Правильный ответ"
                                        }
                                    </div>
                                </div>

                                <div
                                    className="AnswersQuestions__alert__text-answer"
                                >
                                    {getAnswerText(indexQuestion, indexRightAnswer)}
                                </div>
                            </div>
                                
                            <div className="AnswersQuestions__alert__answer"> 
                                <div className="AnswersQuestions__alert__title-answer-wrap AnswersQuestions__alert__title-answer-wrap_normal">
                                    <div
                                        className="AnswersQuestions__alert__title-answer AnswersQuestions__alert__title-answer_normal"
                                    >Остальные варианты</div>
                                </div> 

                                {
                                    questions[indexQuestion].answerOptions.map((answer, i) => {
                                        if (i === questions[indexQuestion].answerOptions.findIndex(a => a.score === 1) || i === indexesAnswers[indexQuestion]) {
                                            return null;
                                        }

                                        return (
                                        <div
                                            className="AnswersQuestions__alert__text-answer"
                                        >
                                            {answer.text}   
                                        </div>
                                            // <p key={i} className="AnswersQuestions__alert__text-answer">
                                            //     {answer.text}
                                            // </p>
                                        )
                                    })
                                }
                            </div>

                        </div>
                    </div>
                </Alert>
                </div>
            )
        }

        let test = document.documentElement.clientHeight;
        // test=200;
    
        // style={{marginTop:test}}

    return (
        <View 
            id={id} 
            activePanel={activePanel} 
            popout={alert} 
            onSwipeBack={goBackInHistory}
            history={history}>

            <Panel id={PANEL_RESULT} onClose={()=>{setIsFirstOpenResult(false)}}>

                <div>

                    <Header></Header>

                    <div className="Result">
                        <div className="Result__container" style={{height:test}}>

                            <div className={`Result__year ${isFirstOpenResult ? "Result__fade-anim":""}`} >
                                {/* <span className="Result__year-prefix">{stringPrefix}</span> */}
                                    <span className={getClassNameForPercent(percent)}>
                                        {percent}
                                    <span>/8</span>
                                </span>
                            </div>

                            <div className={`Result__buttons ${isFirstOpenResult ? "Result__fade-anim":""}`}>
                                <ResultButtons 
                                    onAgain={modifyIsFirstOpenResult(onAgain)}
                                    onGoToAnswersQuestion={ () => { setIsFirstOpenResult(false); goToPanelAnswers()}}
                                    goToViewListAndQuizes={goToViewListAndQuizesWrapper}
                                    // onBack={onBack}
                                />
                            </div>

                            <div className={`Result__adds ${isFirstOpenResult ? "Result__fade-anim":""}`}>
                            {
                                isAdVisible &&
                                <PromoBanner bannerData={adDate} onClose={() => {setAdVisible(false)}}></PromoBanner>
                                // getAdData()
                            }
                            </div>
{/* 
                            <CSSTransition
                                in={testAnim}
                                timeout={2000}
                                classNames="Result__year"
                                unmountOnExit
                                >

                            </CSSTransition> */}

                        </div>

                    {/* <div style={{height:test}}>
                    <CSSTransition
                            in={testAnim}
                            timeout={2000}
                            classNames="Result__year"
                            unmountOnExit>
                        <div style={{marginTop: testAnim ? 0 : test}} className="Result__year" >
                            <span className="Result__year-prefix">{stringPrefix}</span>
                            <span className={getClassNameForPercent(percent)}>
                                {percent}
                                <span>/8</span>
                            </span>
                        </div>
                    </CSSTransition>
                    </div> */}

                        {/* <div className="Result__historical-event">{historicalEvent}</div> */}

                        {/* <div style={styleContent} className="Result__content"></div> */}


                        {/* <CSSTransition
                            in={testAnim}
                            timeout={300}
                            classNames="Result__buttons"
                            unmountOnExit
                        >
                            <div className="Result__buttons">
                                <ResultButtons 
                                    onAgain={modifyIsFirstOpenResult(onAgain)}
                                    onGoToAnswersQuestion={goToPanelAnswers}
                                    goToViewListAndQuizes={goToViewListAndQuizesWrapper}
                                    // onBack={onBack}
                                />
                            </div>
                        </CSSTransition> */}

                            {/* <div className="Result__adds">
                            {
                                isAdVisible &&
                                <PromoBanner bannerData={adDate} onClose={() => {setAdVisible(false)}}></PromoBanner>
                                // getAdData()
                            }
                            </div>

                            <div className="Result__cards">
                            {
                                <ListCard
                                    curWidth={375}
                                    info={quizes}
                                >  
                                </ListCard>
                            }
                            </div> */}
                        
                        

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
            {/* <Panel
                id={PANEL_ANSWERS_QUESTIONS}>

            </Panel> */}

        </View>
    )
}

export default Result;