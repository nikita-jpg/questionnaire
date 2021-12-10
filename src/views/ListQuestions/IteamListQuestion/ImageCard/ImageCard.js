import { Div } from '@vkontakte/vkui';
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import "./ImageCard.css";

const ImageCard = ({image, sourceImageLink}) => {

    //Управление состояниями карточки (картинка/источник)
    const [isImgInfoOpen, setisImgInfoOpen] = useState(false)
    const onLinkClick = (e) => e.stopPropagation();    

    return(
        <div className="Image__container" onClick={() => {setisImgInfoOpen(!isImgInfoOpen)}}>

        <img
            className="Image__image" 
            src={image}
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