import { initialState } from "./initialState"
import * as consts from './consts'

export const poolVeiwReducer = (state = initialState, action) =>{
    switch(action.type){
        case consts.GO_TO_LIST_AGE:{
            return {...state, ...{firstPanel: consts.LIST_AGE_PANEL}}
        }
        case consts.GO_TO_LIST_SURVEY:{
            return {...state, ...{firstPanel: consts.LIST_SURVEYS_PANEL}}
        }
        default:{
            return state
        }
    }
}