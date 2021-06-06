import React from 'react'
import { ModalPage, ModalRoot, ModalCard } from "@vkontakte/vkui"

import './Modal.css';

const Modal = ({id,stateAnswers, onFinish = () => { }, goToQuestionWithoutAnswer = (toIndexQuestion) => { } }) => {
    const isOpen = true;
    return(
        <ModalRoot activeModal={id}>
            <ModalCard idInside="MODAL_TEST" settlingHeight={100}>

            <div className={`Modal ${isOpen && "Modal__open"}`}>
                {/* <div className="Modal__svg-wrap" onClick={toggleIsOpen}>
                    <img
                        className={`Modal__candelabrum ${isOpen && "Modal__candelabrum_open"}`}
                        src={svgCandelabrum}
                        alt="candelabrum"
                    />

                    <img
                        className="Modal__rectangle"
                        src={svgRectangle}
                        alt="rectangle"
                    />
                </div> */}

                <ul className="Modal__list">
                    {
                        stateAnswers.map(({ questionText, indexAnswer }, i) => (
                            <li key={i} className="Modal__list-item">
                                <div 
                                    className="Modal__selection-block Modal__selection-block_left"
                                    onClick={() => goToQuestionWithoutAnswer(i)}
                                >
                                    <span className="Modal__question-text">{i + 1}) {questionText}...</span>
                                </div>

                                <div className="Modal__selection-block Modal__selection-block_right">
                                    {
                                        indexAnswer !== -1
                                            ? <div className="Modal__answer Modal__answer_has">Вы ответили</div>
                                            : <div className="Modal__answer Modal__answer_not-has">Нет ответа</div>
                                    }
                                </div>
                            </li>
                        ))
                    }
                </ul>

                <button className="Modal__button" onClick={onFinish}>Закончить тест</button>
            </div>

            </ModalCard>
        </ModalRoot>
    )
}

export default Modal