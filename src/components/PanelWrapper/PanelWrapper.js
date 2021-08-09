import { Div, Panel } from "@vkontakte/vkui";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";

import './PanelWrapper.css'

const PanelWrapper = ({id, children, isOneColumn, 
    isHeaderHide, isHeaderFixed, onHeaderClose, onHeaderBack, 
    headerIcon, headerText, headerClick}) => {

    const [curWidth, setCurWidth] = useState(0)

    useEffect(() => {
		
		//Обновляем текущую ширину
		setCurWidth(document.getElementById('root').scrollWidth)
	}, []);

    // const getMaxWidth = () => {
    //     if(curWidth>1280)
    //         return "1256px"
    //     else
    //         return curWidth + "px"
    // }
    return(

        <Panel id={id} separator={false}>

            <div className="PanelWrapper">
                {
                    !isHeaderHide &&
                    <Header
                    text={headerText}
                    icon={headerIcon}
                    curWidth={curWidth}
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