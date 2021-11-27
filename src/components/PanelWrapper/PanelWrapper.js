import { Div, Panel } from "@vkontakte/vkui";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCurHeight, getCurWidth } from "../../Additional/selectors";
import Header from "../Header/Header";

import './PanelWrapper.css'

// Обёртка для панели. 
// Задаёт отступ и даёт доп возможности
const PanelWrapper = ({id, name, children, isOneColumn, isVerticalCentre,
    isHeaderHide, isHeaderFixed, onHeaderClose, onHeaderBack, 
    headerIcon, headerText, headerClick, isMustHasMaxHeight=false}) => {

    const [curWidth,setCurWidth] = useState(0);
    useEffect(()=>{
        setCurWidth(document.getElementById('root').scrollWidth)
    },[document.getElementById('root').scrollWidth, document.getElementById('root').scrollHeight])


    return(

        <Panel id={id} separator={false} name={name}>

            <div className="PanelWrapper" 
                style={{
                    height:isMustHasMaxHeight?"100%":"fit-content",
                    justifyContent:isVerticalCentre?"center":"start"}}>
                {
                    !isHeaderHide &&
                    <Header
                    text={headerText}
                    icon={headerIcon}
                    isFixed={isHeaderFixed}
                    onClose={onHeaderClose}
                    onBack={onHeaderBack}
                    click={headerClick}
                    curWidth={curWidth}
                ></Header>
                }

                <Div className="PanelWrapper__container"style={{maxWidth:isOneColumn?"var(--main-max-oneСolumnPanelWrapperMode-width)":"var(--main-max-panelWrapper-width)"}}>
                    {children}
                </Div>

            </div>

        </Panel>
    )
}

export default PanelWrapper