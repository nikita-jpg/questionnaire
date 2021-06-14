import { PanelHeader, View, Panel, CardGrid, ContentCard, usePlatform } from '@vkontakte/vkui';
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
                    fixed={false}
                    left={curWidth >= 375 ? <div style={{width:"90px"}}></div> : null}
                    right={curWidth >= 375 ? <div style={{width:"90px"}}></div> : null}
                    style={curWidth >= 375 ? {textAlign:"center"} : null}
                    >
                    Выбирете эпоху
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
