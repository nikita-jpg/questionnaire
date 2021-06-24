import { View } from '@vkontakte/vkui';
import React, { useState } from 'react';
import IteamListQuestion from './IteamListQuestion/IteamListQuestion';

const ListQuestions = ({id, curWidth, arrQuestions, onBack=()=>{}, onFinish=totalScore=>{}}) => {
    const createIdActivePanel = index => `IteamListQuestion-${index}`;

    // логика хранения ответов
    const getInitStateAnswers = () => [
        ...arrQuestions.map(question => ({
            questionText: question.questionText.substring(0, 15),
            indexAnswer: -1
        }))
    ];

    const [stateAnswers, setStateAnswers] = useState(getInitStateAnswers());

    const giveAnswer = (indexQuestion, indexAnswer) => {
        stateAnswers[indexQuestion].indexAnswer = indexAnswer;
        setStateAnswers([...stateAnswers]);
    }

    const calculateScore = () => { 
        return stateAnswers.reduce((sum, dataAnswer, indexQuestion) => {
            if (dataAnswer.indexAnswer === -1) {
                return sum;
            }

            return sum + arrQuestions[indexQuestion].answerOptions[dataAnswer.indexAnswer].score;
        }, 0);
    }

    const resetStateAnswers = () => setStateAnswers(getInitStateAnswers());

    // логика переключения вопросов
    const [indexQuestion, setIndexQuestion] = useState(0);

    const resetData = () => {
        resetStateAnswers();
        setIndexQuestion(0);
    }

    const createGoToNextQuestion = (indexQuestion, maxLength) => (indexAnswer) => {
        giveAnswer(indexQuestion, indexAnswer);

        if (indexQuestion < maxLength - 1) {
            setIndexQuestion(indexQuestion + 1);
        } else {
            onFinish(calculateScore(), stateAnswers.map(answer => answer.indexAnswer));
            resetData();
        }
    }

    const createGoToPrevQuestion = (indexQuestion) => () => {
        if (indexQuestion > 0) {
            setIndexQuestion(indexQuestion - 1);
        } else {
            onBack();
            resetData();
        }
    }

    // логика перехода к любому вопросу
    const [lastIndexQuestion, setLastIndexQuestion] = useState(-1);

    const createGoToQuestionWithoutAnswer = (fromIndexQuestion) => (toIndexQuestion) => {
        if (fromIndexQuestion != toIndexQuestion)
        {
            setLastIndexQuestion(fromIndexQuestion);
            setIndexQuestion(toIndexQuestion);
        }
    }

    const goToLastQuestion = () => {
        setIndexQuestion(lastIndexQuestion);
        setLastIndexQuestion(-1);
    }

    return (
        <View id={id} activePanel={createIdActivePanel(indexQuestion)}>
            {
                arrQuestions.map((question, i, arr) =>(
                    <IteamListQuestion
                        key={i}
                        id={createIdActivePanel(i)}
                        curWidth={curWidth}

                        question={question}
                        numberCurrentQuestion={i+1}
                        countQuestions={arr.length}

                        stateAnswers={stateAnswers}
                        indexAnswer={stateAnswers[i].indexAnswer}

                        lastIndexQuestion={lastIndexQuestion}
                        currentIndexQuestion={i}
                        goToLastQuestion={goToLastQuestion}
                        goToQuestionWithoutAnswer={createGoToQuestionWithoutAnswer(i)}

                        goToNextQuestion={createGoToNextQuestion(i, arr.length)}
                        goToPrevQuestion={createGoToPrevQuestion(i)}

                        onFinish={() => onFinish(calculateScore())}
                    />
                ))
            }
        </View>
    )
}

export default ListQuestions;
