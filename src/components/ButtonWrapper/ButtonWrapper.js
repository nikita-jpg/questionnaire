import { CellButton } from "@vkontakte/vkui"
import React from "react"

import './ButtonWrapper.css'  

const ButtonWrapper = ({isActived, text, onClick, before, className, classNameText, isCentered, hasActive, style}) => {

    return(
        <CellButton 
            activeEffectDelay={0}
            onClick={onClick} 
            mode="secondary"
            centered={isCentered} 
            before={before}
            hasActive={hasActive}
            className={`ButtonWrapper ${isActived && "ButtonWrapper_active"} ${className}`}
            style={style}
            
        >
            <div className={`ButtonWrapper__text ${classNameText}`}>
                {text}
            </div>
        </CellButton>
    )
}

export default ButtonWrapper