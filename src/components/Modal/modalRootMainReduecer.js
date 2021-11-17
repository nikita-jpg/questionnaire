import * as consts from './consts';
import {initialState} from './initilState'

export const modalReducer = (state = initialState, action) =>{

    switch(action.type){
        case consts.MODAL_SET_MODAL:{
            return {...state, ...{activeModal: action.modalId}}
        }
        case consts.MODAL_CLOSE_MODAL:{
            return {...state, ...{activeModal: null}}
        }
        case consts.MODAL_HANDLER_LIST_QUESTIONS:{

            let data = action.data;

            let newData = {
                arrQuestions:data.arrQuestions,
                getUserAnswer:data.getUserAnswer,
                goToCurrentQuestion:data.goToCurrentQuestion,
                finishSurvey:data.finishSurvey
            }

            return {...state, ...{modalListQuestions: newData}}
        }
        default:{
            return state
        }
    }
}