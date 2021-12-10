import { Icon28ChevronDownOutline } from '@vkontakte/icons';
import { Text } from '@vkontakte/vkui';
import React from 'react';
import { useSelector } from 'react-redux';
import ButtonWrapper from '../../../components/ButtonWrapper/ButtonWrapper';
import PanelWrapper from '../../../components/PanelWrapper/PanelWrapper';
import { getAnswerOptionsById } from '../../../Selectors/data_selectors';
import "./IteamListQuestion.css";

const IteamListQuestion = ({ id, question,
    countQuestions,
    isModalOpen,
    goToPrevQuestion=()=>{}, 
    goToNextQuestion=()=>{},
    giveAnswer=()=>{},
    changeModal = () => {}, 
    getUserAnswer = () => {}
}) => {
    
    const answerOptions = useSelector(getAnswerOptionsById(question.idQuestion))

    return (
        <PanelWrapper 
            id={id} 
            isOneColumn={true}
            onHeaderClose={id === 0 ? goToPrevQuestion:false}
            onHeaderBack={goToPrevQuestion}
            headerText={id+1 + " из " + countQuestions}
            headerIcon={<Icon28ChevronDownOutline style={{ transform: `rotate(${isModalOpen ? '180deg' : '0'})`, transition:"0.5s" }} />}
            headerClick={changeModal}
        >

            <div className="IteamListQuestion">
                <Text weight="regular" className="IteamListQuestion__question">{question.textQuestion}</Text> 

                <div className="IteamListQuestion__answer-options">
                    {
                        answerOptions.map((answer, i) => (
                            <ButtonWrapper
                                onClick={() => {
                                    giveAnswer(question.idQuestion, answer.idAnswerOption)
                                    goToNextQuestion()
                                }}
                                text={answer.text}
                                className={`IteamListQuestion__answer ${(getUserAnswer(question.idQuestion) === answer.idAnswerOption)?"IteamListQuestion__answer-active":""}` }
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
