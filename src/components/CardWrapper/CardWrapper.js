import { Button, ContentCard } from "@vkontakte/vkui"
import React, { useState } from 'react';
import './CardWrapper.css';
import defaultImage from '../../svg/imgLoader.svg'
import {downloadImageFromServer as downloadImage} from '../../NotUI/Server/server'
import CardWrapperDescription from "./CardWrapperDescription/CardWrapperDescription";

const CardWrapper = ({title, textBtn, percentProgress,numberOfQuestions,imageName,description,btnCardClickObj,
    cardClick=()=>{},
    }) => {


    //Устанавливаем дефолтую картинку на карточки
    const [image, setImage] = useState(defaultImage)

    //Загружаем основную картинку
    downloadImage(imageName).then(imageData=>{setImage(imageData)})

    const down = () =>{
        return(
        <div style={{width:"200px",height:"200px"}}>
            {description}
            <Button></Button>
        </div>
    )}

    const caption = (
        <CardWrapperDescription
            btnCardClickObj={btnCardClickObj}
            text={description}
            textBtn={textBtn}
        ></CardWrapperDescription>
    )

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
        caption={caption}
        className="CardWrapper__Card"
    >
        </ContentCard>
)}

export default CardWrapper