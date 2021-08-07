import { PanelHeader, Panel, Div } from '@vkontakte/vkui';
import React from 'react';
import './ListAge.css'
import { isTitleCentre } from '../../help';
import ListCard from '../../components/ListCard/ListCard'
import Header from '../../components/Header/Header'
import PanelWrapper from '../../components/PanelWrapper/PanelWrapper';


const ListAge = ({id, eras,curWidth, screenSpinner, createOnClickItemAge=index=>null}) => {

    const ID_ACTIVE_PANEL = "ID_ACTIVE_PANEL";


    return (
        <PanelWrapper id={ID_ACTIVE_PANEL} headerText="Выбирете эпоху">

                {/* <Header
                    text="Выбирете эпоху"
                ></Header>  */}

                <div className="ListAge__content">
                    <ListCard
                        info={eras}
                        curWidth={curWidth}
                        cardClick={createOnClickItemAge}>
                    </ListCard>
                </div>

        </PanelWrapper>
    )
}

export default ListAge;
