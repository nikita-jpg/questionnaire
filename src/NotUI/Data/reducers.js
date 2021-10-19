import { initialState } from "./initialState"
import {SET_INDEX_ERA_AND_SURVEY, SAVE_USER_ANSWERS} from './consts'

export const dataReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_INDEX_ERA_AND_SURVEY:{
            return {...state, ...{indexEra: action.indexEra,indexSurvey: action.indexSurvey}}
        }
        case SAVE_USER_ANSWERS:{
            let survey = state.Eras[state.indexEraAndSurvey.indexEra].subset[state.indexEraAndSurvey.indexSurvey];
            survey.subset = action.userAnswers;
            
            return {...state, ...{survey}}
        }
        default:{
            return state
        }
    }
}