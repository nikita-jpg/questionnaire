import { Icon24Back } from "@vkontakte/icons";
import { Panel, PanelHeader, PanelHeaderButton, PromoBanner, useAdaptivity, View } from "@vkontakte/vkui";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import bridge from '@vkontakte/vk-bridge';

import "./Result.css";
import animate from "../../anime/animate";
import easeOut from "../../anime/easeOut";
// import ListQuizes from "../../components/ListQuizes/ListQuizes";
import ResultButtons from "./ResultButtons/ResultButtons";

const Result = ({ id, year, percent, historicalEvent, quizes, isFirstOpenResult, setIsFirstOpenResult,
    onBack = () => { }, createOnClickItemQuizes = (index) => null,
    onAgain=()=>{}, onGoToAnswersQuestion=()=>{} }) => {

        // const promoBannerProps = {
        //     title: 'Заголовок',
        //     domain: 'vk.com',
        //     trackingLink: 'https://vk.com',
        //     ctaText: 'Перейти',
        //     advertisingLabel: 'Реклама',
        //     iconLink: 'https://sun9-7.userapi.com/c846420/v846420985/1526c3/ISX7VF8NjZk.jpg',
        //     description: 'Описание рекламы',
        //     ageRestrictions: "14+",
        //     statistics: [
        //       { url: '', type: 'playbackStarted' },
        //       { url: '', type: 'click' }
        //     ]
        //   };

    const [isAdVisible, setAdVisible] = useState(false)
    const [adDate,setAdDate] = useState(null)

	const modifyIsFirstOpenResult = (f) => (...args) => {
		setIsFirstOpenResult(true);
		return f(...args);
	}

    const getClassNameForPercent = (percent) => {
        if (percent <= 4) {
            return "Result__year-postfix_bad";
        }

        if (percent <= 6) {
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
    const PADDING_LEFT_AND_RIGHT = 10;

    const stringPrefix = String(year).replace(String(percent), "");
    const widthContent = document.documentElement.clientWidth - PADDING_LEFT_AND_RIGHT * 2;

    const shiftX = WIDTH_YEAR + WIDTH_PERCENT > widthContent
        ?(widthContent - WIDTH_YEAR) / 2
        :WIDTH_PERCENT / 2;

    let initialTransitionYearX;

    if (WIDTH_YEAR + WIDTH_PERCENT > widthContent) {
        initialTransitionYearX = (widthContent - WIDTH_POSTFIX - WIDTH_PERCENT) / 2 + (WIDTH_YEAR + WIDTH_PERCENT - widthContent);
    } else {
        initialTransitionYearX = WIDTH_PRETFIX / 2;
    }

    // const { viewHeight } = useAdaptivity();
    const initialStyles = {
        overflowResult: "hidden",
        opacityPercent: 1,
        opacityPrefixYear: 0,
        transitionYearY: document.documentElement.clientHeight / 2 - HEIGHT_YEAR - HEIGHT_HEADER,
        transitionYearX: -initialTransitionYearX,
        opacityHistoricalEvent: 0,
        transitionContentY: document.documentElement.clientHeight / 2 + HEIGHT_YEAR / 2,
        opacityContent: 0
    };

    const finishStyles = {
        overflowResult: "",
        opacityPercent: 0,
        opacityPrefixYear: 1,
        transitionYearY: 0,
        transitionYearX: shiftX,
        opacityHistoricalEvent: 1,
        transitionContentY: 0,
        opacityContent: 1
    }

    const [styles, setStyles] = useState(isFirstOpenResult ?initialStyles :finishStyles);

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
        transform: `translateY(${styles.transitionContentY}px)`,
        width: "100%",
        maxWidth:"370px"
    }

    const styleResult = {
        overflow: styles.overflowResult
    }

    useEffect(() => {
        if (isFirstOpenResult) {
            setIsFirstOpenResult(false);
        } else {
            return;
        }

        setTimeout(() => animate({
            timing: easeOut,

            duration: 3000,

            draw(progress) {
                const newStyles = { ...styles };

                const getProgressStyle = (min, max) => (progress - min) / (max - min);

                if (progress < 0.33) {
                    const progressStyles = getProgressStyle(0, 0.33);

                    let newTransition = (initialStyles.transitionYearX - shiftX) * (1 - progressStyles) + shiftX;

                    newStyles.opacityPercent = 1 - progressStyles;
                    newStyles.opacityPrefixYear = progressStyles;
                    newStyles.transitionYearX = newTransition;
                } else {
                    newStyles.opacityPrefixYear = finishStyles.opacityPrefixYear;
                    newStyles.transitionYearX = finishStyles.transitionYearX;
                    newStyles.opacityPercent = finishStyles.opacityPercent;
                }

                if (progress >= 0.33 && progress < 0.66) {
                    const progressStyles = getProgressStyle(0.33, 0.66);

                    newStyles.opacityHistoricalEvent = progressStyles;
                } else if (progress >= 0.66) {
                    newStyles.opacityHistoricalEvent = finishStyles.opacityHistoricalEvent;
                }

                if (progress >= 0.66 && progress < 1) {
                    const progressStyles = getProgressStyle(0.66, 1);

                    newStyles.transitionContentY = initialStyles.transitionContentY * (1 - progressStyles);
                    newStyles.transitionYearY = initialStyles.transitionYearY * (1 - progressStyles);
                    newStyles.opacityContent = progressStyles;
                } else if (progress >= 1) {
                    newStyles.transitionContentY = finishStyles.transitionContentY;
                    newStyles.transitionYearY = finishStyles.transitionYearY;
                    newStyles.opacityContent = finishStyles.opacityContent;
                    newStyles.overflowResult = finishStyles.overflowResult;
                }

                setStyles(newStyles);
            }
        }), 1000);
    }, []);


    const getAdData = () => {
        bridge.send('VKWebAppGetAds')
            .then((promoBannerProps) => {
                setAdDate(promoBannerProps)
                setAdVisible(true);
            })
            .catch(error => console.log(error))
            .finally(()=>{
                console.log("final")
            })
        // setAdDate(promoBannerProps)
        // setAdVisible(true);
        // console.log(adDate)

        // { this.state.promoBannerProps && <PromoBanner bannerData={ this.state.promoBannerProps } /> }
    }
    getAdData();

    return (
        <View id={id} activePanel="PANEL_RESULT">
            <Panel id="PANEL_RESULT">

                <div>
                    <Header
                        // text={""}
                        // isClose={true}
                        // leftBtnFunc={()=>{}}
                    >
                    </Header>
                    <div className="Result" style={styleResult}>

                        <div style={styleYear} className="Result__year">
                            <span style={stylePrefixYear} className="Result__year-prefix">{stringPrefix}</span>
                            <span className={getClassNameForPercent(percent)}>
                                {percent}
                                <span style={stylePercent}>/8</span>
                            </span>
                        </div>

                        <div style={styleHistoricalEvent} className="Result__historical-event">{historicalEvent}</div>

                        {/* <ResultButtons 
                                onAgain={modifyIsFirstOpenResult(onAgain)}
                                onGoToAnswersQuestion={onGoToAnswersQuestion}
                            /> */}

                        <div style={styleContent} className="Result__content">

                            <ResultButtons 
                                onAgain={modifyIsFirstOpenResult(onAgain)}
                                onGoToAnswersQuestion={onGoToAnswersQuestion}
                            />

                            <div className="Result__adds">
                            {
                                isAdVisible &&
                                <PromoBanner bannerData={adDate} onClose={() => {setAdVisible(false)}}></PromoBanner>
                                // getAdData()
                            }

                        </div>
                        </div>

                    </div>
                </div>
            </Panel>
        </View>
    )
}

export default Result;

                        {/* <ListQuizes
                            quizes={quizes}
                            createOnClickItemQuizes={
                                (...args1) => (...args2) => {
                                    createOnClickItemQuizes(...args1)(...args2);
                                    setIsFirstOpenResult(true);
                                }
                            }
                        /> */}