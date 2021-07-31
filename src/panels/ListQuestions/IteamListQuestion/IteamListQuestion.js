import { Icon24Back, Icon28ChevronBack, Icon28UsersOutline, Icon28ChevronDownOutline } from '@vkontakte/icons';
import { ModalRoot, Panel, PanelHeaderContext, PanelHeaderContent, platform, Text, Div, CardGrid, Cell, List, ModalPage } from '@vkontakte/vkui';
import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import AnswerOption from '../../../components/AnswerOption/AnswerOption';
import ButtonWrapper from '../../../components/ButtonWrapper/ButtonWrapper';
import Header from '../../../components/Header/Header';
import ListCard from '../../../components/ListCard/ListCard';
import BottomSheet from './BottomSheet/BottomSheet';

import "./IteamListQuestion.css";

const osName = platform();

const IteamListQuestion = ({ id, question,
    numberCurrentQuestion, countQuestions, indexAnswer,name,
    goToPrevQuestion, goToNextQuestion,isModalOpen,isClicked,
    changeModal = () => {}, setNotActiveBackgoundToAnswerButton = () => {} }) => {

    const [isImgInfoOpen, setisImgInfoOpen] = useState(false)

    return (
        <Panel id={id} separator={false} name={name}>
            <div className="IteamListQuestion">

                <Header
                    isClose={numberCurrentQuestion === 1 ? true : false}
                    leftBtnFunc={goToPrevQuestion}
                    text={numberCurrentQuestion + " из " + countQuestions} 
                    icon={<Icon28ChevronDownOutline style={{ transform: `rotate(${isModalOpen ? '180deg' : '0'})`, transition:"0.5s" }} />}
                    click={changeModal}
                >              
                    
                </Header>

                
                <Div className="IteamListQuestion__content">

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
                            <div className="IteamListQuestion__image-info">
                                <Div className="IteamListQuestion__image-description">
                                    Источник: <a href={question.linkOriginPhoto} className="IteamListQuestion__image-link">Клик :)</a>
                                </Div>
                            </div>
                        </CSSTransition>

                    </div>

                    <Text weight="regular" className="IteamListQuestion__question">{question.questionText}</Text> 

                    <div className="IteamListQuestion__answer-options">
                        {
                            question.answerOptions.map((answer, i) => (
                                <ButtonWrapper
                                    onClick={() => {
                                        setNotActiveBackgoundToAnswerButton();
                                        goToNextQuestion(i);
                                    }}
                                    isActived={indexAnswer === i}
                                    text={answer.text}
                                    className={`IteamListQuestion__answer ${isClicked?"IteamListQuestion__answer-active":""}` }
                                    // style={testStyle}
                                >
                                </ButtonWrapper>
                            ))
                        }
                    </div>
                </Div>
            </div>
        </Panel>
    )
};

export default IteamListQuestion;