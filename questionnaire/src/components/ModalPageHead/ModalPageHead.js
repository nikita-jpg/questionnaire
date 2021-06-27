import React from "react";
import { ANDROID, IOS, ModalPageHeader, useAdaptivity, usePlatform, PanelHeaderButton, PanelHeaderClose, ViewWidth } from "@vkontakte/vkui";
import './ModalPageHead.css'
import { isTitleCentre } from "../../help";


const ModalPageHead = ({text, curWidth, onClose = () => {}}) => {

    const { viewWidth } = useAdaptivity();
    const isMobile = true;

    let textAlign = isTitleCentre(curWidth).text;
    
    return(
        <ModalPageHeader
            separator={false}
            visor={true}
            transparent={true}
            left={isMobile && <PanelHeaderClose className="ModalPageHead__button-close" onClick={onClose}/>}
            right={isMobile && <div style={{width:"58px",height:"1px"}}></div>}
        >
         <div className="ModalPageHead__inside" style={{textAlign}}>
            {text}
        </div>
        </ModalPageHeader>
    )
}

export default ModalPageHead