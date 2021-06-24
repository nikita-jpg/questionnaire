import { PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';
import React from 'react';
import { isTitleCentre } from '../../help';
import './Header.css'

const Header = ({curWidth, title, hasBatton, onBack }) => {
    return(
        <PanelHeader                     
            separator={false}
            visor={true}
            transparent={true}
            fixed={false}
            // Центрируем надпись
            left={ hasBatton == true ?<PanelHeaderBack onClick={onBack} className="Header__button-back"></PanelHeaderBack> : isTitleCentre(curWidth).stub }
            right={ isTitleCentre(curWidth).stub }
            style={ isTitleCentre(curWidth).text }
            >
            {title}
        </PanelHeader>
    )
}

export default Header