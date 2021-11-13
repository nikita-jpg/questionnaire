import { Button } from '@vkontakte/vkui';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonWrapper from '../../ButtonWrapper/ButtonWrapper';
import AlertWrapper from '../../Alert/AlertWrapper/AlertWrapper'
import * as alert from '../../Alert/actions'
import './CardWrapperDescription.css'

const CardWrapperDescription = ({text, textBtn,imgSource, btnCardClickObj={}}) => {

    const dispath = useDispatch();
    const closeAlert = () => dispath(alert.Alert_closeAlert())
    const imgSourceAlert = 
    <AlertWrapper
        header="Ссылка на источник фото"
        description={<a className="My_link" href={imgSource} target="_blank">{imgSource}</a>}
        rightText={"Закрыть"}
        rightFunc={()=>closeAlert()}
        onClose={()=>closeAlert()}
    ></AlertWrapper>
    const openAlert = () => dispath(alert.Alert_setAlert(imgSourceAlert))
    

    const click = (e) => {
        e.stopPropagation()
        btnCardClickObj.func();
    }

    const sourceImgClick = (e) => {
        e.stopPropagation()
        openAlert()        
    }
    
    return(
        <div className="CardWrapperDescription">

            <div className="CardWrapperDescription__text">{text}</div>

            {/* <a href="https://translate.yandex.ru"> Источник ссылка</a> */}

            <div className="My_link CardWrapperDescription__text CardWrapperDescription__imageSource" onClick={sourceImgClick}>Источник изображения</div>

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
