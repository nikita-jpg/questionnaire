import { initialState } from "./initialState"
import {SET_INDEX_ERA, SET_INDEX_SURVEY, SAVE_USER_ANSWERS, SET_INDEX_QUESTION, SET_STATIC_DATA_FROM_SERVER} from './consts'

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
            let userAnswersState = [...state.UserAnswers].filter((userAnswer)=>userAnswer.idSurvey !== state.CurSurveyId);
            let userAnswers = action.userAnswers;
            
            if(userAnswersState === undefined){
                userAnswersState = []
            }

            for(let i=0;i<userAnswers.length;i++){
                userAnswersState.push(
                    userAnswers[i]
                )
            }

            return {...state, ...{UserAnswers:userAnswersState}}
        }

        case SET_STATIC_DATA_FROM_SERVER:{
            const data = action.data
            return {...state, ...{
                // UserData:data.UserData,
                Eras:data.Eras,
                Surveys:data.Surveys,
                Questions:data.Questions,
                AnswerOptions:data.AnswerOptions,
                UserAnswers:data.UserAnswers
            }}
        }



        default:{
            return state
        }
    }
}