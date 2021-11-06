import * as consts from './consts'
import { initialState } from "./initialState"

export const alertReducer = (state = initialState, action) => {

    switch(action.type){
        case consts.CLOSE_ALERT:
        {
            console.log("i am null")
            return null
        }

        case consts.SET_ALERT:
        {
            // console.log(state)
            return {...action.alert}
            // return action.alert
        }

        default:
        {
            return state
        }
    }

}