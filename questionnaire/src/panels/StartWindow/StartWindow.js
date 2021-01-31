import { Panel, PanelHeader, View } from '@vkontakte/vkui';
import React from 'react';

import svgContacts from './contacts.svg';

import './StartWindow.css';

const StartWindow = ({id, onClick}) => {
    const ID_ACTIVE_PANEL = "ID_ACTIVE_PANEL";

    return (
        <View activePanel={ID_ACTIVE_PANEL} id={id}>
            <Panel id={ID_ACTIVE_PANEL} separator={false}>
                <PanelHeader
                    separator={false}
                    visor={false}
                    transparent={true}
                ></PanelHeader>

                <div className="StartWindow">
                    <div className="StartWindow__container">
                        <img width="50" height="50" src={svgContacts} alt="contacts"/>
                        <h1 className="StartWindow__title">Привет, друг!</h1>
                        <p className="StartWindow__text">
                            Это приложение поможет тебе проверить свои знания в области истори родной страны. Удачи!
                        </p>
                        <button className="StartWindow__button" onClick={onClick}>Поехали!</button>
                    </div>
                </div>
            </Panel>
        </View>
    );
}

export default StartWindow;