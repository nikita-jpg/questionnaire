import { Card, CardScroll, Panel, PanelHeader, View, CardGrid, ContentCard, Button} from '@vkontakte/vkui';
import React from 'react';
import ButtonWrapper from '../../components/ButtonWrapper/ButtonWrapper';
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
                    <h1 className="StartWindow__title">Привет, друг!</h1>
                    <p className="StartWindow__text">
                        Это приложение поможет тебе проверить свои знания в области истори родной страны. Удачи!
                    </p>
                    <ButtonWrapper className="StartWindow__button" classNameText="StartWindow__button-text" isCentered={true} onClick={onClick} text="Поехали!"></ButtonWrapper>
                </div>
            </div>
        </Panel>
    );
}

export default StartWindow;