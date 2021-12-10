import React from 'react';
import { Button } from "@vkontakte/vkui"
import './AnswerOption.css'

const AnswerOption = ({isActived, text, click, style}) => {
    return(
        <Button onClick={click} mode="secondary" style = {style} className={`AnswerOption ${isActived && "AnswerOption_active"}`}>{text}</Button>
    )
}

export default AnswerOption