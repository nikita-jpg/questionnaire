import { CardGrid, ContentCard, Div, Spinner } from '@vkontakte/vkui';
import React, { useState } from 'react';
import './ListCard.css'
import { getColNumber, getwidthInfo } from '../../help';

const ListCard = ( { info, curWidth, cardClick = (index) => null } ) => {

    const getWidthInfo = () => {
        if(curWidth>1280){
            return {colNumber:"s", maxWidth:"--main-three-col-max-width"}
        }
        else if (curWidth>560){
            return {colNumber:"m", maxWidth:"--main-two-col-max-width"}
        }
        else {
            return {colNumber:"l", maxWidth:"--main-one-col-max-width"}
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