import { Card, CardScroll, Panel, PanelHeader, View, CardGrid, ContentCard, Button} from '@vkontakte/vkui';
import React from 'react';
import test from '../../img/ageRussianEmpire/quizPetr1/petr.png'

import svgContacts from './contacts.svg';

import './StartWindow.css';


const StartWindow = ({id, onClick}) => {
    const ID_ACTIVE_PANEL = "ID_ACTIVE_PANEL";

    return (
        <Panel id={id} separator={false}>
            <div className="StartWindow">
                <div className="StartWindow__container">
                    <img width="50" height="50" src={svgContacts} alt="contacts"/>
                    <h1 className="StartWindow__title">Привет, друг!1</h1>
                    <p className="StartWindow__text">
                        Это приложение поможет тебе проверить свои знания в области истори родной страны. Удачи!
                    </p>
                    <button className="StartWindow__button" onClick={onClick}>Поехали!</button>
                </div>
            </div>
        </Panel>
    );
}

export default StartWindow;