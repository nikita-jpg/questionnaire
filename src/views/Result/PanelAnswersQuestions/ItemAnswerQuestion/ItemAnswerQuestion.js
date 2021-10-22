import { Div, FixedLayout } from '@vkontakte/vkui';
import React, { createRef, useEffect, useState } from 'react';
import animate from '../../../../anime/animate';
import easeOut from '../../../../anime/easeOut';
import BlackBackground from '../../../../components/BlackBackground/BlackBackground';
import ButtonWrapper from '../../../../components/ButtonWrapper/ButtonWrapper';
import Arrow, { colorsArrow, directionArrow } from './Arrow';
import { Icon16CheckCircleOutline } from '@vkontakte/icons';
import { Icon16CancelCircleOutline } from '@vkontakte/icons';

import "./ItemAnswerQuestion.css";

const ItemAnswerQuestion = ({indexQuestion, question, indexRightAnswer, indexUserAnswer, openAlert = () => {} }) => {

    const ICON_SIZE = 24;

    return (
        <div className="ItemAnswerQuestion">
            <ButtonWrapper
                onClick={ () => {openAlert(indexQuestion)}}
                text={question.questionText}
                classNameText="ItemAnswerQuestion__button-text"
                hasActive={false}
                before={indexRightAnswer === indexUserAnswer 
                    ? <Icon16CheckCircleOutline height={ICON_SIZE} width={ICON_SIZE} style={{color:"var(--main-green-color)"}}/> 
                    : <Icon16CancelCircleOutline height={ICON_SIZE} width={ICON_SIZE} style={{color:"var(--main-red-color)"}}/> }
            >
            </ButtonWrapper>
        </div>
    )
}

export default ItemAnswerQuestion;
