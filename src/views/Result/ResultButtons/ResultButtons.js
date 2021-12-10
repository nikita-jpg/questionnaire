import { Icon24Globe, Icon24List, Icon28RefreshOutline } from '@vkontakte/icons';
import React from "react";
import ButtonWrapper from "../../../components/ButtonWrapper/ButtonWrapper";
import './ResultButtons.css';


const ResultButtons = ({
    onAgain=()=>{},
    goToPollView=()=>{},
    goToPanelAnswers=()=>{}
}) => {

    const iconSize = 28;

    return (
        <div className="Result-buttons__container">

            {/* К вопросам */}
                <ButtonWrapper
                    text="К вопросам"
                    className="Result-buttons__button"
                    classNameText="Result-buttons__text"
                    before={<Icon24List width={iconSize} height={iconSize} style={{color:"var(--main-yellow-color)"}}/>}
                    onClick={goToPanelAnswers}
                >
                </ButtonWrapper>

            {/* К эпохам */}
                <ButtonWrapper
                    size="l"
                    text="К эпохам"
                    className="Result-buttons__button"
                    classNameText="Result-buttons__text"
                    before={<Icon24Globe width={iconSize} height={iconSize} style={{color:"var(--main-purple-color)"}}/>}
                    onClick={goToPollView}
                >
                </ButtonWrapper>

            {/* Ещё раз */}
                <ButtonWrapper
                    size="l"
                    text="Ещё раз"
                    className="Result-buttons__button"
                    classNameText="Result-buttons__text"
                    before={<Icon28RefreshOutline width={iconSize} height={iconSize} style={{color:"var(--main-green-color)"}}/>}
                    onClick={onAgain}
                >
                </ButtonWrapper>
        </div>
    )
}

export default ResultButtons;
