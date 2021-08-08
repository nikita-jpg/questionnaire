import { CardGrid, ContentCard, Div, Spinner } from '@vkontakte/vkui';
import React, { useEffect, useState } from 'react';
import './ListCard.css'
import { getColNumber, getwidthInfo } from '../../help';

const ListCard = ( { info, cardClick = (index) => null } ) => {

    const [curWidth, setCurWidth] = useState(0);
    
    useEffect(() => {
		
		//Обновляем текущую ширину
		setCurWidth(document.getElementById('ListCard__containerId').scrollWidth)
	}, []);

    const getWidthInfo = () => {
        console.log(curWidth)
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
            <div className="ListCard" id="ListCard__containerId">
                <CardGrid size={"m"}>
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
    )
}

export default ListCard