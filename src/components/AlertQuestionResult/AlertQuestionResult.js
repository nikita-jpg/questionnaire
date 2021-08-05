import { Alert } from "@vkontakte/vkui";
import React from "react";

const AlertQuestionResult = ({
    onClose, indexUserAnswer, indexRightAnswer, 
    getAnswerText, indexQuestion, answerOptions,
    questionText
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
                    <h3>{questionText}</h3>

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
                                answerOptions.map((answer, i) => {
                                    if (i === indexRightAnswer || i === indexUserAnswer) {
                                        return null;
                                    }

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
                </div>
            </Alert>
        </div>
    );
}

export default AlertQuestionResult;
