import { Alert } from "@vkontakte/vkui";
import React from "react";
import { useSelector } from "react-redux";
import { getAnswerOptionById, getCurAnswerOptions, getCurQuestion, getCurUserAnswer, getRighAnswerOption, isCurQuestionTrue } from "../../Selectors/data_selectors";
import "./AlertQuestionResult.css";

const AlertQuestionResult = ({

    onClose=()=>{}

    }) => {
    
    const answerOptions = useSelector(getCurAnswerOptions)
    const curQuestion = useSelector(getCurQuestion)
    const userAnswer = useSelector(getCurUserAnswer)
    const rightAnswer = useSelector(getRighAnswerOption(curQuestion.idQuestion))

    const isWin = ((userAnswer !== undefined) && (userAnswer.idAnswerOption === rightAnswer.idAnswerOption)) ? true : false

    let userAnswerText = "Вы не ответили";
    answerOptions.map((answerOption)=>{
        if(answerOptions.idAnswerOption === userAnswer.idAnswerOption){
            userAnswerText = answerOption.text
        }
    })




    return (
        <div className="AnswersQuestions__alert_big">
            <Alert
                actionsLayout={"horizontal"}
                onClose={onClose}
                actions={[{
                    title: "Закрыть",
                    autoclose: true,
                    mode: "cancel"
                }]}
            >
                <div className="AnswersQuestions__alert">

                    <h3 className={"AlertQuestionResult__text-question"}>{curQuestion.textQuestion}</h3>

                        {
                            isWin &&
                            <div>
                                <div className="AnswersQuestions__alert__title-answer-wrap AnswersQuestions__alert__title-answer-wrap_bad">
                                    <div
                                        className="AnswersQuestions__alert__title-answer AnswersQuestions__alert__title-answer_bad"
                                    >Ваш ответ
                                    </div>
                                </div>

                                <div
                                    className="AnswersQuestions__alert__text-answer"
                                >
                                    {userAnswerText}
                                </div>
                            </div>
                        }

                        <div>
                            <div className="AnswersQuestions__alert__title-answer-wrap AnswersQuestions__alert__title-answer-wrap_good">
                                <div
                                    className="AnswersQuestions__alert__title-answer AnswersQuestions__alert__title-answer_good"
                                >
                                    {
                                        isWin
                                            ? "Ваш ответ верен"
                                            : "Правильный ответ"
                                    }
                                </div>
                            </div>

                            <div
                                className="AnswersQuestions__alert__text-answer"
                            >
                                {rightAnswer.text}
                            </div>
                        </div>

                        <div>
                            <div className="AnswersQuestions__alert__title-answer-wrap AnswersQuestions__alert__title-answer-wrap_normal">
                                <div
                                    className="AnswersQuestions__alert__title-answer AnswersQuestions__alert__title-answer_normal"
                                >Остальные варианты</div>
                            </div>

                            {/* {
                                arrOthersQuestions.map((answer, i) => {
                                    return (
                                        <div
                                            className="AnswersQuestions__alert__text-answer"
                                            key={answer.text}
                                        >
                                            {answer.text}
                                        </div>
                                    )
                                })
                            } */}
                        </div>

                </div>
            </Alert>
        </div>
    );
}

export default AlertQuestionResult;
