import { Card, CardScroll, Panel, PanelHeader, View, CardGrid, ContentCard, Button} from '@vkontakte/vkui';
import React from 'react';
import test from '../../img/ageRussianEmpire/quizPetr1/petr.png'

import svgContacts from './contacts.svg';

import './StartWindow.css';

const tests = () =>{
    return(
        <div style={{width:"100px", height:"100px", backgroundColor:"black"}}></div>
    )
}

const StartWindow = ({id, onClick}) => {
    const ID_ACTIVE_PANEL = "ID_ACTIVE_PANEL";

    return (
        <View activePanel={ID_ACTIVE_PANEL} id={id}>
            <Panel id={ID_ACTIVE_PANEL} separator={false}>
                      {/* <CardGrid size="m">
                        <ContentCard 
                        image={test} 
                        style={{ maxWidth: '600px' }}
                        header="Российская империя"
                        text="21/50"
                        caption={<Button/>}>
                        {/* <div style={{ paddingBottom: '62%' }} /> */}
                        {/* <Button></Button> */}
                        {/* </ContentCard>
                        <ContentCard 
                        image={test} 
                        style={{ maxWidth: '600px' }}> */}
                        {/* <div style={{ paddingBottom: '62%' }} /> */}
                        {/* </ContentCard>
                        <ContentCard 
                        image={test} 
                        style={{ maxWidth: '600px' }}> */}
                        {/* <div style={{ paddingBottom: '62%' }} /> */}
                        {/* </ContentCard>
                        <ContentCard 
                        image={test} 
                        style={{ maxWidth: '600px' }}> */}
                        {/* <div style={{ paddingBottom: '62%' }} /> */}
                        {/* </ContentCard>
                        <ContentCard 
                        image={test} 
                        style={{ maxWidth: '600px' }}> */}
                        {/* <div style={{ paddingBottom: '62%' }} /> */}
                        {/* </ContentCard>
                    </CardGrid>  */}
                    

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
        </View>
    );
}

export default StartWindow;