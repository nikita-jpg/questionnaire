import { Icon24Back, Icon28ChevronBack, Icon28UsersOutline, Icon28ChevronDownOutline } from '@vkontakte/icons';
import { ModalRoot, Panel, PanelHeaderContext, PanelHeaderContent, platform, Text, Div, CardGrid, Cell, List, ModalPage } from '@vkontakte/vkui';
import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import AnswerOption from '../../../components/AnswerOption/AnswerOption';
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
    goToPrevQuestion, goToNextQuestion,isModalOpen,
    onFinish = () => { }, changeModal = () => {} }) => {

    // const [isRotated, setRotate] = useState(false);

    // const rotateImage = () => setRotate(!isRotated);

    const [isOpenList, setOpenList] = useState(false);
    const openModal = () => setOpenList(!isOpenList);
    // caption={<div style={{width:"100%",height:"100%",backgroundColor:"black"}}></div>}

    const [isImgInfoOpen, setisImgInfoOpen] = useState(false)

    return (
        <Panel id={id} separator={false}>
            <div className="IteamListQuestion">

                <Header
                    curWidth={curWidth}
                    isClose={numberCurrentQuestion === 1 ? true : false}
                    leftBtnFunc={goToPrevQuestion}
                    text={numberCurrentQuestion + " из " + countQuestions} 
                    icon={<Icon28ChevronDownOutline style={{ transform: `rotate(${isModalOpen ? '180deg' : '0'})`, transition:"0.5s" }} />}
                    click={changeModal}
                    // leftBtnFunc={}
                >              
                {/* <div>
                    
                </div> */}
                    {/* <PanelHeaderContent
                        aside={<Icon16Dropdown style={{ transform: `rotate(${isContextOpen ? '180deg' : '0'})` }} />}
                        onClick={ () => {setOpenContext(!isContextOpen)}}
                        style={{textAlign:"center"}}
                    >
                        
                    </PanelHeaderContent> */}
                    
                </Header>

            {/* <PanelHeaderContext opened={isContextOpen}>
                <List>
                  <Cell
                    before={<Icon28UsersOutline />}
                    // after={this.state.mode === 'all' ? <Icon24Done fill="var(--accent)" /> : null}
                    // onClick={this.select}
                    data-mode="all"
                  >
                    Communities
                  </Cell>
                  <Cell
                    before={<Icon28UsersOutline />}
                    // after={this.state.mode === 'managed' ? <Icon24Done fill="var(--accent)" /> : null}
                    // onClick={this.select}
                    data-mode="managed"
                  >
                    Managed Communities
                  </Cell>
                </List>
              </PanelHeaderContext> */}
                
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
                            <div className="IteamListQuestion__image-info"/>
                        </CSSTransition>

                    </div>

                    <Text weight="regular" className="IteamListQuestion__question">{question.questionText}</Text> 

                    <div className="IteamListQuestion__answer-options">
                        {
                            question.answerOptions.map((answer, i) => (
                                <AnswerOption
                                    click={() => goToNextQuestion(i)}
                                    isActived={indexAnswer === i}
                                    text={answer.text}
                                    style={{marginTop:"10px"}}
                                >
                                </AnswerOption>
                            ))
                        }
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
                </Div>

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
