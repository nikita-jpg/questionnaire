import { Card, CardScroll, Panel, PanelHeader, View, CardGrid, ContentCard, Button, ScreenSpinner, usePlatform, Platform} from '@vkontakte/vkui';
import React, { useState } from 'react';
import ButtonWrapper from '../../components/ButtonWrapper/ButtonWrapper';
import PanelWrapper from '../../components/PanelWrapper/PanelWrapper';


import svgContacts from './contacts.svg';

import './StartWindow.css';


const StartWindow = ({id, onClick=()=>{}}) => {

    // const marginBottom = usePlatform() === Platform.VKCOM ? "40px" : "0px"
    
    return (
        <View id={id}> 
            <PanelWrapper separator={false} isHeaderHide={true}>
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
            </PanelWrapper>
        </View>
    );
}

export default StartWindow;