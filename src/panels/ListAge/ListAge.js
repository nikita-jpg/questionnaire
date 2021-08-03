import { PanelHeader, Panel, Div } from '@vkontakte/vkui';
import React from 'react';
import './ListAge.css'
import { isTitleCentre } from '../../help';
import ListCard from '../../components/ListCard/ListCard'
import Header from '../../components/Header/Header'
import { MainBackground } from '../../components/MainBaclground/MainBackground';


const ListAge = ({id, eras,curWidth, createOnClickItemAge=index=>null}) => {

    const ID_ACTIVE_PANEL = "ID_ACTIVE_PANEL";
    // const testArr = [eras[0],eras[1],eras[2],eras[0],eras[0],eras[0],eras[0],eras[0],eras[0],eras[0],eras[0],eras[0],];


    return (
        <Panel id={ID_ACTIVE_PANEL}>
            
            {
            // screenSpinner ||

            <div className="ListAge">

                <Header
                    text="Выбирете эпоху"
                    fixed={false}
                ></Header> 

                <ListCard
                    info={eras}
                    curWidth={curWidth}
                    cardClick={createOnClickItemAge}>
                </ListCard>

            </div>
            }

        </Panel>
    )
}

export default ListAge;
