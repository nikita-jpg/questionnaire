import React from 'react';
import { useSelector } from 'react-redux';
import { getCurWidth } from './Additional/selectors';

export const isTitleCentre = (curWidth) => {
    return({
    // stub:curWidth >= 370 ? <div style={{width:"90px"}}>{element} </div> :element,
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
            if ( (question.userAnswer !== null) && (question.userAnswer.idAnswerOption === question.answerOptions[i].idAnswerOption) && (question.answerOptions[i].score === 1)){
                score++;
            }
        }
    })

    return{
        score:score,
        total:total
    }
}

export const getAnswersResulEra = (era) => {
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