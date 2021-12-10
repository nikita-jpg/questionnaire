import {SET_CUR_WIDTH, SET_CUR_HEIGHT} from './consts'
import { initialState } from './initialState'

export const additionalReducer = (state = initialState, action) => {

    switch(action){
        case SET_CUR_WIDTH :{
            return {...state,...{curWidth:action.curWidth}}
        }

        case SET_CUR_HEIGHT:{
            return {...state,...{curHeight:action.curHeight}}
        }

        default:{
            return state
        }
    }
    
}