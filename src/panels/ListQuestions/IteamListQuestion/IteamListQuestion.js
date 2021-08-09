import { Icon28ChevronDownOutline } from '@vkontakte/icons';
import { Panel, platform, Text, Div, Platform, PanelHeaderButton}  from '@vkontakte/vkui';
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import ButtonWrapper from '../../../components/ButtonWrapper/ButtonWrapper';
import Header from '../../../components/Header/Header';
import PanelWrapper from '../../../components/PanelWrapper/PanelWrapper';

import "./IteamListQuestion.css";

const osName = platform();

const IteamListQuestion = ({ id, question,
    numberCurrentQuestion, countQuestions, indexAnswer,name,
    goToPrevQuestion, goToNextQuestion,isModalOpen,isClicked,
    changeModal = () => {}, setNotActiveBackgoundToAnswerButton = () => {} }) => {

    const [isImgInfoOpen, setisImgInfoOpen] = useState(false)

    const onLinkClick = (e) => e.stopPropagation();

    return (
        <PanelWrapper id={id} name={name}
        
            onHeaderClose={numberCurrentQuestion === 1 ? goToPrevQuestion:false}
            onHeaderBack={goToPrevQuestion}
            headerText={numberCurrentQuestion + " из " + countQuestions}
            headerIcon={<Icon28ChevronDownOutline style={{ transform: `rotate(${isModalOpen ? '180deg' : '0'})`, transition:"0.5s" }} />}
            headerClick={changeModal}
        >
            <div className="IteamListQuestion">

                {/* <Header
                    isClose={numberCurrentQuestion === 1 ? true : false}
                    leftBtnFunc={goToPrevQuestion}
                    text={numberCurrentQuestion + " из " + countQuestions} 
                    icon={<Icon28ChevronDownOutline style={{ transform: `rotate(${isModalOpen ? '180deg' : '0'})`, transition:"0.5s" }} />}
                    click={changeModal}
                >              
                    
                </Header> */}

                
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
                                    Источник: <br/>
                                    {
                                        isImgInfoOpen
                                        ?<a 
                                            href={question.linkOriginPhoto} 
                                            className="IteamListQuestion__image-link"
                                            target="_blank"
                                            onClick={onLinkClick}
                                        >
                                            Клик
                                        </a>
                                        :<span className="IteamListQuestion__image-link">
                                            Клик 
                                        </span>
                                    }
                                    
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
                                >
                                </ButtonWrapper>
                            ))
                        }
                    </div>
                </Div>
            </div>
        </PanelWrapper>
    )
};

export default IteamListQuestion;
