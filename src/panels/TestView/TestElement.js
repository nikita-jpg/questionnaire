import React, { useState } from 'react'
import './TestView.css'

const TestElement = ({}) => {

    const [isOpen, setIsOpen] = useState(false)

    const open = () => {
        setIsOpen(!isOpen)
    }

    const style = {
        height: isOpen ? "100px" : "0"
    }

    return(
        <div onClick={open} className="container">
            <div className="title"></div>
            <div style={style} className="content"></div>
        </div>
    )
}

export default TestElement