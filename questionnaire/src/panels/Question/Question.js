import { Icon24Back, Icon28ChevronBack } from '@vkontakte/icons';
import { Button, Div, IOS, Panel, PanelHeader, PanelHeaderButton, platform } from '@vkontakte/vkui';
import React from 'react';

import "./Question.css";

const osName = platform();

const Question = ({ id, question, numberCurrentQuestion, countQuestions,
    goToPrevQuestion, goToNextQuestion, backgroundImage }) => {

    const styleBackgroundImg = {
        backgroundImage: `url('${backgroundImage}')`
    }

    return (
        <Panel id={id} separator={false}>
            <PanelHeader
                left={
                    <>
                        <PanelHeaderButton onClick={goToPrevQuestion}>
                            {osName === IOS ? <Icon28ChevronBack fill="white" /> : <Icon24Back fill="white" />}
                        </PanelHeaderButton>
                        <div className="Question__number-question">{numberCurrentQuestion}/{countQuestions}</div>
                    </>
                }
                separator={false}
                visor={false}
                transparent={true}
            >
            </PanelHeader>

            <Div className="Question" style={styleBackgroundImg}>
                <Div className="Question__content">
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
                </Div>
            </Div>
        </Panel>
    )
};

export default Question;
