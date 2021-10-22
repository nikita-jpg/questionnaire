import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ButtonWrapper from '../../../components/ButtonWrapper/ButtonWrapper';
import CardWrapper from '../../../components/CardWrapper/CardWrapper';
import { getAnswersResultSurvey, getAnswersResultEra } from '../../../help';
import { getCurSurvey, getCurEraSurveys, getIndexSurvey } from '../../../Selectors/data_selectors';
import './ResultCards.css'

const makeUsedData = (surveys) =>{
    let newSurveys = [];
    surveys.map((survey)=>(
        newSurveys.push(
        {
            russianName: survey.russianName,
            percentProgress: getAnswersResultSurvey(survey).score,
            numberOfQuestions: getAnswersResultSurvey(survey).total,
            imageName: survey.image.imageName,
            description: survey.description,
            isBtnNeed: getAnswersResultSurvey(survey).score !== 0 ? true : false
        }
    )))

    return newSurveys
}

const makeCard = (info, isFirstOpenResult, cardClick=()=>{}, makeStepAnimDealyForCard=()=>{}) => {
    
    return(
        <div className={`ResultCards__card ${isFirstOpenResult ? "Result__fade-anim":""}`} style={{animationDelay:makeStepAnimDealyForCard() }}>
            <CardWrapper
                title={info.russianName}
                percentProgress={info.percentProgress}
                numberOfQuestions={info.numberOfQuestions}
                imageSrc={info.imageSrc}
                description={info.description}
                cardClick={cardClick}
            >    
            </CardWrapper>
        </div>
    )
}


const getCardsFromSurveysFilter = (arrSurveys, curSurveyID, isFirstOpenResult, 
    cardClick=()=>{}, 
    makeStepAnimDealyForCard=()=>{}
    ) => {

    let arr = [];
    for(let i=0;i<arrSurveys.length;i++){
        if( (arrSurveys[i].percentProgress !== arrSurveys[i].numberOfQuestions) && (i !== curSurveyID)){
            arr.push(makeCard(arrSurveys[i], isFirstOpenResult, cardClick(i), makeStepAnimDealyForCard))
        }
    }

    if(arr.length === 0)
        return null
    else
        return(arr)
}

const getCardsFromEraFilter = (arrEras, indexAge, isFirstOpenResult, isCompletedQuiz, 
    onAgain=()=>{}, goToEras=()=>{}, makeStepAnimDealyForCard=()=>{}) => {

    let retrunMessage= "";
    let returnButtons = [];
    let isHasNotFinishedEras = false;
    let erasProgress = {};

    for(let i=0;i<arrEras.length;i++){
        
        erasProgress = getAnswersResultEra(arrEras[i])

        if((erasProgress.score !== erasProgress.total) && (i!==indexAge)) {
            isHasNotFinishedEras = true;
        }
    }

    if( (isHasNotFinishedEras === true) && (isCompletedQuiz === true)  ){
        retrunMessage = "Поздравляем, вы завершили целую эпоху! Предлагаем перейти к выбору новой эпохи";
        returnButtons = [{text:"К эпохам", click:goToEras}]
    }

    if( (isHasNotFinishedEras === false) && (isCompletedQuiz === true)  ){
        retrunMessage = "Поздравляем, вы завершили все эпохи!";
        returnButtons = []
    }

    if( (isHasNotFinishedEras === true) && (isCompletedQuiz === false)  ){
        retrunMessage = "Поздравляем, вы почти полностью прошли эпоху на 100%. Но, к сожалению, данный орпос не на 100%. Хотите его перепройти или перейти к выбору новой эпохи?";
        returnButtons = [{text:"Ещё раз", click:onAgain}, {text:"К эпохам", click:goToEras}]
    }

    if( (isHasNotFinishedEras === false) && (isCompletedQuiz === false)  ){
        retrunMessage = "Поздравляем, вы почти прошли все опросы на 100%! Но, к сожалению, данный опрос не на 100%. Предлагаем вам его перепройти. Ещё чуть-чуть :)"
        returnButtons = [{text:"Ещё раз", click:onAgain}]
    }

    return(
        <div className="ResultCards__container">
            
            <div className={`ResultCards__container__text ${isFirstOpenResult ? "Result__fade-anim":""}`} style={{animationDelay:makeStepAnimDealyForCard() }}>
                <div className="ResultCards__text">{retrunMessage}</div>
            </div>

            {returnButtons.length !== 0 &&
                returnButtons.map((button)=>{
                    return(
                    <div className={`ResultCards__container__buttons ${isFirstOpenResult ? "Result__fade-anim":""}`} style={{animationDelay:makeStepAnimDealyForCard() }}>
                        <div className="ResultCards__button">
                            <ButtonWrapper
                                isLinkForm={true}
                                style={{color:"var(--main-gray-color)", fontSize:"18px"}}
                                text={button.text}
                                onClick={button.click}
                            ></ButtonWrapper>
                        </div>
                    </div>
                )}) 
            }

        </div>
    )
}



const ResultCards = ({
    isFirstOpenResult, 
    isCompletedSurvey,

    upperCurSurveys, 
    upperCurEraIndex,
    upperCurSurveyIndex,
    upperEras,

    goToQuiz=()=>{}, 
    goToPollView=()=>{},
    onAgain=()=>{},
    setIndexSurvey=()=>{},
    goToSurveyView=()=>{},
    makeStepAnimDealyForCard=()=>{}
}) =>{

    const eras = upperEras;
    const surveys = makeUsedData(upperCurSurveys)
    const curSurveyIndex = upperCurSurveyIndex;

    const cardClick = (indexSurvey) => () => {
        setIndexSurvey(indexSurvey)
        goToSurveyView()
    }


    //Узнаём есть ли непройденные опросы (кроме текущего)
    let surveysFilterResultArr = getCardsFromSurveysFilter(surveys, curSurveyIndex, isFirstOpenResult, cardClick, makeStepAnimDealyForCard)
    if(surveysFilterResultArr !== null){
        return surveysFilterResultArr
    }

    
    let eraFilterResult = getCardsFromEraFilter(eras, upperCurEraIndex, isFirstOpenResult, isCompletedSurvey, onAgain, goToPollView, makeStepAnimDealyForCard)
    // console.log(eraFilterResult)
    if(eraFilterResult !== null){
        return eraFilterResult
    }
    
    return null
    // return null

    // if(isCurSurveyCompleted)
    //     // return(surveysFilterResultArr)
    
    // let eraFilterResult = eraFilter(eras, indexAge, isFirstOpenResult, isCurSurveyCompleted, onAgain, goToEras, makeStepAnimDealyForCard)
    // if(eraFilter !== null)
    //     return(eraFilterResult)

}
export default ResultCards