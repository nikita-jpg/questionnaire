import React, { createRef, useEffect, useState } from 'react';
import BlackBackground from '../../../components/BlackBackground/BlackBackground';

import "./ItemAnswerQuestion.css";

const ItemAnswerQuestion = ({ id, question, indexRightAnswer, indexUserAnswer }) => {
    const [isFirstRender, setIsFirstRender] = useState(true);

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
        return `${question.answerOptions[index].text}`;
    }


    const [heightWrapContent, setHeightWrapContent] = useState("auto");

    const refWrapContent = createRef();

    useEffect(() => {
        setIsFirstRender(false);
        setHeightWrapContent(refWrapContent.current.offsetHeight)
    }, []);

    const PADDING_ITEM_ANSWER_QUESTION = 16;

    const getStyleWrapAnswers = (isFirstRender, isOpen) => {
        if (isFirstRender) {
            return {
                position: "absolute",
                visibility: "hidden",
                width: "100%",
                padding: `0 ${PADDING_ITEM_ANSWER_QUESTION}px`,
                boxSizing: "border-box"
            }
        }

        return {
            height: isOpen ? heightWrapContent : 0
        }
    }

    const styleWrapAnswers = getStyleWrapAnswers(isFirstRender, isOpen);

    const styleItemAnswerQuestion = {
        padding: `0 ${PADDING_ITEM_ANSWER_QUESTION}px`,
        zIndex: isOpen ?6 :0
    }

    // логика закрытия по щелчку вне ItemAnswerQuestion
    const handlerClickWithouItemAnswerQuestion = (e) => {
        if (!e.target.closest(`.${id}`)) {
            setIsOpen(false);
        }
    }

    useEffect(() => {
        if (isOpen) {
            window.addEventListener("click", handlerClickWithouItemAnswerQuestion);
        } else {
            window.removeEventListener("click", handlerClickWithouItemAnswerQuestion);
        }

        return () => {
            window.removeEventListener("click", handlerClickWithouItemAnswerQuestion);
        }
    }, [isOpen]);

    return (
        <>
            {isOpen && <BlackBackground />}

            <div style={styleItemAnswerQuestion} className="ItemAnswerQuestion" id={id}>
                <div
                    onClick={toggleIsOpen}
                    className="ItemAnswerQuestion__question-wrap"
                >
                    <p className="ItemAnswerQuestion__question-text">
                        {isOpen ? question.questionText : question.questionText.substring(0, 20) + "..."}
                    </p>

                    <span
                        className={`ItemAnswerQuestion__arrow ${getClassNameArrow(isOpen, indexRightAnswer, indexUserAnswer)}`}>
                    </span>
                </div>

                <div ref={refWrapContent} style={styleWrapAnswers} className="ItemAnswerQuestion__wrap-answers">
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
                                        {answer.text}
                                    </p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemAnswerQuestion;
