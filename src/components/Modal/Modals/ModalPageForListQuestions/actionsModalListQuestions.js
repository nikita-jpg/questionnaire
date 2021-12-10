import { MODAL_HANDLER_LIST_QUESTIONS } from "../../consts"

export const setDataModalListQuestions = (data) => {
    return{
        type: MODAL_HANDLER_LIST_QUESTIONS,
        data: data
    }
}