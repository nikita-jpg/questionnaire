import { initialState } from "./initialState"
import {SET_INDEX_ERA, SET_INDEX_SURVEY, SAVE_USER_ANSWERS, SET_INDEX_QUESTION} from './consts'

export const dataReducer = (state = initialState, action) =>{
    switch(action.type){

        case SET_INDEX_ERA:{
            return {...state, ...{CurEraId: action.CurEraId}}
        }

        case SET_INDEX_SURVEY:{
            return {...state, ...{CurSurveyId: action.CurSurveyId}}
        }

        case SET_INDEX_QUESTION:{
            return {...state, ...{CurQuestionId: action.CurQuestionId}}
        }

        case SAVE_USER_ANSWERS:{
            let survey = {...state.Eras[state.indexEra].subset[state.indexSurvey]};
            let userAnswers = action.userAnswers;

            survey.subset.map((question)=>{
                question.userAnswer = null
            })

            survey.subset.map((question)=>{
                for(let i=0;i<userAnswers.length;i++){
                    if(question.idQuestion === userAnswers[i].idQuestion){
                        question.userAnswer = {idAnswerOption:userAnswers[i].idAnswerOption}
                    }
                }
            })

            return {...state, ...{survey}}
        }
        default:{
            return state
        }
    }
}