import React from 'react';
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
            arr.push(makeCard(arrQuizes[i], isFirstOpenResult, cardClick, makeStepAnimDealyForCard))
        }
    }

    return(arr)
}

const ResultCards = ({indexAge,indexQuiz,eras,isFirstOpenResult,
    goToQuiz=()=>{},goToEra=()=>{},
    makeStepAnimDealyForCard=()=>{}}) =>{

    let cardsArr = quizFilter(eras[indexAge].quizzes, indexQuiz, isFirstOpenResult, goToQuiz, makeStepAnimDealyForCard)

    if( cardsArr !== [])
        return(cardsArr)
    

}
export default ResultCards