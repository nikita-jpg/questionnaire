import { Icon24Back, Icon28ChevronBack } from '@vkontakte/icons';
import { ModalCard, Panel, PanelHeader, PanelHeaderButton, platform, Card, ContentCard, CardGrid } from '@vkontakte/vkui';
import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Header from '../../../components/Header/Header';
import ListCard from '../../../components/ListCard/ListCard';
import BottomSheet from './BottomSheet/BottomSheet';

import "./IteamListQuestion.css";

const osName = platform();

const IteamListQuestion = ({ id, curWidth, question,
    numberCurrentQuestion, countQuestions,
    stateAnswers, indexAnswer,
    lastIndexQuestion, currentIndexQuestion,
    goToLastQuestion, goToQuestionWithoutAnswer,
    goToPrevQuestion, goToNextQuestion,
    onFinish = () => { } }) => {

    const [isRotated, setRotate] = useState(false);

    const rotateImage = () => setRotate(!isRotated);

    const [isOpenList, setOpenList] = useState(false);
    const openModal = () => setOpenList(!isOpenList);
    // caption={<div style={{width:"100%",height:"100%",backgroundColor:"black"}}></div>}

    const [isImgInfoOpen, setisImgInfoOpen] = useState(false)

    console.log(question)
    return (
        <Panel id={id} separator={false}>
            <div className="IteamListQuestion">

                <Header
                    curWidth={curWidth}
                    title={numberCurrentQuestion + " из " + countQuestions}
                    isClose={true}
                    // leftBtnFunc={}
                />
                
                <div className="IteamListQuestion__content">

                    <div className="IteamListQuestion__image-container" onClick={() => {setisImgInfoOpen(!isImgInfoOpen)}}>

                        <img
                            className="IteamListQuestion__image"
                            src={question.imageSrc}
                        />
                        
                        <CSSTransition 
                            in={isImgInfoOpen} 
                            timeout={200} 
                            classNames="IteamListQuestion__image-info"
                            onEnter={() => {setisImgInfoOpen(true)}}
                            onExited={() => {setisImgInfoOpen(false)}}>
                            <div className="IteamListQuestion__image-info"/>
                        </CSSTransition>

                    </div>
                        {/* <div
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
                        </div> */}
                    

                    {/* <p className="IteamListQuestion__question-text">{question.questionText}</p>

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
                    </div> */}
                </div>

                {/* {
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
                } */}
            </div>
        </Panel>
    )
};

export default IteamListQuestion;
