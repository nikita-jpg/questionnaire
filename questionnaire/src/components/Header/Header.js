import { PanelHeader, PanelHeaderBack, PanelHeaderClose, PanelHeaderContent  } from '@vkontakte/vkui';
import React from 'react';
import { isTitleCentre } from '../../help';
import './Header.css'

const Header = ({curWidth, leftBtnFunc, isClose, text, icon, click}) => {
    
    let left 
    let justifyContent = isTitleCentre(curWidth).text;
    let cursor = "inherit";

    if (isClose) {
        left = isTitleCentre(<PanelHeaderClose  onClick={leftBtnFunc} className="Header__button-back" ></PanelHeaderClose>).stub 
    }
    else if (leftBtnFunc !== undefined ){
        left = isTitleCentre(<PanelHeaderBack onClick={leftBtnFunc} className="Header__button-back" ></PanelHeaderBack>).stub
    }
    else{
        left = isTitleCentre(curWidth).stub
    }

    if(click !== undefined){
        cursor="pointer"
    }

    return(
        <PanelHeader                     
            separator={false}
            visor={true}
            transparent={true}
            fixed={false}
            left={ left }
            >

            <div className="Header__inside" style={{justifyContent, cursor:cursor}} onClick={click}>
                {text}
                {icon}
            </div>

        </PanelHeader>
    )
}

export default Header