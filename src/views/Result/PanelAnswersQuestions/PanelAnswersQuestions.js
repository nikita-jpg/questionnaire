import React from 'react';
import PanelWrapper from '../../../components/PanelWrapper/PanelWrapper';
import ItemAnswerQuestion from './ItemAnswerQuestion/ItemAnswerQuestion';
import "./PanelAnswersQuestions.css";


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
                        />
                    ))
                }
                </div>
            </div>
        </PanelWrapper>
    )
}

export default PanelAnswersQuestions;
