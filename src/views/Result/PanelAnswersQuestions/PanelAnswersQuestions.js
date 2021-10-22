import { Icon24Back } from '@vkontakte/icons';
import { Alert, Div, Panel, PanelHeader, PanelHeaderButton, View } from '@vkontakte/vkui';
import React, { useState } from 'react';
import Header from '../../../components/Header/Header';
import Arrow from './ItemAnswerQuestion/Arrow';
// import './ItemAnswerQuestion/ItemAnswerQuestion.css';

import "./PanelAnswersQuestions.css";
import ItemAnswerQuestion from './ItemAnswerQuestion/ItemAnswerQuestion';
import ButtonWrapper from '../../../components/ButtonWrapper/ButtonWrapper';
import PanelWrapper from '../../../components/PanelWrapper/PanelWrapper';
import { QUESTION_NOT_ANSWERED } from '../../../NotUI/Data/consts';

const isQuestionTrue = (idAnswerOptionUser, arrQuestions) =>{
    let ret = false;

    arrQuestions.map((question)=>{
        if((question.idAnswerOption === idAnswerOptionUser) && (question.score===1)){
            ret = true
        }
    })

    return ret
}

const PanelAnswersQuestions = ({id, questions, indexesAnswers, 
    onBack=()=>{}, 
    openAlert=()=>{}
}) => {

    console.log(questions)
    return (
        <PanelWrapper id={id} headerText="Вопросы" onHeaderBack={onBack} isOneColumn={true}>

            <div style={{display:"flex",justifyContent:"center"}}>
                <div className="PanelAnswersQuestions">
                {
                    questions.map((question, i) => (
                        <ItemAnswerQuestion
                            indexQuestion={i}
                            questionTitle={question.textQuestion}
                            isWin = { (question.userAnswer !== QUESTION_NOT_ANSWERED) && (isQuestionTrue(question.userAnswer.idAnswerOption, question.answerOptions))  }
                            // indexRightAnswer={questions[i].answerOptions.findIndex(a => a.score === 1)}
                            // indexUserAnswer={indexesAnswers[i]}
                            openAlert={openAlert}
                        />
                    ))
                }
                </div>
            </div>
        </PanelWrapper>
    )
}

export default PanelAnswersQuestions;
