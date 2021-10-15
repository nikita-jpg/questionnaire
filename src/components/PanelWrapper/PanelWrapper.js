import { Div, Panel } from "@vkontakte/vkui";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCurHeight, getCurWidth } from "../../Additional/selectors";
import Header from "../Header/Header";

import './PanelWrapper.css'

const PanelWrapper = ({id, name, children, isOneColumn, isVerticalCentre,
    isHeaderHide, isHeaderFixed, onHeaderClose, onHeaderBack, 
    headerIcon, headerText, headerClick}) => {

    const curWidth = useSelector(getCurWidth)
    const curHeight = useSelector(getCurHeight)

    return(

        <Panel id={id} separator={false} name={name}>

            <div className="PanelWrapper" style={{minHeight:curHeight,minWidth:curWidth, 
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