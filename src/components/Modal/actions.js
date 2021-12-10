import * as consts from './consts';

export const openModalListQuestions = () => {
    return{
        type: consts.MODAL_SET_MODAL,
        modalId: consts.MODAL_ID_LIST_QUESTIONS
    }
}

export const closeModal= () => {
    return{
        type: consts.MODAL_CLOSE_MODAL
    }
}