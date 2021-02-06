import React, { useState } from 'react';

import "./ItemAnswerQuestion.css";

const ItemAnswerQuestion = ({ question, indexRightAnswer, indexUserAnswer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => setIsOpen(!isOpen);

    const getClassNameArrow = (isOpen, indexRightAnswer, indexUserAnswer) => {
        if (isOpen) {
            return "ItemAnswerQuestion__arrow_open";
        }

        if (indexUserAnswer === indexRightAnswer) {
            return "ItemAnswerQuestion__arrow_good";
        }

        return "ItemAnswerQuestion__arrow_bad";
    }

    const getAnswerText = (index) => {
        return `${question.answerOptions[index].text.substring(0, 20)}...`;
    }

    return (
        <div className="ItemAnswerQuestion">
            <div 
                onClick={toggleIsOpen}
                className="ItemAnswerQuestion__question-wrap"
            >
                <p className="ItemAnswerQuestion__question-text">
                    {question.questionText.substring(0, 20) + "..."}
                </p>

                <span
                    className={`ItemAnswerQuestion__arrow ${getClassNameArrow(isOpen, indexRightAnswer, indexUserAnswer)}`}>
                </span>
            </div>

            <div className={`ItemAnswerQuestion__wrap-answers ${!isOpen && "ItemAnswerQuestion__wrap-answers_hide"}`}>
                {
                    indexUserAnswer !== indexRightAnswer &&
                    <div className="ItemAnswerQuestion__answer">
                        <div className="ItemAnswerQuestion__title-answer-wrap ItemAnswerQuestion__title-answer-wrap_bad">
                            <h2
                                className="ItemAnswerQuestion__title-answer ItemAnswerQuestion__title-answer_bad"
                            >Ваш ответ</h2>
                        </div>

                        <p className="ItemAnswerQuestion__text-answer">
                            {getAnswerText(indexUserAnswer)}
                        </p>
                    </div>
                }

                <div className="ItemAnswerQuestion__answer">
                    <div className="ItemAnswerQuestion__title-answer-wrap ItemAnswerQuestion__title-answer-wrap_good">
                        <h2
                            className="ItemAnswerQuestion__title-answer ItemAnswerQuestion__title-answer_good"
                        >
                            {
                                indexUserAnswer === indexRightAnswer
                                    ? "Ваш ответ верен"
                                    : "Правильный ответ"
                            }
                        </h2>
                    </div>

                    <p className="ItemAnswerQuestion__text-answer">
                        {getAnswerText(indexRightAnswer)}
                    </p>
                </div>

                <div className="ItemAnswerQuestion__answer">
                    <div className="ItemAnswerQuestion__title-answer-wrap ItemAnswerQuestion__title-answer-wrap_normal">
                        <h2
                            className="ItemAnswerQuestion__title-answer ItemAnswerQuestion__title-answer_normal"
                        >Остальные варианты</h2>
                    </div>

                    {
                        question.answerOptions.map((answer, i) => {
                            if (i === indexRightAnswer || i === indexUserAnswer) {
                                return null;
                            }

                            return (
                                <p key={i} className="ItemAnswerQuestion__text-answer">
                                    {`${answer.text.substring(0, 20)}...`}
                                </p>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemAnswerQuestion;
