import { CellButton } from "@vkontakte/vkui"
import React from "react"

import './ButtonWrapper.css'

const ButtonWrapper = ({isActived, text, onClick, before, className, classNameText}) => {
    return(
        <CellButton 
            activeEffectDelay={10}
            onClick={onClick} 
            mode="secondary" 
            before={before}
            className={`ButtonWrapper ${isActived && "ButtonWrapper_active"} ${className}`}
        >
            <div className={`ButtonWrapper__text ${classNameText}`}>
                {text}
            </div>
        </CellButton>
    )
}

export default ButtonWrapper