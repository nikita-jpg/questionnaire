import { Div, ModalPage, SimpleCell } from "@vkontakte/vkui";
import './ModalPageForListQuestions.css'
import React from 'react';
import ModalPageHead from "../../../ModalPageHead/ModalPageHead";
import { QUESTION_NOT_ANSWERED } from "../../../../NotUI/Data/consts";

const ModalPageForListQuestions = ({id,arrQuestions,
    changeModal=()=>{},
    goToCurrentQuestion=()=>{}, 
    finishSurvey=()=>{},
    getUserAnswer=()=>{}

}) => {

    return(
        <ModalPage
            nav={id}
            header={
                <ModalPageHead text="Вопросы" onClose={changeModal}>
                    
                </ModalPageHead>
            }>
            <Div>
                {
                    arrQuestions.map((question,i) => (
                        <SimpleCell 
                            key={i}
                            onClick={() => {goToCurrentQuestion(i); changeModal()}}
                            className={`ListQuestions__modal-el ${getUserAnswer(question.idQuestion) !== QUESTION_NOT_ANSWERED ? 'ListQuestions__modal-el_answered':''}`}
                            >
                            <div className="ListQuestions__modal-el__text">
                                {i+1}) {question.textQuestion}
                            </div>
                        </SimpleCell>
                    ))
                    
                }
                <SimpleCell
                    hasActive={false}
                    onClick={ () => {finishSurvey()}}
                    className="ListQuestions__modal-el">
                    <div className="ListQuestions__modal-el__finish-btn">
                    Завершить
                    </div>
                </SimpleCell>
            </Div>
        </ModalPage>
    )
}

export default ModalPageForListQuestions


