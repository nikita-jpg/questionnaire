import CustomTooltip from "../../../components/CustomTooltip/CustomTooltip"
import PanelWrapper from "../../../components/PanelWrapper/PanelWrapper"
import './PanelResult.css'
import React, { useState } from "react";
import ResultButtons from "../ResultButtons/ResultButtons";
import { PromoBanner } from "@vkontakte/vkui";
import bridge from '@vkontakte/vk-bridge';
import ResultCards from "../ResultCards/ResultCards";


// onClose={()=>{setIsFirstOpenResult(false)}} 
const PanelResult = ({id, totalResult,isNeedAnim,adDate,isAdVisible,
    goSurveyAgain=()=>{},
    goToPanelAnswers=()=>{},
    goToPollView=()=>{},
    setAdVisible=()=>{},
}) =>{


//Анимация
    let startAnimDealyForCard = 0.2;
    let stepAnimDealyForCard = 0.1;
    let curAnimDealyForCard = -stepAnimDealyForCard;

    const makeStepAnimDealyForCard = () => {
        curAnimDealyForCard = curAnimDealyForCard + stepAnimDealyForCard;
        return startAnimDealyForCard + curAnimDealyForCard + "s";
    }

//Получаем цвет для результата
    const getClassNameForPercent = (totalResult) => {

        const total = totalResult.total;
        const score = totalResult.score

        if (score <= total/3) {
            return "Result__points-postfix_bad";
        }

        if (score <= total/2) {
            return "Result__points-postfix_normal";
        }

        return "Result__points-postfix_good";
    }


    return(
        <PanelWrapper id={id} isOneColumn={true}>

        {/* Цифра в виде результата */}
            <div className={`PanelResult__title ${isNeedAnim ? "Result__fade-anim":""}`} style={{animationDelay:makeStepAnimDealyForCard()}}>
                <span className={`PanelResult__points ${getClassNameForPercent(totalResult)}`}>
                    <CustomTooltip
                        // text={`${titleAge}: ${quizes[indexQuiz].title}`}
                        // defaultIsShown={isFirstOpenResult}
                    >
                        {totalResult.score}
                        <span>/{totalResult.total}</span>
                    </CustomTooltip>
                </span>
            </div>

        {/* Панелька с кнопками */}
            <div className={`Result__buttons ${isNeedAnim ? "Result__fade-anim":""}`} style={{animationDelay:makeStepAnimDealyForCard()}}>
                <ResultButtons 
                    onAgain={goSurveyAgain}
                    // onGoToAnswersQuestion={ () => { setIsFirstOpenResult(false); goToPanelAnswers()}}
                    onGoToAnswersQuestion={goToPanelAnswers}
                    goToPollView={goToPollView}
                    goToPanelAnswers={goToPanelAnswers}
                />
            </div>

        {/* Реклама */}
            {
                isAdVisible &&
                <div className={`Result__adds ${isNeedAnim ? "Result__fade-anim":""}`} style={{animationDelay:makeStepAnimDealyForCard()}}>
                    <PromoBanner bannerData={adDate} onClose={() => {setAdVisible(false)}}></PromoBanner>
                </div>
            }

            {/* Карточки опросов */}
            <ResultCards 
                // indexAge={indexAge}
                // indexQuiz={indexQuiz}
                // eras={eras}
                isFirstOpenResult={isNeedAnim}
                // isCompletedQuiz={percent === questions.length ? true : false}

                makeStepAnimDealyForCard={makeStepAnimDealyForCard}
                // onAgain={modifyIsFirstOpenResult(onAgain)}
                // goToQuiz={createOnClickItemQuizes}
                // goToEras={goToViewListAndQuizes}
            >
            </ResultCards>

        </PanelWrapper>
    )
}

export default PanelResult