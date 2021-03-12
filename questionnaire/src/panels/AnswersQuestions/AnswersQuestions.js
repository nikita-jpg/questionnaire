import { Icon24Back } from '@vkontakte/icons';
import { Panel, PanelHeader, PanelHeaderButton, View } from '@vkontakte/vkui';
import React, { useState } from 'react';

import "./AnswersQuestions.css";
import ItemAnswerQuestion from './ItemAnswerQuestion/ItemAnswerQuestion';

const AnswersQuestions = ({id, questions, indexesAnswers, onBack=()=>{}}) => {
    const [isAllGrey, setIsAllGrey] = useState(false);

    return (
        <View id={id} activePanel="PANEL_ANSWERS_QUESTIONS">
            <Panel id="PANEL_ANSWERS_QUESTIONS">
                <PanelHeader
                    left={
                        <>
                            <PanelHeaderButton onClick={onBack}>
                                <Icon24Back fill="white" />
                            </PanelHeaderButton>
                            <h1 className="AnswersQuestions__title">Вопросы</h1>
                        </>
                    }
                    className="AnswersQuestions__PanelHeader"
                    separator={false}
                    transparent={false}
                    visor={false}
                ></PanelHeader>

                <div className="AnswersQuestions">
                    {
                        questions.map((q, i) => (
                            <ItemAnswerQuestion
                                id={`ItemAnswerQuestion-${i}`}
                                key={i}
                                question={q}
                                indexRightAnswer={questions[i].answerOptions.findIndex(a => a.score === 1)}
                                indexUserAnswer={indexesAnswers[i]}
                                isGrey={isAllGrey}
                                setIsAllGrey={setIsAllGrey}
                            />
                        ))
                    }
                </div>
            </Panel>
        </View>
    )
}

export default AnswersQuestions;
