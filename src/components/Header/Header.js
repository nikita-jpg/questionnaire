import { Icon28CancelOutline } from '@vkontakte/icons';
import { Div, PanelHeader, PanelHeaderBack, PanelHeaderClose, PanelHeaderContent, platform, Platform, usePlatform  } from '@vkontakte/vkui';
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
  
const getTitle = (text, icon, curWidth, hasLeftBtn, click) => {
    console.log(icon)

    const LEFT_BTN_WIDTH = hasLeftBtn ? 42 : PLATFORM_MARGIN_LEFT;

    let textWidth = getTextWidth(text);
    let marginLeft = 0
    // console.log(curWidth)

    //Если можем зацентрить текст
    if( (curWidth - textWidth)/2 > RIGHT_STUB_WIDTH )
    {
        marginLeft = hasLeftBtn ? (RIGHT_STUB_WIDTH - LEFT_BTN_WIDTH) : RIGHT_STUB_WIDTH;
        marginLeft+="px"

        return(
            <div onClick={click} style={{width:"100%", maxWidth:"100%", paddingLeft:marginLeft}}>
                <div className="Header__title">
                    {text}
                    {icon}
                </div>
            </div>
        )
        
    }else{
        marginLeft = hasLeftBtn ? 0 : PLATFORM_MARGIN_LEFT;
        let maxWidth = curWidth - RIGHT_STUB_WIDTH - LEFT_BTN_WIDTH - 8;

        //Если текст не влезает
        if(textWidth > maxWidth)
        {
            return(
                <div onClick={click} style={{width:"100%", paddingLeft:marginLeft}}>
                    <div className="Header__title" style={{maxWidth:maxWidth}}>
                        <Marquee childMargin="20" speed="0.08" direction="left" delay="600">
                            {text}
                            {icon}
                        </Marquee>
                    </div>
                </div>
            ) 
        }else{
            return(
                <div onClick={click} style={{maxWidth:"100%", paddingLeft:marginLeft}}>
                    <div className="Header__title" style={{maxWidth:maxWidth, textAlign:"start"}}>
                        {text}
                        {icon}
                    </div>
                </div>
            ) 
        }
    }
}


const Header = ({curWidth, onBack, onClose, isFixed, text, icon, click}) => {
    console.log(icon)

    let left;
    let cursor = "inherit";
    let fixed = "true";
    let leftClick;

    if (onClose) {
        left = <PanelHeaderClose className="Header__button" >
            <Icon28CancelOutline></Icon28CancelOutline>
        </PanelHeaderClose>
        leftClick = onClose
    }
    else if (onBack){
        left = <PanelHeaderBack onClick={onBack} className="Header__button" ></PanelHeaderBack>
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

            <div className="Header__inside" style={{cursor:cursor}}>
                {left && <div className="Header__leftBtn" onClick={leftClick}>{left}</div>}
                {getTitle(text,icon,curWidth, left, click)}
                <div className="Header__rightStub" onClick={click}></div>
            </div>

        </PanelHeader>
    )
}

export default Header