import { initialState } from "./initialState"
import {SET_INDEX_ERA_AND_SURVEY} from './consts'

export const dataReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_INDEX_ERA_AND_SURVEY:{
            return {...state, ...{indexEra: action.indexEra,indexSurvey: action.indexSurvey}}
        }
        default:{
            return state
        }
    }
}