import { ContentCard } from "@vkontakte/vkui"
import React, { useState } from 'react';
import './CardWrapper.css';
import defaultImage from '../../img/defaultImage.jpg'

const CardWrapper = ({title,percentProgress,numberOfQuestions,imageName,description,cardClick=()=>{}, downloadImage=()=>{}}) => {

    //Устанавливаем дефолтую картинку на карточки
    const [image, setImage] = useState(defaultImage)

    //Загружаем основную картинку
    downloadImage(imageName).then(imageData=>{setImage(`data:image/jpeg;base64,${imageData}`)})

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
            image={image}
            caption={description}
            className="CardWrapper__Card"
    />
)}

export default CardWrapper