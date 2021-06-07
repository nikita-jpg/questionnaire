import { Icon24Back, Icon28ChevronBack } from '@vkontakte/icons';
import { ModalCard, Panel, PanelHeader, PanelHeaderButton, platform } from '@vkontakte/vkui';
import React, { useEffect, useState } from 'react';
import BottomSheet from './BottomSheet/BottomSheet';

import "./IteamListQuestion.css";

const osName = platform();

const IteamListQuestion = ({ id, question,
    numberCurrentQuestion, countQuestions,
    stateAnswers, indexAnswer,
    lastIndexQuestion, currentIndexQuestion,
    goToLastQuestion, goToQuestionWithoutAnswer,
    goToPrevQuestion, goToNextQuestion,
    onFinish = () => { } }) => {

    const [isRotated, setRotate] = useState(false);

    const rotateImage = () => setRotate(!isRotated);

    const [isOpenList, setOpenList] = useState(false);
    const openModal = () => setOpenList(!isOpenList)

    return (
        <Panel id={id} separator={false}>
            <PanelHeader
                left={
                    <>
                        <PanelHeaderButton onClick={goToPrevQuestion}>
                            <Icon24Back fill="white" />
                        </PanelHeaderButton>
                        <span className="IteamListQuestion__number-question">{numberCurrentQuestion}/{countQuestions}</span>
                    </>
                }
                className="IteamListQuestion__PanelHeader"
                separator={false}
                visor={false}
                transparent={false}
            >
            </PanelHeader>

            {/* <ModalCard>

            </ModalCard> */}

            <div className="IteamListQuestion">
            {/* <button className="testButton" onClick={openModal}></button> */}
                <div className="IteamListQuestion__content">
                    {
                        question.overSideImg !== undefined && question.overSideImg !== null
                            ?
                            <div
                                className={`IteamListQuestion__image-wrap ${isRotated && "IteamListQuestion__image-wrap_rotated"}`}
                            >
                                <img
                                    className="IteamListQuestion__image IteamListQuestion__image_hidden"
                                    src={question.questionImg}
                                    alt={`image_hidden_${id}`}
                                />

                                <div className="IteamListQuestion__image-side-wrap IteamListQuestion__image-side-wrap_front">
                                    <img className="IteamListQuestion__image" src={question.questionImg} alt={`image_front_${id}`} />

                                    <button
                                        onClick={rotateImage}
                                        className="IteamListQuestion__rotate-button IteamListQuestion__rotate-button_front"
                                    ></button>
                                </div>

                                <div className={`IteamListQuestion__image-side-wrap 
                                    IteamListQuestion__image-side-wrap_back 
                                    ${!isRotated ? "IteamListQuestion__image-side-wrap_disable" : ""}`}
                                >
                                    <img className="IteamListQuestion__image" src={question.overSideImg} alt={`image_back_${id}`} />

                                    <button
                                        onClick={rotateImage}
                                        className="IteamListQuestion__rotate-button IteamListQuestion__rotate-button_back"
                                    ></button>
                                </div>
                            </div>

                            : <div className="IteamListQuestion__image-wrap">
                                <img
                                    className="IteamListQuestion__image"
                                    src={question.questionImg}
                                    alt={`image_hidden_${id}`}
                                />
                            </div>
                    }

                    <p className="IteamListQuestion__question-text">{question.questionText}</p>

                    <div className="IteamListQuestion__answer-options">
                        {
                            question.answerOptions.map((answer, i) => (
                                <button
                                    key={i}
                                    className={
                                        `IteamListQuestion__answer 
                                        ${indexAnswer === i && "IteamListQuestion__answer_marked"}`
                                    }
                                    onClick={() => goToNextQuestion(i)}
                                >
                                    {answer.text}
                                </button>
                            ))
                        }
                    </div>
                </div>

                {
                    lastIndexQuestion !== -1 &&
                    <div
                        onClick={goToLastQuestion}
                        className={
                            `IteamListQuestion__go-to-last-question 
                                ${lastIndexQuestion > currentIndexQuestion
                                ? "IteamListQuestion__go-to-last-question_right"
                                : "IteamListQuestion__go-to-last-question_left"
                            }`
                        }
                    >
                        к вопросу {lastIndexQuestion + 1}
                    </div>
                }
{/* 
                <BottomSheet
                    stateAnswers={stateAnswers}
                    onFinish={onFinish}
                    goToQuestionWithoutAnswer={goToQuestionWithoutAnswer}
                /> */}
            </div>
        </Panel>
    )
};

export default IteamListQuestion;
