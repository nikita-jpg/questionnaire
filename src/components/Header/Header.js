import { Div, PanelHeader, PanelHeaderBack, PanelHeaderClose, PanelHeaderContent, Platform, usePlatform  } from '@vkontakte/vkui';
import React from 'react';
import Marquee from 'react-double-marquee';
// import { isTitleCentre } from '../../help';
import './Header.css'

const WIDTH_HEAD_TEXT_CENTERED = 380;
const RIGHT_STUB_WIDTH = 95;
// const ANDROID_MARGIN_LEFT = "16px";
// const IOS_MARGIN_LEFT = "12px";
const PLATFORM_MARGIN_LEFT = usePlatform !== Platform.IOS ? 16 : 12


const getTextWidth = (text) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
  
    context.font = '20px Lato';
  
    return context.measureText(text).width + 25;
  }
  
const getTitle = (text, icon, curWidth, hasLeftBtn) => {
    console.log(hasLeftBtn)

    const LEFT_BTN_WIDTH = hasLeftBtn ? 42 : PLATFORM_MARGIN_LEFT;

    let textWidth = getTextWidth(text);
    let marginLeft = 0
    // console.log(curWidth)

    //Если можем зацентрить текст
    if( (curWidth - textWidth)/2 > RIGHT_STUB_WIDTH )
    {
        // console.log("1")
        marginLeft = hasLeftBtn ? (RIGHT_STUB_WIDTH - LEFT_BTN_WIDTH) : RIGHT_STUB_WIDTH;
        marginLeft+="px"

        return(
            <div className="Header__title" style={{marginLeft:marginLeft}}>
                {text}
                {icon}
            </div>
        )
        
    }else{
        // console.log("2")
        marginLeft = hasLeftBtn ? 0 : PLATFORM_MARGIN_LEFT;
        let maxWidth = curWidth - RIGHT_STUB_WIDTH - LEFT_BTN_WIDTH - 8;

        //Если текст влезает
        if(textWidth > maxWidth)
        {
            return(
                <div className="Header__title" style={{marginLeft:marginLeft, maxWidth:maxWidth}}>
                    <Marquee childMargin="20" speed="0.08" direction="left">
                        {text}
                        {icon}
                    </Marquee>
                </div>
            ) 
        }else{
            // console.log(hasLeftBtn)
            return(
                <div className="Header__title" style={{marginLeft:marginLeft, maxWidth:maxWidth, textAlign:"start"}}>
                    {text}
                    {icon}
                </div>
            ) 
        }
    }
}


const Header = ({curWidth, onBack, onClose, isFixed, text, icon, click}) => {
    console.log(usePlatform())

    let left;
    let cursor = "inherit";
    let fixed = "true";

    if (onClose !== undefined) {
        left = <PanelHeaderClose  onClick={onClose} className="Header__button-back" ></PanelHeaderClose>
    }
    else if (onBack !== undefined){
        left = <PanelHeaderBack onClick={onBack} className="Header__button-back" ></PanelHeaderBack>
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

            <div className="Header__inside" style={{cursor:cursor}} onClick={click}>
                {left && <div className="Header__leftBtn">{left}</div>}
                {getTitle(text,icon,curWidth, left)}
                <div className="Header__rightStub"></div>
            </div>

        </PanelHeader>
    )
}

export default Header