import { Button, ContentCard } from "@vkontakte/vkui"
import React, { useEffect, useState } from 'react';
import './CardWrapper.css';
import defaultImage from '../DefaultImage/DefaultImage'
import {DEFAULT_URL, DEFAULT_URL_DOWNLOAD_IMG, downloadImageFromServer as downloadImage, downloadImageFromServer, downloadImageFromServerTset} from '../../NotUI/Server/server'
import CardWrapperDescription from "./CardWrapperDescription/CardWrapperDescription";
import { useSelector } from "react-redux";
import { getImageByName } from "../../Selectors/data_selectors";

const CardWrapper = ({title, 
    textBtn, 
    percentProgress,
    numberOfQuestions,
    imageName,
    imgSource,
    description,
    btnCardClickObj,
    cardClick=()=>{},
    }) => {

    
    const stateImage = useSelector(getImageByName(imageName))
    const [image, setImage] = useState(stateImage !== undefined ? stateImage : defaultImage)

    useEffect(()=>{
        if(stateImage !== undefined){
            setImage(stateImage)
        }
    },[stateImage])

    // useEffect(()=>{
    //     if(stateImage === undefined){
    //         downloadImageFromServer(imageName)
    //         .then(res=>setImage(
    //             {
    //                 imageName:imageName,
    //                 data:res
    //             }
    //         ))
    //     }
    // },[])


    // const down = () =>{
    //     return(
    //     <div style={{width:"200px",height:"200px"}}>
    //         {description}
    //         <Button></Button>
    //     </div>
    // )}

    const cardText = (
        <CardWrapperDescription
            btnCardClickObj={btnCardClickObj}
            text={description}
            textBtn={textBtn}
            imgSource={imgSource}
            // imgSource={image.sourceImageLink !== undefined ? image.sourceImageLink : ""}
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
        image={image.data}
        text={cardText}
        className="CardWrapper__Card"
    >
        </ContentCard>
)}

export default CardWrapper