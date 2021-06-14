import { PanelHeader, View, Panel, CardGrid, ContentCard } from '@vkontakte/vkui';
import React, { useState } from 'react';
import ItemListAge from './ItemListAge/ItemListAge';
import test from './petr.png'
import './ListAge.css'

const ListAge = ({id, eras,curWidth, createOnClickItemAge=index=>null}) => {

    const ID_ACTIVE_PANEL = "ID_ACTIVE_PANEL";

    const getColNumber = (curWidth) => {
        if(curWidth>1280){
            return "s"
        }
        else if (curWidth>560){
            return "m"
        }
        else {
            return "l"
        } 
    }

    return (
        <View id={id} activePanel={ID_ACTIVE_PANEL} >
            <Panel id={ID_ACTIVE_PANEL}>

                <div className="ListAge">
                <PanelHeader                     
                    separator={false}
                    visor={true}
                    transparent={true}
                    fixed={false}>
                    <span className="ListAge__Header">Выберете эпоху</span>
                </PanelHeader>
                    <CardGrid size={getColNumber(curWidth)}>
                        {
                            eras.map((age, i, arrAge) => (
                                <ContentCard
                                    header={age.title}
                                    image={test}
                                    className="ListAge__Card"
                                />
                            ))
                        }
                    </CardGrid>
                </div>
            </Panel>
        </View>
    )
}

export default ListAge;
