import { ContentCard, Div } from '@vkontakte/vkui';
import React from 'react';
import CardWrapper from '../CardWrapper/CardWrapper';
import './ListCard.css';

const ListCard = ( { info, gridGap="8px", curWidth, cardClick = (index) => null } ) => {

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

    const styleListCard = {
        maxWidth: getWidthInfo().maxWidth,
        gridGap
    }

    return (
            <div className="ListCard" style={styleListCard}>
                {
                    info.map((record,i) => (
                        <div key={record.title}>
                            <CardWrapper
                                title={record.title}
                                percentProgress={record.percentProgress}
                                numberOfQuestions={record.numberOfQuestions}
                                cardClick={cardClick(i)}
                                imageSrc={record.imageSrc}
                                description={record.description}
                            >
                            </CardWrapper>
                        </div>
                    ))
                }
            </div>
    )
}

export default ListCard