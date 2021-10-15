import {SET_CUR_WIDTH} from './consts'
import { initialState } from './initialState'

export const additionalReducer = (state = initialState, action) => {

    switch(action){
        case SET_CUR_WIDTH :{
            return {...state,...{curWidth:action.curWidth}}
        }

        default:{
            return state
        }
    }
    
}