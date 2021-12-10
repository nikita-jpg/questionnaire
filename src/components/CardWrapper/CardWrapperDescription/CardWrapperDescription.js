import React from 'react';
import { useDispatch } from 'react-redux';
import * as alert from '../../Alert/actions';
import AlertWrapper from '../../Alert/AlertWrapper/AlertWrapper';
import ButtonWrapper from '../../ButtonWrapper/ButtonWrapper';
import './CardWrapperDescription.css';

const CardWrapperDescription = ({text, textBtn,imgSource, btnCardClickObj={}}) => {

    const dispath = useDispatch();
    const closeAlert = () => dispath(alert.Alert_closeAlert())
    const imgSourceAlert = 
    <AlertWrapper
        header="Ссылка на источник фото"
        description={<a className="My_link" href={imgSource} target="_blank">{imgSource}</a>}
        rightText={"Закрыть"}
        style={{wordWrap:"break-word"}}
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
