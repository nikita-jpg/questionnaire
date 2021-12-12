import { Icon28CancelOutline } from '@vkontakte/icons';
import { PanelHeader, PanelHeaderBack, PanelHeaderClose, Platform, usePlatform } from '@vkontakte/vkui';
import React from 'react';
import { useSelector } from 'react-redux';
import { getPlatform } from '../../Selectors/data_selectors';
import './Header.css';

const RIGHT_STUB_WIDTH = 95;
const PLATFORM_MARGIN_LEFT = usePlatform !== Platform.IOS ? 16 : 12

  
const getTitle = (text, icon, curWidth, hasLeftBtn, click, isAlignmentCenter, cursor) => {

    const LEFT_BTN_WIDTH = hasLeftBtn ? 42 : PLATFORM_MARGIN_LEFT;

    let marginLeft = 0
    

    //Если можем зацентрить текст
    if( isAlignmentCenter )
    {
        marginLeft = hasLeftBtn ? (RIGHT_STUB_WIDTH - LEFT_BTN_WIDTH) : RIGHT_STUB_WIDTH;
        marginLeft+="px"

        return(
            <div onClick={click} style={{width:"100%", maxWidth:"100%", paddingLeft:marginLeft, cursor:cursor}}>
                <div className="Header__title">
                    <div className="Header__title__text">
                        {text}
                    </div>
                    {icon}
                </div>
            </div>
        )
        
    }else{
        marginLeft = hasLeftBtn ? 8 : PLATFORM_MARGIN_LEFT;
        let maxWidth = curWidth - RIGHT_STUB_WIDTH - LEFT_BTN_WIDTH - 16;
        return(
            <div onClick={click} style={{maxWidth:"100%", paddingLeft:marginLeft, paddingTop:"5px", cursor:cursor}}>
                <div className="Header__title" style={{maxWidth:maxWidth, textAlign:"start"}}>
                    <div className="Header__title__text" style={{maxWidth:maxWidth}}>
                        {text}
                    </div>
                    {icon}
                </div>
            </div>
        )
    }
}

const getLeftAndRight = (left, click, leftClick, text, icon, curWidth, isAlignmentCenter, cursor) =>{
    let arr = [];
    if(!isAlignmentCenter){
        arr.push(
            <div style={{display:"flex", alignItems:"center", justifyContent:"start"}}>
                {left && <div className="Header__leftBtn" onClick={leftClick} style={{cursor:cursor}}>{left}</div>}
                {getTitle(text,icon,curWidth, left, click, isAlignmentCenter, cursor)}
            </div>
        )
    }else{
        arr.push(
            left && <div className="Header__leftBtn" onClick={leftClick} style={{cursor:cursor}}>{left}</div>
        )
        arr.push(
            getTitle(text,icon,curWidth, left, click, isAlignmentCenter, cursor)
        )
    }

    return arr
}

const Header = ({onBack, curWidth, onClose, isFixed, text, icon, click}) => {

    let left;
    let cursor = "inherit";
    let fixed = "true";
    let leftClick;

    const platform = useSelector(getPlatform)
    const isAlignmentCenter = (platform.indexOf("android") !== -1) || (platform.indexOf("mobile") !== -1) ? false : true 
    console.log(platform)

    if (onClose) {
        left = <PanelHeaderClose className="Header__button" >
            <Icon28CancelOutline></Icon28CancelOutline>
        </PanelHeaderClose>
        leftClick = onClose
    }
    else if (onBack){
        left = <PanelHeaderBack className="Header__button" ></PanelHeaderBack>
        leftClick = onBack
    }

    if(click){
        cursor="pointer"
    }

    if(!isFixed){
        fixed = false;
    }

    return(
        <PanelHeader                     
            separator={false}
            visor={true}
            fixed={fixed}
            >

            <div className="Header__inside">
                {
                    getLeftAndRight(left, click, leftClick, text, icon, curWidth, isAlignmentCenter, cursor).map((obj)=>obj)
                }
                <div className="Header__rightStub" onClick={click}></div>
            </div>

        </PanelHeader>
    )
}

export default Header