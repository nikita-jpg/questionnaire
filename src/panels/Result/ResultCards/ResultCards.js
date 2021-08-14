import React from 'react';
import './ResultCards.css'

const makeCard = (info, isFirstOpenResult, makeStepAnimDealyForCard=()=>{}) => {
    return(
        <div className={`ResultCards__card ${isFirstOpenResult ? "Result__fade-anim":""}`} style={{animationDelay:makeStepAnimDealyForCard() }}>
        {/* <ContentCard
            header={
                <div className="ListCard__title">
                    <div>{info.title}</div>
                    <div>{info.percentProgress}/{info.numberOfQuestions}</div>
                </div>
            }
            mode={"tint"}
            onClick={createOnClickItemQuizes(i)}
            image={info.imageSrc}
            caption={info.description}
            className="ListCard__Card"
        /> */}
    </div>
    )
}

const quizFilter = (arrQuizes, isFirstOpenResult, makeStepAnimDealyForCard=()=>{}) => {
    arrQuizes.map((record,i) => {

        // if((record.percentProgress !== record.questions.length) && (i!==indexQuiz))
        // {
        //     makeCard(record,isFirstOpenResult,makeStepAnimDealyForCard)
        // }
    })
}

const ResultCards = ({indexAge,indexQuiz,eras,isFirstOpenResult,
    goToQuiz=()=>{},goToEra=()=>{},
    makeStepAnimDealyForCard=()=>{}}) =>{

        

}
export default ResultCards