import { initialState } from "./initialState"
import {SET_INDEX_ERA, SET_INDEX_SURVEY, SAVE_USER_ANSWERS} from './consts'

export const dataReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_INDEX_ERA:{
            return {...state, ...{indexEra: action.indexEra}}
        }
        case SET_INDEX_SURVEY:{
            return {...state, ...{indexSurvey: action.indexSurvey}}
        }
        case SAVE_USER_ANSWERS:{
            let survey = {...state.Eras[state.indexEra].subset[state.indexSurvey]};
            let userAnswers = action.userAnswers;

            survey.subset.map((question)=>{
                for(let i=0;i<userAnswers.length;i++){
                    if(question.idQuestion === userAnswers[i].idQuestion){
                        question.userAnswer = {idAnswerOption:userAnswers[i].idAnswerOption}
                    }
                }
            })

            // survey.subset.map((answer)=>{

            // })

            // survey.subset = action.userAnswers;
            return {...state, ...{survey}}
        }
        default:{
            return state
        }
    }
}