import React from 'react';
import { useSelector } from 'react-redux';
import ButtonWrapper from '../../../components/ButtonWrapper/ButtonWrapper';
import CardWrapper from '../../../components/CardWrapper/CardWrapper';
import { getCurEra } from '../../../Selectors/data_selectors';
import './ResultCards.css';

const makeUsedData = (survey, surveyResult) =>{
    return(
        {
            russianName: survey.russianName,
            percentProgress: surveyResult.score,
            numberOfQuestions: surveyResult.total,
            imageName: survey.image.imageName,
            imgSource: survey.image.sourceImageLink,
            description: survey.description,
        }
    )

}

const makeCard = (info, isFirstOpenResult, cardClick=()=>{}, makeStepAnimDealyForCard=()=>{}) => {
    return(
        <div className={`ResultCards__card ${isFirstOpenResult ? "Result__fade-anim":""}`} style={{animationDelay:makeStepAnimDealyForCard() }}>
            <CardWrapper
                title={info.russianName}
                percentProgress={info.percentProgress}
                numberOfQuestions={info.numberOfQuestions}
                imageName={info.imageName}
                imgSource={info.imgSource}
                description={info.description}
                cardClick={cardClick}
            >    
            </CardWrapper>
        </div>
    )
}


const getCardsFromSurveysFilter = (surveys,surveysResult, curSurveyID, isFirstOpenResult, eraName,
    cardClick=()=>{}, 
    makeStepAnimDealyForCard=()=>{}
    ) => {

    let title = <div className={`ResultCards__cardTitle ${isFirstOpenResult ? "Result__fade-anim":""}`} style={{animationDelay:makeStepAnimDealyForCard() }}>
        Другие опросы из «{eraName}»
        </div>
    let arr = [];

    arr.push(title)
    surveysResult.map((surveyResult)=>{
        if((surveyResult.score !== surveyResult.total) && (surveyResult.idSurvey !== curSurveyID)){

            let curSurvey = surveys.filter((survey)=>survey.idSurvey === surveyResult.idSurvey)[0]
            let data = makeUsedData(curSurvey, surveyResult)
            arr.push(makeCard(data, isFirstOpenResult, cardClick(curSurvey.idSurvey), makeStepAnimDealyForCard))

        }
    })

    if(arr.length === 1)
        return null
    else
        return(arr)
}

const getCardsFromEraFilter = (erasResult, curEraID, isFirstOpenResult, isCompletedQuiz, 
    onAgain=()=>{}, goToEras=()=>{}, makeStepAnimDealyForCard=()=>{}) => {

    let retrunMessage= "";
    let returnButtons = [];
    let isHasNotFinishedEras = false;

    erasResult.map((eraResult)=>{
        if((eraResult.score !== eraResult.total) && (eraResult.idEra !== curEraID)){
            isHasNotFinishedEras = true;
        }
    })

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
                                style={{fontSize:"18px"}}
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

    curSurveys, 
    curSurveysResult,
    curEraIndex,
    curSurveyIndex,
    erasResult,

    goToPollView=()=>{},
    onAgain=()=>{},
    setIndexSurvey=()=>{},
    goToSurveyView=()=>{},
    makeStepAnimDealyForCard=()=>{}
}) =>{



    const cardClick = (indexSurvey) => () => {
        setIndexSurvey(indexSurvey)
        goToSurveyView()
    }

    let curEraName = useSelector(getCurEra).russianName;

    
    //Узнаём есть ли непройденные опросы (кроме текущего)
    let surveysFilterResultArr = getCardsFromSurveysFilter(curSurveys,curSurveysResult, curSurveyIndex, isFirstOpenResult, curEraName, cardClick, makeStepAnimDealyForCard)
    if(surveysFilterResultArr !== null){
        return surveysFilterResultArr
    }

    
    let eraFilterResult = getCardsFromEraFilter(erasResult, curEraIndex, isFirstOpenResult, isCompletedSurvey, onAgain, goToPollView, makeStepAnimDealyForCard)
    if(eraFilterResult !== null){
        return eraFilterResult
    }
    
    return null

}
export default ResultCards