import { PanelHeader, View, Panel, CardGrid, ContentCard, usePlatform } from '@vkontakte/vkui';
import React, { useState } from 'react';
import ItemListAge from './ItemListAge/ItemListAge';
import test from './petr.jpg'
import './ListAge.css'
import { getColNumber, isTitleCentre } from '../../help';


const ListAge = ({id, eras,curWidth, createOnClickItemAge=index=>null}) => {

    const ID_ACTIVE_PANEL = "ID_ACTIVE_PANEL";


    return (
        <Panel id={ID_ACTIVE_PANEL}>

            <div className="ListAge">
                <PanelHeader                     
                    separator={false}
                    visor={true}
                    transparent={true}
                    fixed={false}
                    // Центрируем надпись
                    left={isTitleCentre(curWidth).stub}
                    right={isTitleCentre(curWidth).stub}
                    style={isTitleCentre(curWidth).text}
                    >
                    Выбирете эпоху
                </PanelHeader>
                <CardGrid size={getColNumber(curWidth)}>
                    {
                        eras.map((age, i, arrAge) => (
                            <ContentCard
                                header={
                                    <div className="ListAge__title">
                                        <div>{age.title}</div>
                                        <div>{age.percentProgress}/10</div>
                                    </div>
                                }
                                onClick={createOnClickItemAge(i)}
                                image={test}
                                caption={age.description}
                                className="ListAge__Card"
                            />
                        ))
                    }
                </CardGrid>
            </div>
        </Panel>
    )
}

export default ListAge;
