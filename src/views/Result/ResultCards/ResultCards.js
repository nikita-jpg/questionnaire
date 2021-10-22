import React from 'react';
import ButtonWrapper from '../../../components/ButtonWrapper/ButtonWrapper';
import CardWrapper from '../../../components/CardWrapper/CardWrapper';
import './ResultCards.css'

const makeCard = (info, isFirstOpenResult,cardClick=()=>{}, makeStepAnimDealyForCard=()=>{}) => {
    return(
        <div className={`ResultCards__card ${isFirstOpenResult ? "Result__fade-anim":""}`} style={{animationDelay:makeStepAnimDealyForCard() }}>
            <CardWrapper
                title={info.title}
                percentProgress={info.percentProgress}
                numberOfQuestions={info.numberOfQuestions}
                cardClick={cardClick}
                imageSrc={info.imageSrc}
                description={info.description}
            >    
            </CardWrapper>
        </div>
    )
}

const quizFilter = (arrQuizes, indexQuiz, isFirstOpenResult, cardClick=()=>{}, makeStepAnimDealyForCard=()=>{}) => {

    let arr = [];
    for(let i=0;i<arrQuizes.length;i++){
        if((arrQuizes[i].percentProgress !== arrQuizes[i].questions.length) && (i!==indexQuiz)){
            arr.push(makeCard(arrQuizes[i], isFirstOpenResult, cardClick(i), makeStepAnimDealyForCard))
        }
    }

    if(arr.length === 0)
        return null
    else
        return(arr)
}

const eraFilter = (arrEras, indexAge, isFirstOpenResult, isCompletedQuiz, 
    onAgain=()=>{}, goToEras=()=>{}, makeStepAnimDealyForCard=()=>{}) => {

    let retrunMessage= "";
    let returnButtons = [];
    let isHasNotFinishedEras = false;

    for(let i=0;i<arrEras.length;i++){
        if( (arrEras[i].percentProgress !== arrEras[i].numberOfQuestions) && (i!==indexAge)) {
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


const ResultCards = ({indexAge,indexQuiz,eras,isFirstOpenResult, isCompletedQuiz,
    goToQuiz=()=>{}, goToEras=()=>{},onAgain=()=>{},
    makeStepAnimDealyForCard=()=>{}}) =>{

    let quizFilterResult = quizFilter(eras[indexAge].quizzes, indexQuiz, isFirstOpenResult, goToQuiz, makeStepAnimDealyForCard)
    if(quizFilterResult !== null)
        return(quizFilterResult)
    
    let eraFilterResult = eraFilter(eras, indexAge, isFirstOpenResult, isCompletedQuiz, onAgain, goToEras, makeStepAnimDealyForCard)
    if(eraFilter !== null)
        return(eraFilterResult)

}
export default ResultCards