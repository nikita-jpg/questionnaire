import { Button } from '@vkontakte/vkui';
import React from 'react';
import ButtonWrapper from '../../ButtonWrapper/ButtonWrapper';
import './CardWrapperDescription.css'

const CardWrapperDescription = ({text, textBtn, btnCardClickObj}) => {

    const click = (e) => {
        e.stopPropagation()
        btnCardClickObj.func();
    }
    
    return(
        <div className="CardWrapperDescription">

            <div className="CardWrapperDescription__text">{text}</div>

            {
            btnCardClickObj.isBtnNeed ?
                <div className="CardWrapperDescription__button_Container">
                    <ButtonWrapper
                        text={textBtn}
                        className="CardWrapperDescription__button"
                        classNameText="CardWrapperDescription__button_text"
                        isCentered={true}
                        onClick={click}
                    ></ButtonWrapper>
                </div>
                :null
            }
        </div>
    )
}

export default CardWrapperDescription
