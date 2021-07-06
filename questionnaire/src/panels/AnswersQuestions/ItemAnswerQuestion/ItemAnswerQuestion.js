import { Div, FixedLayout } from '@vkontakte/vkui';
import React, { createRef, useEffect, useState } from 'react';
import animate from '../../../anime/animate';
import easeOut from '../../../anime/easeOut';
import BlackBackground from '../../../components/BlackBackground/BlackBackground';
import ButtonWrapper from '../../../components/ButtonWrapper/ButtonWrapper';
import Arrow, { colorsArrow, directionArrow } from './Arrow';

import "./ItemAnswerQuestion.css";

const ItemAnswerQuestion = ({ id, indexQuestion, question, indexRightAnswer, indexUserAnswer, isGrey, setIsAllGrey, openAlert = () => {} }) => {
    const [isFirstRender, setIsFirstRender] = useState(true);

    const [isOpen, setIsOpen] = useState(false);
    const [typeColor, setTypeColor] = useState(indexRightAnswer === indexUserAnswer ?colorsArrow.GREEN :colorsArrow.RED);

    const [isDisabledClick, setIsDisabledClick] = useState(false);

    const [isOpenUp, setIsOpenUp] = useState(false);


    // работа с текстом вопроса
    const MAX_LENGTH_QUESTION_TEXT = 15;

    const cutQuestionText = (text, length=MAX_LENGTH_QUESTION_TEXT) => text.substring(0, length) + "...";

    const [questionText, setQuestionText] = useState(question.questionText.substring(0, MAX_LENGTH_QUESTION_TEXT) + "...");

    useEffect(() => {
        if (isFirstRender) {
            return;
        }

        setIsDisabledClick(true);

        if (isOpen) {
            animate({
                timing: easeOut,
                duration: 1000,
                draw(progress) {
                    if (progress < 1) {
                        const length = MAX_LENGTH_QUESTION_TEXT + 
                            Math.floor((question.questionText.length - MAX_LENGTH_QUESTION_TEXT) * progress);
                        setQuestionText(question.questionText.substring(0, length));
                    } else {
                        setQuestionText(question.questionText);
                        setIsDisabledClick(false);
                    }
                }
            });
        } else {
            animate({
                timing: easeOut,
                duration: 1000,
                draw(progress) {
                    if (progress < 1) {
                        const length = MAX_LENGTH_QUESTION_TEXT + 
                            Math.floor((question.questionText.length - MAX_LENGTH_QUESTION_TEXT) * (1 - progress));
                        setQuestionText(question.questionText.substring(0, length));
                    } else {
                        setQuestionText(question.questionText.substring(0, MAX_LENGTH_QUESTION_TEXT) + "...");
                        setIsDisabledClick(false);
                    }
                }
            });
        }
    }, [isOpen]);

    const onClick = (e) => {
        // console.log(heightWrapContent)
        // setIsOpenUp(!isOpenUp)
        setIsOpen(!isOpen);
        setIsAllGrey(!isGrey);
    }

    const getAnswerText = (index) => {
        if (index === -1) return "Вы не ответили"
        return `${question.answerOptions[index].text}`;
    }


    const [heightWrapContent, setHeightWrapContent] = useState("auto");

    const refWrapContent = createRef();

    useEffect(() => {
        // setIsFirstRender(false);
        // setHeightWrapContent(refWrapContent.current.offsetHeight)
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

    // const styleWrapAnswers = getStyleWrapAnswers(isFirstRender, isOpen);

    const styleItemAnswerQuestion = {
        // maxHeight: isOpenUp ? 400 : 50,
        padding: `0 ${PADDING_ITEM_ANSWER_QUESTION}px`,
        zIndex: isOpen ? 10 : 0
    }

    // логика закрытия по щелчку вне ItemAnswerQuestion
    const handlerClickWithouItemAnswerQuestion = (e) => {
        if (!e.target.closest(`.${id}`)) {
            setIsOpen(false);
        }
    }

    // useEffect(() => {
    //     if (isOpen) {
    //         window.addEventListener("click", handlerClickWithouItemAnswerQuestion);
    //     } else {
    //         window.removeEventListener("click", handlerClickWithouItemAnswerQuestion);
    //     }

    //     return () => {
    //         window.removeEventListener("click", handlerClickWithouItemAnswerQuestion);
    //     }
    // }, [isOpen]);

    // console.log(questionText)
    return (
        <>
            {/* <div style={{backgroundColor:"black",width:"100px",height:"100px"}} className="ItemAnswerQuestion" id={id} 
            // onClick={!isDisabledClick && onClick}
            onClick={ () => {openAlert(indexQuestion)}}
            > */}
                <Div>
                    <ButtonWrapper
                        onClick={ () => {openAlert(indexQuestion)}}
                        text={question.questionText}
                        classNameText="ItemAnswerQuestion__button-text"
                        hasActive={false}
                    >
                    </ButtonWrapper>
                </Div>
                {/* <div
                    className="ItemAnswerQuestion__question-wrap"
                >
                    <p className="ItemAnswerQuestion__question-text">
                        {questionText}
                    </p>

                    <span className="ItemAnswerQuestion__arrow">
                        <Arrow
                            direction={isOpen ?directionArrow.UP :directionArrow.DOWN}
                            typeColor={isGrey ?colorsArrow.GREY :typeColor}
                        />
                    </span>
                </div> */}

                {/* <div ref={refWrapContent} style={styleWrapAnswers} className="ItemAnswerQuestion__wrap-answers">
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
                        </div> */}
{/* 
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

                    <div className="ItemAnswerQuestion__answer"> */}
                        {/* <div className="ItemAnswerQuestion__title-answer-wrap ItemAnswerQuestion__title-answer-wrap_normal">
                            <h2
                                className="ItemAnswerQuestion__title-answer ItemAnswerQuestion__title-answer_normal"
                            >Остальные варианты</h2>
                        </div> */}

                        {/* {
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
                        } */}
                    {/* </div> */}
        </>
    )
}

export default ItemAnswerQuestion;
