import { MODAL_ID_LIST_QUESTIONS } from "../components/Modal/consts"

export const getIdActiveModal = (state) =>{
    return state.Modal.activeModal
}

export const getDataModalListQuestions = (state) =>{
    return state.Modal.modalListQuestions
}

export const isModalListQuestionsOpen = (state) =>{
    if(state.Modal.activeModal === MODAL_ID_LIST_QUESTIONS){
        return true
    }
    else{
        return false
    }
}