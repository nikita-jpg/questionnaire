import { Alert } from "@vkontakte/vkui";
import React from "react";
import "./AlertQuestionResult.css";

const AlertQuestionResult = ({
    isWin,
    userAnswer,
    questionTitle,
    rightAnswerText,
    arrOthersQuestions,

    onClose=()=>{}
}) => {
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

                    <h3 className={"AlertQuestionResult__text-question"}>{questionTitle}</h3>

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
                                    {userAnswer}
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
                                {rightAnswerText}
                            </div>
                        </div>

                        <div>
                            <div className="AnswersQuestions__alert__title-answer-wrap AnswersQuestions__alert__title-answer-wrap_normal">
                                <div
                                    className="AnswersQuestions__alert__title-answer AnswersQuestions__alert__title-answer_normal"
                                >Остальные варианты</div>
                            </div>

                            {
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
                            }
                        </div>

                </div>
            </Alert>
        </div>
    );
}

export default AlertQuestionResult;
