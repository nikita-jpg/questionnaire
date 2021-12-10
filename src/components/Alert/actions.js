import * as consts from './consts'

export const Alert_setAlert = (alert) => {
    return{
        type:consts.SET_ALERT,
        alert:alert
    }
}

export const Alert_closeAlert = () => {
    return{
        type:consts.CLOSE_ALERT
    }
}