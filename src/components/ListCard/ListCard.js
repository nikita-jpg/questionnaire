import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getCurWidth } from '../../Additional/selectors';
import { getPlatform } from '../../Selectors/data_selectors';
import CardWrapper from '../CardWrapper/CardWrapper';
import './ListCard.css';

const ListCard = ( {info,
    cardClick = (index) => null, 
    btnCardClick = (index) => null,
    }) => {
        

    const curWidth = useSelector(getCurWidth)
    const platform = useSelector(getPlatform)

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

    useEffect(()=>{

        if((platform.indexOf("desktop") !== -1)){
            let descriptions = document.getElementsByClassName("ListCard")[document.getElementsByClassName("ListCard").length-1].getElementsByClassName("CardWrapperDescription__textForResizing")

            for(let i=0;i<descriptions.length-1;i=i+2){
    
                let fistHeight = descriptions[i].clientHeight
                let secondHeight = descriptions[i+1].clientHeight
    
                if(fistHeight>secondHeight){
                    descriptions[i+1].style.height = fistHeight + 'px';
                }else{
                    descriptions[i].style.height = secondHeight + 'px';
                }
            }
        }

    },[])


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
                            imgSource={record.imgSource}
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