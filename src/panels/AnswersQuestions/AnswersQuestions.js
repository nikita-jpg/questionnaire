import { Icon24Back } from '@vkontakte/icons';
import { Alert, Div, Panel, PanelHeader, PanelHeaderButton, View } from '@vkontakte/vkui';
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Arrow from './ItemAnswerQuestion/Arrow';
// import './ItemAnswerQuestion/ItemAnswerQuestion.css';

import "./AnswersQuestions.css";
import ItemAnswerQuestion from './ItemAnswerQuestion/ItemAnswerQuestion';
import ButtonWrapper from '../../components/ButtonWrapper/ButtonWrapper';
import PanelWrapper from '../../components/PanelWrapper/PanelWrapper';

const AnswersQuestions = ({id, questions, indexesAnswers, onBack=()=>{}, openAlert=()=>{}}) => {

    return (
        <PanelWrapper id={id} headerText="Вопросы" onHeaderBack={onBack} isOneColumn={true}>

            <div style={{display:"flex",justifyContent:"center"}}>
                <div className="AnswersQuestions">
                {
                    questions.map((q, i) => (
                        <ItemAnswerQuestion
                            indexQuestion={i}
                            question={q}
                            indexRightAnswer={questions[i].answerOptions.findIndex(a => a.score === 1)}
                            indexUserAnswer={indexesAnswers[i]}
                            openAlert={openAlert}
                        />
                    ))
                }
                </div>
            </div>
        </PanelWrapper>
    )
}

export default AnswersQuestions;
