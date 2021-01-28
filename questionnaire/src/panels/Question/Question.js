import { Icon24Back, Icon28ChevronBack } from '@vkontakte/icons';
import { Button, IOS, Panel, PanelHeader, PanelHeaderButton, platform } from '@vkontakte/vkui';
import React, { useState } from 'react';

import "./Question.css";

const osName = platform();

const Question = ({ id, question, numberCurrentQuestion, countQuestions,
    goToPrevQuestion, goToNextQuestion }) => {

    const styleBackgroundImg = {
        backgroundImage: `url('${question.questionImgBack}')`
    }

    const [isRotated, setRotate] = useState(false);

    const rotateImage = () => setRotate(!isRotated);

    return (
        <Panel id={id} separator={false}>
            <PanelHeader
                left={
                    <>
                        <PanelHeaderButton onClick={goToPrevQuestion}>
                            {osName === IOS ? <Icon28ChevronBack fill="white" /> : <Icon24Back fill="white" />}
                        </PanelHeaderButton>
                        <span className="Question__number-question">{numberCurrentQuestion}/{countQuestions}</span>
                    </>
                }
                separator={false}
                visor={false}
                transparent={true}
            >
            </PanelHeader>

            <div className="Question" style={styleBackgroundImg}>
                <div className="Question__content">
                    {
                        question.overSideImg !== undefined
                            ?
                            <div
                                className={`Question__image-wrap ${isRotated ?"Question__image-wrap_rotated" :""}`}
                            >
                                <img className="Question__image Question__image_hidden" src={question.questionImg} alt={`image_hidden_${id}`} />
        
                                <div className="Question__image-side-wrap Question__image-side-wrap_front">
                                    <img className="Question__image" src={question.questionImg} alt={`image_front_${id}`} />

                                    <button 
                                        onClick={rotateImage}
                                        className="Question__rotate-button Question__rotate-button_front"
                                    ></button>
                                </div>

                                <div className={`Question__image-side-wrap 
                                    Question__image-side-wrap_back 
                                    ${!isRotated ?"Question__image-side-wrap_disable" :""}`}
                                >
                                    <img className="Question__image" src={question.overSideImg} alt={`image_back_${id}`} />
                                
                                    <button
                                        onClick={rotateImage}
                                        className="Question__rotate-button Question__rotate-button_back"
                                    ></button>
                                </div>
                            </div>

                            :<div className="Question__image-wrap">
                                <img className="Question__image" src={question.questionImg} alt={`image_hidden_${id}`} />
                            </div>
                    }

                    <p className="Question__question-text">{question.questionText}</p>

                    <div className="Question__answer-options">
                        {
                            question.answerOptions.map((answer, i) => (
                                <Button
                                    key={i}
                                    mode="overlay_secondary"
                                    className="Question__answer"
                                    onClick={() => goToNextQuestion(i)}
                                >
                                    {answer.text}
                                </Button>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Panel>
    )
};

export default Question;
