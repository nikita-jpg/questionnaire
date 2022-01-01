import { ContentCard } from "@vkontakte/vkui";
import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { downloadImageFromServer } from '../../NotUI/Server/server';
import { getImageByName } from "../../Selectors/data_selectors";
import defaultImage from '../DefaultImage/DefaultImage';
import './CardWrapper.css';
import CardWrapperDescription from "./CardWrapperDescription/CardWrapperDescription";

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

    useEffect(()=>{
        if(stateImage === undefined && imageName !== "plug"){
            downloadImageFromServer(imageName)
            .then(res=>setImage(
                {
                    imageName:imageName,
                    data:res
                }
            ))
        }
    },[])


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
            <div className="CardWrapper__title CardWrapperTitle__textForResizing">
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