import { PanelHeader, PanelHeaderBack, PanelHeaderClose, PanelHeaderContent  } from '@vkontakte/vkui';
import React from 'react';
import { isTitleCentre } from '../../help';
import './Header.css'

const Header = ({curWidth, leftBtnFunc, isClose, text, icon, click}) => {
    
    let left 
    let justifyContent = "start";
    let cursor = "inherit";

    if (isClose) {
        left = isTitleCentre(curWidth,<PanelHeaderClose  onClick={leftBtnFunc} className="Header__button-back" ></PanelHeaderClose>).stub 
    }
    else if (leftBtnFunc !== undefined ){
        left = isTitleCentre(curWidth,<PanelHeaderBack onClick={leftBtnFunc} className="Header__button-back" ></PanelHeaderBack>).stub
    }
    else{
        left = isTitleCentre(curWidth).stub
    }

    if(curWidth >= 370){
        justifyContent="center"
    }

    if(click !== undefined){
        cursor="pointer"
    }

    console.log(justifyContent)

    return(
        <PanelHeader                     
            separator={false}
            visor={true}
            transparent={true}
            fixed={false}
            left={ left }
            >

            <div className="Header__inside" style={{justifyContent:justifyContent, cursor:cursor}} onClick={click}>
                {text}
                {icon}
            </div>

        </PanelHeader>
    )
}

export default Header