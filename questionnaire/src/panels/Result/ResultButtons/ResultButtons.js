import React from "react";

import bridge from '@vkontakte/vk-bridge';

import '../Result.css';

const ResultButtons = ({onAgain=()=>{}, onGoToAnswersQuestion=()=>{}}) => {
    const sendToHistory = (image) => {
        console.log(image);

        bridge.send("VKWebAppShowStoryBox", {
            "background_type": "image",
            "url": "https://nikita-jpg.github.io" + image
        });
    }

    const sendToWall = (image) => {
        window.open("https://vk.com/share.php?url=https://nikita-jpg.github.io" + image);
    }

    return (
        <div className="Result__buttons-container">
            <button className="Result__button Result__button_favorite">Поддержать</button>
            <button 
                onClick={onAgain} 
                className="Result__button Result__button_refresh">
                Ещё раз
            </button>
            <button className="Result__button Result__button_share">Поделиться</button>
            <button 
                onClick={onGoToAnswersQuestion} 
                className="Result__button Result__button_format-list-bulleted">
                К вопросам
            </button>
        </div>
    )
}

export default ResultButtons;
