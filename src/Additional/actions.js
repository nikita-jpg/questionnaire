import SET_CUR_WIDTH from './consts'

export const Additional_setCurWidth = (curWidth) => {
    return{
        type:SET_CUR_WIDTH,
        curWidth:curWidth
    }
}