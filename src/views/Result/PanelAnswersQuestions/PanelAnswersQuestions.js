import { Icon24Back } from '@vkontakte/icons';
import { Alert, Div, Panel, PanelHeader, PanelHeaderButton, View } from '@vkontakte/vkui';
import React, { useState } from 'react';
import Header from '../../../components/Header/Header';
// import './ItemAnswerQuestion/ItemAnswerQuestion.css';

import "./PanelAnswersQuestions.css";
import ItemAnswerQuestion from './ItemAnswerQuestion/ItemAnswerQuestion';
import ButtonWrapper from '../../../components/ButtonWrapper/ButtonWrapper';
import PanelWrapper from '../../../components/PanelWrapper/PanelWrapper';
import { QUESTION_NOT_ANSWERED } from '../../../NotUI/Data/consts';
import { useSelector } from 'react-redux';

const isQuestionTrue = (idAnswerOptionUser, arrQuestions) =>{
    let ret = false;

    arrQuestions.map((question)=>{
        if((question.idAnswerOption === idAnswerOptionUser) && (question.score===1)){
            ret = true
        }
    })

    return ret
}

const getUserAnswerText = (idAnswerOptionUser, arrQuestions) =>{
    let text = "";

    if(idAnswerOptionUser === QUESTION_NOT_ANSWERED){
        return null
    }

    arrQuestions.map((question)=>{
        if(question.idAnswerOption === idAnswerOptionUser){
            text = question.text
        }
    })

    return text
}

const getArrOptioAnswersWithoutRight = (arrQuestions) =>{
    let arr = [];

    arrQuestions.map((question)=>{
        if(question.score !== 1){
            arr.push(question)
        }
    })

    return arr
}

const getRightAnswerOption = (arrQuestions) =>{
    let answerOption = {};

    arrQuestions.map((question)=>{
        if(question.score === 1){
            answerOption = question
        }
    })

    return answerOption
}



const PanelAnswersQuestions = ({id, questions,
    onBack=()=>{}, 
    openAlert=()=>{}
}) => {


    return (
        <PanelWrapper id={id} headerText="Вопросы" onHeaderBack={onBack} isOneColumn={true}>

            <div style={{display:"flex",justifyContent:"center"}}>
                <div className="PanelAnswersQuestions">
                {
                    questions.map((question, i) => (
                        <ItemAnswerQuestion
                            indexQuestion={i}
                            questionTitle={question.textQuestion}
                            idQuestion={question.idQuestion}
                            openAlert={()=>openAlert(question.idQuestion)}
                            // userAnswerText={getUserAnswerText(question.userAnswer, question.answerOptions)}
                            // rightAnswerText={getRightAnswerOption(question.answerOptions)}
                            // arrOptioAnswersWithoutRight={getArrOptioAnswersWithoutRight(question.answerOptions)}
                            // isWin = { (question.userAnswer !== QUESTION_NOT_ANSWERED) && (isQuestionTrue(question.userAnswer.idAnswerOption, question.answerOptions))  }
                            // setAlert={setAlert}
                        />
                    ))
                }
                </div>
            </div>
        </PanelWrapper>
    )
}

export default PanelAnswersQuestions;
