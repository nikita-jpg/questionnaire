import React, { useState, useEffect } from 'react';

import './BottomSheet.css';

import svgRectangle from "./rectangle.svg";
import svgCandelabrum from "./candelabrum.svg";
import BlackBackground from '../../../../components/BlackBackground/BlackBackground';

const BottomSheet = ({ stateAnswers, onFinish = () => { }, goToQuestionWithoutAnswer = (toIndexQuestion) => { } }) => {
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
        <>
            {isOpen && <BlackBackground />}
            
            <div className={`BottomSheet ${isOpen && "BottomSheet__open"}`}>
                <div className="BottomSheet__svg-wrap" onClick={toggleIsOpen}>
                    <img
                        className={`BottomSheet__candelabrum ${isOpen && "BottomSheet__candelabrum_open"}`}
                        src={svgCandelabrum}
                        alt="candelabrum"
                    />

                    <img
                        className="BottomSheet__rectangle"
                        src={svgRectangle}
                        alt="rectangle"
                    />
                </div>

                <ul className="BottomSheet__list">
                    {
                        stateAnswers.map(({ questionText, indexAnswer }, i) => (
                            <li key={i} className="BottomSheet__list-item">
                                <div 
                                    className="BottomSheet__selection-block BottomSheet__selection-block_left"
                                    onClick={() => goToQuestionWithoutAnswer(i)}
                                >
                                    <span className="BottomSheet__question-text">{i + 1}) {questionText}...</span>
                                </div>

                                <div className="BottomSheet__selection-block BottomSheet__selection-block_right">
                                    {
                                        indexAnswer !== -1
                                            ? <div className="BottomSheet__answer BottomSheet__answer_has">Вы ответили</div>
                                            : <div className="BottomSheet__answer BottomSheet__answer_not-has">Нет ответа</div>
                                    }
                                </div>
                            </li>
                        ))
                    }
                </ul>

                <button className="BottomSheet__button" onClick={onFinish}>Закончить тест</button>
            </div>
        </>
    )
}

export default BottomSheet;
