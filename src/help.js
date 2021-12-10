import { QUESTION_NOT_ANSWERED } from './NotUI/Data/consts';

export const isTitleCentre = (curWidth) => {
    return({
    text:curWidth >= 370 ? "center" : "start"
    })
}

export const getWidthInfo = (curWidth) => {

    if(curWidth>1280){
        return {colNumber:"s", maxWidth:"1500px"}
    }
    else if (curWidth>560){
        return {colNumber:"m", maxWidth:"1280px"}
    }
    else {
        return {colNumber:"l", maxWidth:"560px"}
    } 
}

export const getAnswersResultSurvey = (survey) => {
    let arrQuestions = survey.subset

    let score = 0;
    const total = arrQuestions.length;

    arrQuestions.map((question)=>{
        for(let i=0;i<question.answerOptions.length;i++){
            if ( (question.userAnswer !== QUESTION_NOT_ANSWERED) && (question.userAnswer.idAnswerOption === question.answerOptions[i].idAnswerOption) && (question.answerOptions[i].score === 1)){
                score++;
            }
        }
    })

    return{
        score:score,
        total:total
    }
}

export const getAnswersResultEra = (era) => {
    let arrSurveys = era.subset

    let score = 0;
    const total = arrSurveys.length;

    arrSurveys.map((survey)=>{
        let surveyResult = getAnswersResultSurvey(survey)
        if(surveyResult.score === surveyResult.total){
            score++;
        }
    })

    return{
        score:score,
        total:total
    }
}

// Получить все эры
// Получить результаты конкретной эры
// Опросник получить
// Результат опросника
//  