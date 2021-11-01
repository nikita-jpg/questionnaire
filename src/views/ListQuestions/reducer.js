import { initialState } from "./initialState"
import * as consts from './consts'

export const listSurveyReducer = (state = initialState, action) =>{
    switch(action.type){
        // case consts.SURVEY_FINISHED_GO_TO_RESULT_FALSE:{
        //     return {...state, ...{surveyFinishedGoToResult: false}}
        // }
        // case consts.SURVEY_FINISHED_GO_TO_RESULT_TRUE:{
        //     return {...state, ...{surveyFinishedGoToResult: true}}
        // }
        case consts.GIVE_ANSWER:{
            let userAnswers = state.userAnswers;
            userAnswers.push(action.userAnswer)
            return {...state, ...{userAnswers: userAnswers}}
        }
        default:{
            return state
        }
    }
}