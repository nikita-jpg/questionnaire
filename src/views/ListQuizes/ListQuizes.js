import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ListCard from '../../components/ListCard/ListCard';
import PanelWrapper from '../../components/PanelWrapper/PanelWrapper';
import { getCurEra, getResultCurSurveys } from '../../Selectors/data_selectors';
import './ListQuizes.css';


const ListQuizes = ({ id, surveys,
    onBack = () => { }, 
    createOnClickItemQuizesBtn = (index) => null , 
    createOnClickItemQuizes = (index) => null 
}) => {


    //Переписываем историю чтобы быть уверенными что при клике "Назад" вернёмся к эрам
    useEffect(()=>{
        console.log("work")
        window.history.pushState({urlPath:'/PoolView/ListAge'},undefined);
    },[])

    const surveysResult = useSelector(getResultCurSurveys);
    const title = useSelector(getCurEra).russianName
    let surveyResult = {};

    const info = surveys.map((survey)=>{
        surveyResult = surveysResult.filter((surveyResult)=>surveyResult.idSurvey === survey.idSurvey)[0]
        return{
            russianName: survey.russianName,
            percentProgress: surveyResult.score,
            numberOfQuestions: surveyResult.total,
            imageName: survey.image.imageName,
            imgSource: survey.image.sourceImageLink,
            description: survey.description,
            isBtnNeed: surveyResult.score !== 0 ? true : false 
        }
    })
    
    const cardClick = (indexSurvey) => () =>{
        createOnClickItemQuizes(surveys[indexSurvey].idSurvey)
    }

    const cardBtnClick = (indexSurvey) => () =>{
        createOnClickItemQuizesBtn(surveys[indexSurvey].idSurvey)
    }

    return (
        <PanelWrapper id={id} headerText={title} onHeaderBack={onBack} isHeaderFixed={true}>

            <div className="ListQuizes">
                <ListCard
                    info={info}
                    cardClick={cardClick}
                    btnCardClick={cardBtnClick}
                />
            </div>

        </PanelWrapper>
    );
}

export default ListQuizes;
