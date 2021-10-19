import { Div, ModalPage, SimpleCell } from "@vkontakte/vkui";
import './ModalPageForListQuestions.css'
import React from 'react';
import ModalPageHead from "../../../components/ModalPageHead/ModalPageHead";

const ModalPageForListQuestions = ({id,arrQuestions,changeModal=()=>{},goToCurrentQuestion=()=>{}, finishSurvey=()=>{}}) => {

    console.log(id)
    return(
        <ModalPage 
            id={id}
            settlingHeight={100}
            header={
                <ModalPageHead text="Вопросы" onClose={changeModal}></ModalPageHead>
            }>
            <Div>
                {
                    arrQuestions.map((question,i) => (
                        <SimpleCell 
                            key={i}
                            onClick={() => {goToCurrentQuestion(i); changeModal()}}
                            // className={`ListQuestions__modal-el ${stateAnswers[i] !== -1 ? 'ListQuestions__modal-el_answered':''}`}
                            className={`ListQuestions__modal-el`}
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


