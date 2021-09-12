import { ContentCard } from "@vkontakte/vkui"
import React from 'react';
import './CardWrapper.css'

const CardWrapper = ({title,percentProgress,numberOfQuestions,imageSrc,description,cardClick=()=>{}}) => {
    return(
        <ContentCard
            header={
                <div className="CardWrapper__title">
                    <div>{title}</div>
                    <div>{percentProgress}/{numberOfQuestions}</div>
                </div>
            }
            mode={"tint"}
            onClick={cardClick}
            image={imageSrc}
            caption={description}
            className="CardWrapper__Card"
    />
)}

export default CardWrapper