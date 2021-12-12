import React, { useEffect, useRef, useState } from 'react';
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

    const ref = useRef(null)
    useEffect(()=>{

        if(getComputedStyle(ref.current).gridTemplateColumns.indexOf(" ") !== -1){

            let cards = ref.current.getElementsByClassName("CardWrapper__Card")        

            for(let i=0;i<cards.length-1;i=i+2){

                // Делаем заголовки одной высоты
                let firstTitle = cards[i].getElementsByClassName("CardWrapperTitle__textForResizing")[0]
                let secondTitle = cards[i+1].getElementsByClassName("CardWrapperTitle__textForResizing")[0]
    
                let fistTitleHeight = firstTitle.clientHeight
                let secondTitleHeight = secondTitle.clientHeight
                
    
                if(fistTitleHeight > secondTitleHeight){
                    secondTitle.style.height = fistTitleHeight + 'px';
                }
                else if(secondTitleHeight > fistTitleHeight){
                    firstTitle.style.height = secondTitleHeight + 'px';
                }

                // Делаем описание одной высоты
                let firstDesc = cards[i].getElementsByClassName("CardWrapperDescription__textForResizing")[0]
                let secondDesc = cards[i+1].getElementsByClassName("CardWrapperDescription__textForResizing")[0]
    
                let fistDescHeight = firstDesc.clientHeight
                let secondDescHeight = secondDesc.clientHeight
    
                if(fistDescHeight>secondDescHeight){
                    secondDesc.style.height = fistDescHeight + 'px';
                }else{
                    firstDesc.style.height = secondDescHeight + 'px';
                }

                // Делаем карточки с кнопкой и без одной высоты
                let isFirstHasBtn = cards[i].getElementsByClassName("CardWrapperDescription__button_Container").length>0 ? true : false
                let isSecondHasBtn = cards[i + 1].getElementsByClassName("CardWrapperDescription__button_Container").length>0 ? true : false

                if(isFirstHasBtn && !isSecondHasBtn){
                    cards[i+1].getElementsByClassName("vkuiContentCard__tappable")[0].style.height = cards[i].clientHeight + 'px';
                }
                if(isSecondHasBtn && !isFirstHasBtn){
                    cards[i].getElementsByClassName("vkuiContentCard__tappable")[0].style.height = cards[i+1].clientHeight + 'px';
                }

            }

        }

    },[])


    return (
        <div className="ListCard" ref={ref}>
            {
                info.map((record,i) => {
                    return <div key={record.russianName} style={{display:"flex", justifyContent:"center"}}>
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