import { Card, CardScroll, Panel, PanelHeader, View, CardGrid, ContentCard, Button, ScreenSpinner} from '@vkontakte/vkui';
import React, { useState } from 'react';
import ButtonWrapper from '../../components/ButtonWrapper/ButtonWrapper';


import svgContacts from './contacts.svg';

import './StartWindow.css';


const StartWindow = ({id, onClick=()=>{}, arrForPreDownload}) => {
    
    return (
        <View id={id}> 
            <Panel separator={false}>
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
        </View>
    );
}

export default StartWindow;