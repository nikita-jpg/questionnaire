import {initialState} from './initialState'
import * as viewsConsts from './Constants'

export const appReducer = (state = initialState, action) => {

    for (let viewConst in viewsConsts){
        if(action.type === viewConst){
            return {...state, ...{currentView:viewConst}}
        }
    }

    return state
    
}