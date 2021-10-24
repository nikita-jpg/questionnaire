import CustomTooltip from "../../../components/CustomTooltip/CustomTooltip"
import PanelWrapper from "../../../components/PanelWrapper/PanelWrapper"
import './PanelResult.css'
import React, { useEffect, useState } from "react";
import ResultButtons from "../ResultButtons/ResultButtons";
import { PromoBanner } from "@vkontakte/vkui";
import bridge from '@vkontakte/vk-bridge';
import ResultCards from "../ResultCards/ResultCards";
import { getCurEraId, getCurEraSurveys, getCurSurveyId, getCurSurveys, getEras, getIndexEra, getIndexSurvey, getResultCurSurvey, getResultCurSurveys, getResultsEras } from "../../../Selectors/data_selectors";
import { useSelector } from "react-redux";


// onClose={()=>{setIsFirstOpenResult(false)}} 
const PanelResult = ({id,isNeedAnim,adDate,isAdVisible,
    goToSurveyView=()=>{},
    goToPanelAnswers=()=>{},
    goToPollView=()=>{},

    setAdVisible=()=>{},
    setIndexSurvey=()=>{}
}) =>{

//Кешируем
    // Мы делаем локальную копию резульата, чтобы при переходе другому опросу, не менялось значение.
    // Значение меняется быстрее анимации, поэтому при переходе к другому опросу,
    // пользователь вначале увидит изменение результата на результат кликнутого опроса,
    // а после перейдёт к новому опросу

    const total = useSelector(getResultCurSurvey)
    const [totalResult, setTotal] = useState(0)
    const [eras, setEras] = useState([])
    const [erasResult, setErasResult] = useState([])
    const [surveys, setSurveys] = useState([])
    const [surveysCurResult, setSurveysCurResult] = useState([])
    const [curEraIndex,setCurEraIndex] = useState(-1)
    const [curSurveyIndex,setCurSurveyIndex] = useState(-1)

    const surveysModified = useSelector(getCurSurveys)
    const curEraIndexModified = useSelector(getCurEraId)
    const curSurveyIndexModified = useSelector(getCurSurveyId)
    const erasModified = useSelector(getEras)
    const erasResultModified = useSelector(getResultsEras)
    const surveysCurResultModified = useSelector(getResultCurSurveys)


    useEffect(()=>{
        setTotal(total)
        setEras(erasModified)
        setErasResult(erasResultModified)
        setSurveys(surveysModified)
        setCurEraIndex(curEraIndexModified)
        setCurSurveyIndex(curSurveyIndexModified)
        setSurveysCurResult(surveysCurResultModified)
    }, [])

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
                    onAgain={goToSurveyView}
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

                eras={eras}
                erasResult={erasResult}
                curSurveys={surveys}
                curSurveysResult={surveysCurResult}

                curEraIndex={curEraIndex}
                curSurveyIndex={curSurveyIndex}

                isCompletedSurvey={totalResult.score === totalResult.total}
                // isCompletedQuiz={percent === questions.length ? true : false}

                makeStepAnimDealyForCard={makeStepAnimDealyForCard}
                goToSurveyView={goToSurveyView}
                setIndexSurvey={setIndexSurvey}
                goToPollView={goToPollView}
                onAgain={goToSurveyView}
                // goToQuiz={createOnClickItemQuizes}
                // goToEras={goToViewListAndQuizes}
            >
            </ResultCards>

        </PanelWrapper>
    )
}

export default PanelResult