import { Icon24Back } from '@vkontakte/icons';
import { Alert, Panel, PanelHeader, PanelHeaderButton, View } from '@vkontakte/vkui';
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Arrow from './ItemAnswerQuestion/Arrow';
// import './ItemAnswerQuestion/ItemAnswerQuestion.css';

import "./AnswersQuestions.css";
import ItemAnswerQuestion from './ItemAnswerQuestion/ItemAnswerQuestion';

const AnswersQuestions = ({id, questions, indexesAnswers, onBack=()=>{}}) => {
    const [isAllGrey, setIsAllGrey] = useState(false);
    const [alert, setAlert] = useState(null)

    const getAnswerText = (indexQuestion) => {
        if (indexesAnswers[indexQuestion] === -1) return "Вы не ответили"
        return `${questions[indexQuestion].answerOptions.indexesAnswers[indexQuestion].text}`;
    }

    const openAlert = (indexQuestion) => {
        setAlert(
            <Alert
                onClose={() => {setAlert(null)}}
                actions={[{
                    title:"Закрыть",
                    autoclose:true,
                    mode:"cancel"
                }]}
            >
                <div className="AnswersQuestions__alert">
                    <div className="AnswersQuestions__alert__answers">

                        {
                            questions[indexQuestion].answerOptions.findIndex(a => a.score === 1) !== indexesAnswers[indexQuestion] &&
                            <div className="AnswersQuestions__alert__answer">
                                <div className="AnswersQuestions__alert__title-answer-wrap AnswersQuestions__alert__title-answer-wrap_bad">
                                    <h2
                                        className="AnswersQuestions__alert__title-answer AnswersQuestions__alert__title-answer_bad"
                                    >Ваш ответ</h2>
                                </div>

                                <p className="AnswersQuestions__alert__text-answer">
                                    {getAnswerText(indexQuestion)}
                                </p>
                            </div>
                        }
                    
                        <div className="AnswersQuestions__alert__answer">
                            <div className="AnswersQuestions__alert__title-answer-wrap AnswersQuestions__alert__title-answer-wrap_good">
                                <h2
                                    className="AnswersQuestions__alert__title-answer AnswersQuestions__alert__title-answer_good"
                                >
                                    {
                                        questions[indexQuestion].answerOptions.findIndex(a => a.score === 1) !== indexesAnswers[indexQuestion]
                                            ? "Ваш ответ верен"
                                            : "Правильный ответ"
                                    }
                                </h2>
                            </div>

                            <p className="AnswersQuestions__alert__text-answer">
                                123
                            </p>
                        </div>
                            
                        <div className="AnswersQuestions__alert__answer"> 
                            <div className="AnswersQuestions__alert__title-answer-wrap AnswersQuestions__alert__title-answer-wrap_normal">
                                <h2
                                    className="AnswersQuestions__alert__title-answer AnswersQuestions__alert__title-answer_normal"
                                >Остальные варианты</h2>
                            </div> 

                            {
                                questions[indexQuestion].answerOptions.map((answer, i) => {
                                    if (i === questions[indexQuestion].answerOptions.findIndex(a => a.score === 1) || i === indexesAnswers[indexQuestion]) {
                                        return null;
                                    }

                                    return (
                                        <p key={i} className="AnswersQuestions__alert__text-answer">
                                            {answer.text}
                                        </p>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </Alert>
        )
    }

    console.log(questions)

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
            </Panel>
        </View>
    )
}

export default AnswersQuestions;
