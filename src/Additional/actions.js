import {SET_CUR_WIDTH, SET_CUR_HEIGHT} from './consts'

export const Additional_setCurWidth = (curWidth) => {
    return{
        type:SET_CUR_WIDTH,
        curWidth:curWidth
    }
}

export const Additional_setCurHeight = (curWHeight) => {
    return{
        type:SET_CUR_HEIGHT,
        curWHeight:curWHeight
    }
}