import { PanelHeader, Panel } from '@vkontakte/vkui';
import React from 'react';
import './ListAge.css'
import { isTitleCentre } from '../../help';
import ListCard from '../../components/ListCard/ListCard'
import Header from '../../components/Header/Header'


const ListAge = ({id, eras,curWidth, createOnClickItemAge=index=>null}) => {

    const ID_ACTIVE_PANEL = "ID_ACTIVE_PANEL";


    return (
        <Panel id={ID_ACTIVE_PANEL}>
            <div className="ListAge">

                <Header
                    curWidth={curWidth}
                    title="Выбирете эпоху"
                ></Header>

                <ListCard
                    info={eras}
                    curWidth={curWidth}
                    cardClick={createOnClickItemAge}>
                </ListCard>

            </div>
        </Panel>
    )
}

export default ListAge;
