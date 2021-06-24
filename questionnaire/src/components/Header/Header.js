import { PanelHeader, PanelHeaderBack, PanelHeaderClose  } from '@vkontakte/vkui';
import React from 'react';
import { isTitleCentre } from '../../help';
import './Header.css'

const Header = ({curWidth, title, leftBtnFunc, isClose }) => {
    
    let left 

    if (isClose) {
        left = isTitleCentre(curWidth,<PanelHeaderClose  onClick={leftBtnFunc} className="Header__button-back" ></PanelHeaderClose>).stub 
    }
    else if (leftBtnFunc !== undefined ){
        left = isTitleCentre(curWidth,<PanelHeaderBack onClick={leftBtnFunc} className="Header__button-back" ></PanelHeaderBack>).stub
    }
    else{
        left = isTitleCentre(curWidth).stub
    }

    return(
        <PanelHeader                     
            separator={false}
            visor={true}
            transparent={true}
            fixed={false}
            // Центрируем надпись
            left={ left }
            right={ isTitleCentre(curWidth).stub }
            style={ isTitleCentre(curWidth).text }
            >
            {title}
        </PanelHeader>
    )
}

export default Header