import { CardGrid, ContentCard, Div, Spinner } from '@vkontakte/vkui';
import React, { useState } from 'react';
import './ListCard.css'
import { getColNumber, getwidthInfo } from '../../help';

const ListCard = ( { info, curWidth, cardClick = (index) => null } ) => {

    const getWidthInfo = () => {
        if(curWidth>1280){
            return {colNumber:"s", maxWidth:"1220px"}
        }
        else if (curWidth>560){
            return {colNumber:"m", maxWidth:"820px"}
        }
        else {
            return {colNumber:"l", maxWidth:"420px"}
        } 
    }

    return (
        <Div>
            {
            <div className="ListCard" style={{maxWidth:getWidthInfo().maxWidth}}>
                <CardGrid size={getWidthInfo().colNumber}>
                {
                    info.map((record,i) => (
                        <ContentCard
                            header={
                                <div className="ListCard__title">
                                    <div>{record.title}</div>
                                    <div>{record.percentProgress}/{record.numberOfQuestions}</div>
                                </div>
                            }
                            mode={"tint"}
                            onClick={cardClick(i)}
                            image={record.imageSrc}
                            caption={record.description}
                            className="ListCard__Card"
                        />
                    ))
                }
                </CardGrid>
            </div>
            }
        </Div>
    )
}

export default ListCard