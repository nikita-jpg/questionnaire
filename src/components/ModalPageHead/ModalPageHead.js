import React from "react";
import { ModalPageHeader, useAdaptivity, ViewWidth } from "@vkontakte/vkui";
import './ModalPageHead.css'
import { isTitleCentre } from "../../help";
import { Icon24Dismiss } from "@vkontakte/icons";
import { useSelector } from "react-redux";
import { getCurWidth } from "../../Additional/selectors";


const ModalPageHead = ({text, onClose = () => {}}) => {

    let textAlign = isTitleCentre(useSelector(getCurWidth)).text;
    const { viewWidth } = useAdaptivity();
    const isNotDesktop = !(viewWidth >= ViewWidth.SMALL_TABLET);    
    return(
        <ModalPageHeader
            right={isNotDesktop && <Icon24Dismiss className="ModalPageHead__button-close" onClick={onClose}/>}
        >
         <div className="ModalPageHead__inside" style={{textAlign}}>
            {text}
        </div>
        </ModalPageHeader>
    )
}

export default ModalPageHead