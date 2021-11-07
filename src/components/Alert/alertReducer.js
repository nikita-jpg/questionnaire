import * as consts from './consts'
import { initialState } from "./initialState"

export const alertReducer = (state = initialState, action) => {

    switch(action.type){
        case consts.CLOSE_ALERT:
        {
            return null
        }

        case consts.SET_ALERT:
        {
            return {...action.alert}
        }

        default:
        {
            return state
        }
    }

}