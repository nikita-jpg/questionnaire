import { View, Panel, Alert } from "@vkontakte/vkui"
import React, { useState } from "react"
import AlertWrapper from "../../components/AlertWrapper/AlertWrapper"
import TestElement from "./TestElement"
import './TestView.css'


const TestView = ({}) => {

    const [alert,setAlert] = useState(null)

    const openAlert = () => {
        setAlert(
            <AlertWrapper
                onClose={() => {setAlert(null)}}
            >
                <div style={{width:"100px",height:"100px",backgroundColor:"black"}}></div>
            </AlertWrapper>
        )
    }


    return(
        <View
            activePanel={"PANEL_ID"}
            popout={alert}
        >
            <Panel
                id={"PANEL_ID"}
            >
                <button onClick={openAlert}></button>
            </Panel>
        </View>
    )
}

export default TestView;