import { View } from '@vkontakte/vkui';
import React from 'react';
import { useDispatch } from 'react-redux';
import ButtonWrapper from '../../components/ButtonWrapper/ButtonWrapper';
import PanelWrapper from '../../components/PanelWrapper/PanelWrapper';
import book from '../../svg/book.svg';
import './StartWindow.css';

const StartWindow = ({id, goToPollView=()=>{}}) => {

    const dispath = useDispatch()
    
    return (
        <View id={id}> 
            <PanelWrapper separator={false} isHeaderHide={true} isVerticalCentre={true} isMustHasMaxHeight={true}>
                <div className="StartWindow">
                    <div className="StartWindow__container">
                        <img width="50" height="50" src={book}/>
                        <h1 className="StartWindow__title">Привет, друг!</h1>
                        <p className="StartWindow__text">
                            Это приложение поможет тебе проверить свои знания в области истории родной страны. Удачи!
                        </p>
                        <ButtonWrapper className="StartWindow__button" classNameText="StartWindow__button-text" isCentered={true} onClick={()=>dispath(goToPollView())} text="Поехали!"></ButtonWrapper>
                    </div>
                </div>
            </PanelWrapper>
        </View>
    );
}

export default StartWindow;