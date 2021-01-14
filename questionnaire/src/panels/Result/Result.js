import { Icon24Back, Icon28ChevronBack } from "@vkontakte/icons";
import { Button, IOS, PanelHeader, PanelHeaderButton, platform } from "@vkontakte/vkui";
import bridge from '@vkontakte/vk-bridge';
import React from "react";

import "./Result.css";

const osName = platform();

const sendToHistory = (image) => {
    console.log(image);

    bridge.send("VKWebAppShowStoryBox", { 
        "background_type" : "image",
        "url": "https://nikita-jpg.github.io" + image
    });
}

const sendToWall = (image) => {
    window.open("https://vk.com/share.php?url=https://nikita-jpg.github.io" + image);
}

const Result = ({backgroundImage, image, historyImage, wallImage, text, goBack}) => {
    const styleBackgroundImg = {
        backgroundImage: `url('${backgroundImage}')`
    }

    return (
        <>
            <PanelHeader
                left={
                    <>
                        <PanelHeaderButton onClick={goBack}>
                            {osName === IOS ? <Icon28ChevronBack fill="white" /> : <Icon24Back fill="white" />}
                        </PanelHeaderButton>
                        <div className="Result__title">Итог</div>
                    </>
                }
                separator={false}
                visor={false}
                transparent={true}
            >
            </PanelHeader>

            <div className="Result" style={styleBackgroundImg}>
                <div className="Result__content">
                    <img className="Result__image" src={image} alt={`image_result`} />

                    <p className="Result__text">{text}</p>

                    <div className="Result__list-buttons">
                        <Button
                            mode="overlay_secondary"
                            className="Result__button"
                            onClick={() => {
                                sendToHistory(historyImage)
                            }}
                        >
                            В историю
                        </Button>

                        <Button
                            mode="overlay_secondary"
                            className="Result__button"
                            onClick={() => {
                                sendToWall(wallImage)
                            }}
                        >
                            На стену
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Result;
