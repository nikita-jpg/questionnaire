import { PanelHeader, Panel, Div } from '@vkontakte/vkui';
import React from 'react';
import './ListAge.css'
import { isTitleCentre } from '../../help';
import ListCard from '../../components/ListCard/ListCard'
import Header from '../../components/Header/Header'
import PanelWrapper from '../../components/PanelWrapper/PanelWrapper';


const ListAge = ({id, eras,curWidth, createOnClickItemAge=index=>null, downloadImage=index=>null}) => {

    console.log(eras)
    return (
        <PanelWrapper id={id} headerText="Выбирете эпоху" isHeaderFixed={true}>

                <div className="ListAge__content">
                    <ListCard
                        info={eras}
                        curWidth={curWidth}
                        cardClick={createOnClickItemAge}
                        downloadImage={downloadImage}>
                    </ListCard>
                </div>

        </PanelWrapper>
    )
}

export default ListAge;
