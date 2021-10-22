import React from "react";
import { ANDROID, IOS, ModalPageHeader, useAdaptivity, usePlatform, PanelHeaderButton, PanelHeaderClose, ViewWidth } from "@vkontakte/vkui";
import './ModalPageHead.css'
import { isTitleCentre } from "../../help";
import { Icon24Dismiss } from "@vkontakte/icons";
import { useSelector } from "react-redux";
import { getCurWidth } from "../../Additional/selectors";


const ModalPageHead = ({text, onClose = () => {}}) => {

    let textAlign = isTitleCentre(useSelector(getCurWidth)).text;
    const { viewWidth } = useAdaptivity();
    const isDesktop = !(viewWidth >= ViewWidth.SMALL_TABLET);    
    return(
        <ModalPageHeader
            // separator={false}
            // visor={true}
            // transparent={true}
            right={isDesktop && <Icon24Dismiss className="ModalPageHead__button-close" onClick={onClose}/>}
            left={isDesktop && <PanelHeaderClose className="ModalPageHead__button-pug"/>}
        >
         <div className="ModalPageHead__inside" style={{textAlign}}>
            {text}
        </div>
        </ModalPageHeader>
    )
}

export default ModalPageHead