import { Card, CardScroll, Panel, PanelHeader, View, CardGrid, ContentCard, Button, ScreenSpinner, usePlatform, Platform} from '@vkontakte/vkui';
import React, { useState } from 'react';
import ButtonWrapper from '../../components/ButtonWrapper/ButtonWrapper';
import PanelWrapper from '../../components/PanelWrapper/PanelWrapper';
import { useDispatch, useSelector } from 'react-redux';



const TestView = ({id, onClick=()=>{}}) => {

    const text = useSelector(state=>state.testStrings);
    const dispatch = useDispatch(); 
    // const getState = () =>{
    //     console.log(useSelector(state=>state))
    // }

    const action = {
        type:"1"
    }
    
    return (
        <View id={id}> 
            <PanelWrapper separator={false} isHeaderHide={true} isVerticalCentre={true}>
                <div style={{width:"100%", height:"100%"}}>
                    {text}
                    <Button onClick={()=>dispatch(action)}></Button>
                </div>
                
                {/* <div className="StartWindow">
                    <div className="StartWindow__container">
                        <img width="50" height="50" src={book}/>
                        <h1 className="StartWindow__title">Привет, друг!</h1>
                        <p className="StartWindow__text">
                            Это приложение поможет тебе проверить свои знания в области истори родной страны. Удачи!
                        </p>
                        <ButtonWrapper className="StartWindow__button" classNameText="StartWindow__button-text" isCentered={true} onClick={onClick} text="Поехали!"></ButtonWrapper>
                    </div>
                </div> */}
            </PanelWrapper>
        </View>
    );
}

export default TestView;