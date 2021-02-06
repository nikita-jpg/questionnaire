import React, { useState, useEffect } from 'react';

import './BottomSheet.css';

import candelabrumOpen from "./candelabrumOpen.svg";
import candelabrumClose from "./candelabrumClose.svg";

const BottomSheet = ({stateAnswers, onFinish=()=>{}, goToQuestionWithoutAnswer=(toIndexQuestion)=>{}}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => setIsOpen(!isOpen);

    // логика закрытия по щелчку вне BottomSheet
    const handlerClickWithoutBottomSheet = (e) => {
        if (!e.target.closest(".BottomSheet")) {
            setIsOpen(false);
        }
    }

    useEffect(() => {
        if (isOpen) {
            window.addEventListener("click", handlerClickWithoutBottomSheet);
        } else {
            window.removeEventListener("click", handlerClickWithoutBottomSheet);
        }

        return () => {
            window.removeEventListener("click", handlerClickWithoutBottomSheet);
        }
    }, [isOpen]);

    return (
        <div className={`BottomSheet ${isOpen && "BottomSheet__open"}`}>
            <img 
                onClick={toggleIsOpen} 
                className="BottomSheet__candelabrum" 
                src={isOpen ?candelabrumOpen :candelabrumClose}
                alt="candelabrum"
            />

            <ul className="BottomSheet__list">
                {
                    stateAnswers.map(({questionText, indexAnswer}, i) => (
                        <li key={i} className="BottomSheet__list-item" onClick={() => goToQuestionWithoutAnswer(i)}>
                            <span className="BottomSheet__question-text">{i+1}) {questionText}...</span>

                            {
                                indexAnswer !== -1
                                    ?<span className="BottomSheet__has-answer">Вы ответили</span>
                                    :<span className="BottomSheet__has-not-answer">Нет ответа</span>
                            }
                        </li>
                    ))
                }
            </ul>

            <button className="BottomSheet__button" onClick={onFinish}>Закончить тест</button>
        </div>
    )
}

export default BottomSheet;
