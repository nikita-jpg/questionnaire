import { Div, Panel } from "@vkontakte/vkui";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";

import './PanelWrapper.css'

const PanelWrapper = ({id, children, 
    isHeaderFixed, onHeaderClose, onHeaderBack, 
    leftHeaderFunc, headerIcon, headerText, headerClick}) => {

    const [curWidth, setCurWidth] = useState(0)

    useEffect(() => {
		
		//Обновляем текущую ширину
		setCurWidth(document.getElementById('root').scrollWidth)
	}, []);

    const getMaxWidth = () => {
        if(curWidth>1280)
            return "1256px"
        else
            return curWidth + "px"
    }
    return(

        <Panel id={id}>

            <div className="PanelWrapper">

                <Header
                    text={headerText}
                    icon={headerIcon}
                    curWidth={curWidth}
                    isFixed={isHeaderFixed}
                    onClose={onHeaderClose}
                    onBack={onHeaderBack}
                    click={headerClick}
                    leftBtnFunc={leftHeaderFunc}
                ></Header>

                <Div className="PanelWrapper__container" style={{maxWidth:getMaxWidth()}}>
                    {children}
                </Div>
            </div>

        </Panel>
    )
}

export default PanelWrapper