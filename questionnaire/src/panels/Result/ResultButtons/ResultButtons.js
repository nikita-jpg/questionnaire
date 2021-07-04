import React from "react";

import bridge from '@vkontakte/vk-bridge';

import { Button, CellButton, Div } from "@vkontakte/vkui";

import '../Result.css';
import { Icon28AddAwardOutline } from "@vkontakte/icons";
import { Icon56LikeOutline } from '@vkontakte/icons';
import { Icon28ArticleOutline } from '@vkontakte/icons';
import { Icon24List } from '@vkontakte/icons';
import { Icon28RefreshOutline } from '@vkontakte/icons';
import { Icon56ArticleOutline } from '@vkontakte/icons';
import { Icon28ShareExternalOutline } from '@vkontakte/icons';
import ButtonWrapper from "../../../components/ButtonWrapper/ButtonWrapper";

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

    const iconSize = 28;

    return (
        <div className="Result__buttons-container">
            {/* <Div> */}

                <ButtonWrapper
                    text="К вопросам"
                    className="Result__button"
                    classNameText="Result__button-text"
                    before={<Icon24List width={iconSize} height={iconSize} style={{color:"var(--main-yellow-color)"}}/>}
                    onClick={onGoToAnswersQuestion}
                >
                </ButtonWrapper>

                <ButtonWrapper
                    size="l"
                    text="Ещё раз"
                    className="Result__button"
                    classNameText="Result__button-text"
                    before={<Icon28RefreshOutline width={iconSize} height={iconSize} style={{color:"var(--main-green-color)"}}/>}
                    onClick={onAgain}
                >
                </ButtonWrapper>

                {/* <ButtonWrapper
                    size="l"
                    text="К вопросам"
                    className="Result__button"
                    classNameText="Result__button-text"
                    before={<Icon24List width={iconSize} height={iconSize} style={{color:"var(--main-yellow-color)"}}/>}
                >
                </ButtonWrapper> */}

                <ButtonWrapper
                    size="l"
                    text="Поделиться"
                    className="Result__button"
                    classNameText="Result__button-text"
                    before={<Icon28ShareExternalOutline width={iconSize} height={iconSize} style={{color:"var(--main-blue-color)"}}/>}
                >
                </ButtonWrapper>

                {/* <button className="Result__button Result__button_favorite">Поддержать</button>
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
                </button> */}
            {/* </Div> */}
        </div>
    )
}

export default ResultButtons;

{/* 
            <Button
                size="l"
                className="Result__button"
                before={<Icon56ArticleOutline width={28} height={28} style={{color:"var(--main-yellow-color)"}} />}
            >
                <div className="Result__button-text">
                    К вопросам
                </div>
            </Button> */}