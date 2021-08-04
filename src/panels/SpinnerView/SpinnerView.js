import { View, Panel, Spinner } from '@vkontakte/vkui'
import React, { useState } from 'react'
import './SpinnerView.css'

const SpinnerView = ({}) => {

    // const [isOpen, setIsOpen] = useState(false)

    // const open = () => {
    //     setIsOpen(!isOpen)
    // }

    // const style = {
    //     height: isOpen ? "100px" : "0"
    // }

    return(
        <View >
            <Panel>
                <Spinner></Spinner>
            </Panel>
            {/* <div className="title"></div>
            <div style={style} className="content"></div> */}
        </View>
    )
}

export default SpinnerView