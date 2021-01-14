import { Icon24Back, Icon28ChevronBack } from '@vkontakte/icons';
import { Button, IOS, Panel, PanelHeader, PanelHeaderButton, platform } from '@vkontakte/vkui';
import React from 'react';

import "./Question.css";

const osName = platform();

const Question = ({ id, question, numberCurrentQuestion, countQuestions,
    goToPrevQuestion, goToNextQuestion }) => {

    const styleBackgroundImg = {
        backgroundImage: `url('${question.questionImgBack}')`
    }

    return (
        <Panel id={id} separator={false}>
            <PanelHeader
                left={
                    <>
                        <PanelHeaderButton onClick={goToPrevQuestion}>
                            {osName === IOS ? <Icon28ChevronBack fill="white" /> : <Icon24Back fill="white" />}
                        </PanelHeaderButton>
                        <div className="Question__number-question">
                            <span>{numberCurrentQuestion}/{countQuestions}</span>
                        </div>
                    </>
                }
                separator={false}
                visor={false}
                transparent={true}
            >
            </PanelHeader>

            <div className="Question" style={styleBackgroundImg}>
                <div className="Question__content">
                    <img className="Question__image" src={question.questionImg} alt={`image_${id}`} />

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
