import { ContentCard, Div } from '@vkontakte/vkui';
import React from 'react';
import { useSelector } from 'react-redux';
import { getCurWidth } from '../../Additional/selectors';
import CardWrapper from '../CardWrapper/CardWrapper';
import './ListCard.css';

const ListCard = ( { info,percentProgress,numberOfQuestions, 
    cardClick = (index) => null, 
    btnCardClick = (index) => null,
    }) => {
        

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

    
    return (
            <div className="ListCard" style={{maxWidth:getWidthInfo().maxWidth}}>
                {
                    info.map((record,i) => {
                        return <div key={record.russianName}>
                            <CardWrapper
                                title={record.russianName}
                                percentProgress={record.percentProgress}
                                numberOfQuestions={record.numberOfQuestions}
                                
                                cardClick={cardClick(i)}
                                btnCardClickObj={{ isBtnNeed:record.isBtnNeed, func: btnCardClick(i)}}

                                imageName={record.imageName}
                                description={record.description}
                                textBtn={"Посмотреть результаты"}
                            >
                            </CardWrapper>
                        </div>
                    })
                }
            </div>
    )
}

export default ListCard