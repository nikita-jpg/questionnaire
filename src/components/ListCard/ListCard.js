import { ContentCard, Div } from '@vkontakte/vkui';
import React from 'react';
import { useSelector } from 'react-redux';
import { getCurWidth } from '../../Additional/selectors';
import CardWrapper from '../CardWrapper/CardWrapper';
import './ListCard.css';

const ListCard = ( { info,percentProgress,numberOfQuestions, cardClick = (index) => null}) => {

    const curWidth = useSelector(getCurWidth)

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
                                title={record.title}
                                percentProgress={record.percentProgress}
                                numberOfQuestions={record.numberOfQuestions}
                                cardClick={cardClick(i)}
                                imageName={record.imageName}
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