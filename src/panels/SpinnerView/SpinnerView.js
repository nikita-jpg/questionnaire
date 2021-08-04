import { View, Panel, Spinner, ScreenSpinner } from '@vkontakte/vkui'
import React, { useState } from 'react'
import './SpinnerView.css'
import spinner from './test.svg'
import i from './i.svg'

const SpinnerView = ({id}) => {

    // const [isOpen, setIsOpen] = useState(false)

    // const open = () => {
    //     setIsOpen(!isOpen)
    // }

    // const style = {
    //     height: isOpen ? "90px" : "0"
    // }

    return(
        <View id={id}>
            <Panel>
                <div className="SpinnerView">
                    <svg className="SpinnerView__spinnerBox_spinner">
                        <polyline className="stroke-still" points="0,0 90,0 90,90" stroke-width="10" fill="none"></polyline>
                        <polyline className="stroke-still" points="0,0 0,90 90,90" stroke-width="10" fill="none"></polyline>
                        {/* <svg className="stroke-text text-animation" x="30" y="68"></svg> */}
                            <svg x="28.5" y="26.5" width="33" height="37" viewBox="0 0 33 37" xmlns="http://www.w3.org/2000/svg">
                                <path className="stroke-text text-animation" stroke-width="1.5" d="M5.02966 7.09C5.02966 5.254 4.77766 3.904 4.27366 3.04C3.76966 2.14 2.76166 1.69 1.24966 1.69H0.169664V0.609999H5.02966C6.36166 0.609999 7.35166 0.789998 7.99966 1.15C8.68366 1.474 9.16966 2.086 9.45766 2.986C9.74566 3.886 9.88966 5.254 9.88966 7.09V31.39L27.1697 0.609999H32.0297V36.25H27.1697V5.47L9.88966 36.25H5.02966V7.09Z"/>
                            </svg>
                        {/* <text className="stroke-text text-animation" x="30" y="68" font-size="50" fontFamily="Pacifico, cursive">И</text> */}
                        <polyline class="line-cornered stroke-animation" points="0,0 90,0 90,90" stroke-width="10" fill="none"></polyline>
                        <polyline class="line-cornered stroke-animation" points="0,0 0,90 90,90" stroke-width="10" fill="none"></polyline>
                    </svg>
                        {/* <div className="SpinnerView__spinnerBox">
                            <img src={spinner} className="SpinnerView__spinnerBox_spinner"></img>
                        </div>
                        <ScreenSpinner></ScreenSpinner> */}
                </div>
            </Panel>
        </View>
    )
}

export default SpinnerView