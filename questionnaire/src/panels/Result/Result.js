import { Icon24Back } from "@vkontakte/icons";
import { Panel, PanelHeader, PanelHeaderButton, View } from "@vkontakte/vkui";
import React, { useEffect, useState } from "react";

import "./Result.css";
import animate from "../../anime/animate";
import easeOut from "../../anime/easeOut";
import ListQuizes from "../../components/ListQuizes/ListQuizes";
import ResultButtons from "./ResultButtons/ResultButtons";

const Result = ({ id, year, percent, historicalEvent, quizes,
    onBack = () => { }, createOnClickItemQuizes = (index) => null,
    onAgain=()=>{}, onGoToAnswersQuestion=()=>{} }) => {

    const getClassNameForPercent = (percent) => {
        if (percent <= 39) {
            return "Result__year-postfix_bad";
        }

        if (percent <= 69) {
            return "Result__year-postfix_normal";
        }

        return "Result__year-postfix_good";
    }

    const HEIGHT_HEADER = 60;
    const HEIGHT_YEAR = 76;
    const WIDTH_CHAR_IN_YEAR = 58;
    const WIDTH_PERCENT = 78;
    const WIDTH_YEAR = WIDTH_CHAR_IN_YEAR * year.length;
    const WIDTH_POSTFIX = WIDTH_CHAR_IN_YEAR * String(percent).length;
    const WIDTH_PRETFIX = WIDTH_YEAR - WIDTH_POSTFIX;
    const PADDING_LEFT_AND_RIGHT = 23;

    const stringPrefix = String(year).replace(String(percent), "");
    const widthContent = document.documentElement.clientWidth - PADDING_LEFT_AND_RIGHT * 2;

    let initialTransitionYearX;

    if (WIDTH_YEAR + WIDTH_PERCENT > widthContent) {
        initialTransitionYearX = (widthContent - WIDTH_POSTFIX) / 2;
    } else {
        initialTransitionYearX = WIDTH_PRETFIX / 2;
    }

    const initialStyles = {
        overflowResult: "hidden",
        opacityPercent: 1,
        opacityPrefixYear: 0,
        transitionYearY: document.documentElement.clientHeight / 2 - HEIGHT_YEAR / 2 - HEIGHT_HEADER,
        transitionYearX: -initialTransitionYearX,
        opacityHistoricalEvent: 0,
        transitionContentY: document.documentElement.clientHeight / 2 + HEIGHT_YEAR / 2,
        opacityContent: 0
    };

    const [styles, setStyles] = useState(initialStyles);

    const stylePercent = {
        opacity: styles.opacityPercent
    }

    const stylePrefixYear = {
        opacity: styles.opacityPrefixYear
    }

    const styleYear = {
        transform: `translate(${styles.transitionYearX}px, ${styles.transitionYearY}px)`
    }

    const styleHistoricalEvent = {
        opacity: styles.opacityHistoricalEvent,
        transform: `translateY(${styles.transitionYearY}px)`
    }

    const styleContent = {
        opacity: styles.opacityContent,
        transform: `translateY(${styles.transitionContentY}px)`
    }

    const styleResult = {
        overflow: styles.overflowResult
    }

    useEffect(() => {
        setTimeout(() => animate({
            timing: easeOut,

            duration: 4000,

            draw(progress) {
                const newStyles = { ...styles };

                const getProgressStyle = (min, max) => (progress - min) / (max - min);

                let shiftX = Math.min(
                    WIDTH_PERCENT / 2,
                    (document.documentElement.clientWidth - PADDING_LEFT_AND_RIGHT * 2 - WIDTH_YEAR) / 2
                );

                if (progress < 0.33) {
                    const progressStyles = getProgressStyle(0, 0.33);

                    let newTransition = (initialStyles.transitionYearX - shiftX) * (1 - progressStyles) + shiftX;

                    newStyles.opacityPercent = 1 - progressStyles;
                    newStyles.opacityPrefixYear = progressStyles;
                    newStyles.transitionYearX = newTransition;
                } else {
                    newStyles.opacityPrefixYear = 1;
                    newStyles.transitionYearX = shiftX;
                    newStyles.opacityPercent = 0;
                }

                if (progress >= 0.33 && progress < 0.66) {
                    const progressStyles = getProgressStyle(0.33, 0.66);

                    newStyles.opacityHistoricalEvent = progressStyles;
                } else if (progress >= 0.66) {
                    newStyles.opacityHistoricalEvent = 1;
                }

                if (progress >= 0.66 && progress < 1) {
                    const progressStyles = getProgressStyle(0.66, 1);

                    newStyles.transitionContentY = initialStyles.transitionContentY * (1 - progressStyles);
                    newStyles.transitionYearY = initialStyles.transitionYearY * (1 - progressStyles);
                    newStyles.opacityContent = progressStyles;
                } else if (progress >= 1) {
                    newStyles.transitionContentY = 0;
                    newStyles.transitionYearY = 0;
                    newStyles.opacityContent = 1;
                    newStyles.overflowResult = "";
                }

                setStyles(newStyles);
            }
        }), 1000);
    }, []);

    return (
        <View id={id} activePanel="PANEL_RESULT">
            <Panel id="PANEL_RESULT">
                <PanelHeader
                    className="Result__PanelHeader"
                    left={
                        <>
                            <PanelHeaderButton onClick={onBack}>
                                <Icon24Back fill="white" />
                            </PanelHeaderButton>
                            <h1 className="Result__title">Результаты</h1>
                        </>
                    }
                    separator={false}
                    visor={false}
                    transparent={false}
                >
                </PanelHeader>

                <div className="Result" style={styleResult}>
                    <div style={styleYear} className="Result__year">
                        <span style={stylePrefixYear} className="Result__year-prefix">{stringPrefix}</span>
                        <span className={getClassNameForPercent(percent)}>
                            {percent}
                            <span style={stylePercent}>%</span>
                        </span>
                    </div>

                    <div style={styleHistoricalEvent} className="Result__historical-event">{historicalEvent}</div>

                    <div style={styleContent} className="Result__content">
                        <ResultButtons 
                            onAgain={onAgain}
                            onGoToAnswersQuestion={onGoToAnswersQuestion}
                        />

                        <ListQuizes
                            quizes={quizes}
                            createOnClickItemQuizes={createOnClickItemQuizes}
                        />
                    </div>
                </div>
            </Panel>
        </View>
    )
}

export default Result;
