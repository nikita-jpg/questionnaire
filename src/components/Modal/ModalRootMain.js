import { ModalRoot } from "@vkontakte/vkui"
import React from 'react';
import ModalPageForListQuestions from "./Modals/ModalPageForListQuestions/ModalPageForListQuestions"
import * as consts from './consts'
import * as actions from './actions'
import { useDispatch, useSelector } from "react-redux"
import { getDataModalListQuestions, getIdActiveModal } from "../../Selectors/modal_selectors"

const ModalRootMain = ({}) => {
    
    //actions
    const dispatch = useDispatch();
    const closeModal = () => {
        dispatch(actions.closeModal())
    }

    //ModalRoot
    const activeModal = useSelector(getIdActiveModal);

    //ModalPageForListQuestions
    const modalPageListQuestions = useSelector(getDataModalListQuestions)

    return(
        <ModalRoot activeModal={activeModal} onClose={closeModal}>
            <ModalPageForListQuestions
                settlingHeight={100} 
                id={consts.MODAL_ID_LIST_QUESTIONS}
                arrQuestions={modalPageListQuestions.arrQuestions}
                getUserAnswer={modalPageListQuestions.getUserAnswer}
                goToCurrentQuestion={modalPageListQuestions.goToCurrentQuestion}
                finishSurvey={modalPageListQuestions.finishSurvey}

                changeModal={closeModal}
            />
        </ModalRoot>
    )
}

export default ModalRootMain
