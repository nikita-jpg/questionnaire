import { Icon24Back } from '@vkontakte/icons';
import { Alert, Div, Panel, PanelHeader, PanelHeaderButton, View } from '@vkontakte/vkui';
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Arrow from './ItemAnswerQuestion/Arrow';
// import './ItemAnswerQuestion/ItemAnswerQuestion.css';

import "./AnswersQuestions.css";
import ItemAnswerQuestion from './ItemAnswerQuestion/ItemAnswerQuestion';
import ButtonWrapper from '../../components/ButtonWrapper/ButtonWrapper';

const AnswersQuestions = ({id, questions, indexesAnswers, onBack=()=>{}}) => {
    const [isAllGrey, setIsAllGrey] = useState(false);
    const [alert, setAlert] = useState(null)

    const getAnswerText = (indexQuestion) => {
        if (indexesAnswers[indexQuestion] === -1) return "Вы не ответили"
        return `${questions[indexQuestion].answerOptions[indexesAnswers[indexQuestion]].text}`;
    }

    // console.log(questions)
    // console.log(indexesAnswers)

    const openAlert = (indexQuestion) => {
        const indexRightAnswer = questions[indexQuestion].answerOptions.findIndex(a => a.score === 1);
        const indexUserAnswer = indexesAnswers[indexQuestion];

        setAlert(
            <div className="testClass">
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
                                    {getAnswerText(indexQuestion)}
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
                                {getAnswerText(indexQuestion)}
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

    // console.log(questions)

    return (
        <View id={id} 
            activePanel="PANEL_ANSWERS_QUESTIONS"
            popout={alert}
            >

            <Panel id="PANEL_ANSWERS_QUESTIONS">
                <Header
                text="Вопросы"
                leftBtnFunc={onBack}>
                </Header>

                <div style={{display:"flex",justifyContent:"center"}}>
                    <div className="AnswersQuestions">
                    {
                        questions.map((q, i) => (
                            <ItemAnswerQuestion
                                id={`AnswersQuestions__alert-${i}`}
                                indexQuestion={i}
                                question={q}
                                indexRightAnswer={questions[i].answerOptions.findIndex(a => a.score === 1)}
                                indexUserAnswer={indexesAnswers[i]}
                                isGrey={isAllGrey}
                                setIsAllGrey={setIsAllGrey}
                                openAlert={openAlert}
                            />
                        ))
                    }
                    </div>
                </div>
            </Panel>
        </View>
    )
}

export default AnswersQuestions;
