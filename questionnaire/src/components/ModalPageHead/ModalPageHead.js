import React from "react";
import { ANDROID, IOS, ModalPageHeader, useAdaptivity, usePlatform, PanelHeaderButton, PanelHeaderClose, ViewWidth } from "@vkontakte/vkui";
import './ModalPageHead.css'
import { isTitleCentre } from "../../help";


const ModalPageHead = ({text, curWidth, onClose = () => {}}) => {

    let textAlign = isTitleCentre(curWidth).text;
    
    return(
        <ModalPageHeader
            separator={false}
            visor={true}
            transparent={true}
            left={<PanelHeaderClose className="ModalPageHead__button-close" onClick={onClose}/>}
            right={<PanelHeaderClose className="ModalPageHead__button-pug"/>}
        >
         <div className="ModalPageHead__inside" style={{textAlign}}>
            {text}
        </div>
        </ModalPageHeader>
    )
}

export default ModalPageHead