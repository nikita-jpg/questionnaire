import React, { useEffect, useState } from 'react';
import "./ImageCard.css"
import defaultImage from '../../../../svg/imgLoader.svg'
import { downloadImageFromServer } from '../../../../NotUI/Server/server';
import { Div } from '@vkontakte/vkui';
import { CSSTransition } from 'react-transition-group';

const ImageCard = ({imageName, sourceImageLink}) => {

    //Управление состояниями карточки (картинка/источник)
    const [isImgInfoOpen, setisImgInfoOpen] = useState(false)
    const onLinkClick = (e) => e.stopPropagation();
    

    //Картинка
    //Устанавливаем дефолтую картинку на карточки
    const [image, setImage] = useState(defaultImage)
    //Загружаем основную картинку
    // useEffect(()=>{
    //     downloadImageFromServer(imageName).then(imageData=>{setImage(imageData)})
    // },[])


    return(
        <div className="Image__container" onClick={() => {setisImgInfoOpen(!isImgInfoOpen)}}>

        <img
            className="Image__image" 
            src={"https://b88f-212-16-10-199.ngrok.io/getImage?imageName=era_RF.jpeg"}
        />
        
        <CSSTransition 
            in={isImgInfoOpen} 
            timeout={200}   
            classNames="Image__info"
            onEnter={() => {setisImgInfoOpen(true)}}
            onExited={() => {setisImgInfoOpen(false)}}>
            <div className="Image__info">
                <Div className="Image__description">
                    Источник: <br/>
                    {
                        isImgInfoOpen
                        ?<a 
                            href={sourceImageLink} 
                            className="Image__link"
                            target="_blank"
                            onClick={onLinkClick}
                        >
                            Клик
                        </a>
                        :<span className="Image__link">
                            Клик 
                        </span>
                    }
                    
                </Div>
            </div>
        </CSSTransition>

    </div>
    )
}

export default ImageCard