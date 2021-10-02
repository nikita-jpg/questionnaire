import { ContentCard, Div } from '@vkontakte/vkui';
import React from 'react';
import CardWrapper from '../CardWrapper/CardWrapper';
import './ListCard.css';

const ListCard = ( { info, curWidth, cardClick = (index) => null}) => {

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

    // console.log(info)

    return (
            <div className="ListCard" style={{maxWidth:getWidthInfo().maxWidth}}>
                {
                    info.map((record,i) => {
                        return <div key={record.russianName}>
                            <CardWrapper
                                title={record.russianName}
                                percentProgress={record.percentProgress}
                                numberOfQuestions={record.subset.length}
                                cardClick={cardClick(i)}
                                imageName={record.image.imageName}
                                description={record.description}
                            >
                            </CardWrapper>
                        </div>
                    })
                }
            </div>
    )
}

export default ListCard