import { Icon28ChevronDownOutline } from '@vkontakte/icons';
import { Panel, platform, Text, Div, Platform, PanelHeaderButton}  from '@vkontakte/vkui';
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import ButtonWrapper from '../../../components/ButtonWrapper/ButtonWrapper';
import Header from '../../../components/Header/Header';
import PanelWrapper from '../../../components/PanelWrapper/PanelWrapper';
import ImageCard from './ImageCard/ImageCard';

import "./IteamListQuestion.css";

const osName = platform();

const IteamListQuestion = ({ id, question, giveAnswer=()=>{},
    numberCurrentQuestion, countQuestions, indexAnswer,name,
    goToPrevQuestion, goToNextQuestion,isModalOpen,isClicked,
    changeModal = () => {}, setNotActiveBackgoundToAnswerButton = () => {} }) => {


    return (
        <PanelWrapper id={id} isOneColumn={true}
        
            // onHeaderClose={numberCurrentQuestion === 1 ? goToPrevQuestion:false}
            onHeaderBack={goToPrevQuestion}
            headerText={id+1 + " из " + countQuestions}
            // headerIcon={<Icon28ChevronDownOutline style={{ transform: `rotate(${isModalOpen ? '180deg' : '0'})`, transition:"0.5s" }} />}
            // headerClick={changeModal}
        >

            <div className="IteamListQuestion">

                <ImageCard
                    imageName={question.imageName}
                    linkOriginPhoto={question.sourceImageLink}
                />

                <Text weight="regular" className="IteamListQuestion__question">{question.textQuestion}</Text> 

                <div className="IteamListQuestion__answer-options">
                    {
                        question.answerOptions.map((answer, i) => (
                            <ButtonWrapper
                                onClick={() => {
                                    giveAnswer(id, i)
                                    goToNextQuestion()
                                    // setNotActiveBackgoundToAnswerButton();
                                    // goToNextQuestion(i);
                                }}
                                // isActived={indexAnswer === i}
                                text={answer.text}
                                className={`IteamListQuestion__answer ${isClicked?"IteamListQuestion__answer-active":""}` }
                            >
                            </ButtonWrapper>
                        ))
                    }
                </div>
            </div>
        </PanelWrapper>
    )
};

export default IteamListQuestion;
