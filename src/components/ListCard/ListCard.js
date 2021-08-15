import { ContentCard, Div } from '@vkontakte/vkui';
import React from 'react';
import './ListCard.css';

const ListCard = ( { info, curWidth, gridGap="8px", cardClick = (index) => null } ) => {

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
                        </div>
                    ))
                }
            </div>
    )
}

export default ListCard