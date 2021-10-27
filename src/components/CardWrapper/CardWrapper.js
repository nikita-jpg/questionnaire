import { Button, ContentCard } from "@vkontakte/vkui"
import React, { useEffect, useState } from 'react';
import './CardWrapper.css';
import defaultImage from '../../svg/imgLoader.svg'
import {DEFAULT_URL, DEFAULT_URL_DOWNLOAD_IMG, downloadImageFromServer as downloadImage, downloadImageFromServerTset} from '../../NotUI/Server/server'
import CardWrapperDescription from "./CardWrapperDescription/CardWrapperDescription";

const CardWrapper = ({title, textBtn, percentProgress,numberOfQuestions,imageName,description,btnCardClickObj,
    cardClick=()=>{},
    }) => {


    //Устанавливаем дефолтую картинку на карточки
    const [image, setImage] = useState(DEFAULT_URL_DOWNLOAD_IMG + imageName)

    // const testImage  = <div style={{width:"100%", height:"100%"}}>
    //     <img
    //         src={defaultImage}
    //     >
    //     </img>
    // </div>

    // const download = async function downloadFunc() {
    //     let response = await fetch(DEFAULT_URL + "getImageTest");

    //     if (response.ok) { // если HTTP-статус в диапазоне 200-299
    //     console.log(response)
    //     setImage(response.data)
    //     } else {
    //     alert("Ошибка HTTP: " + response.status);
    //     }
    // }

    // useEffect(()=>{
    //     download()
    // },[])


    

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