import { Panel } from '@vkontakte/vkui';
import React from 'react';
import ListCard from '../../components/ListCard/ListCard'

import './ListQuizes.css';
import Header from '../../components/Header/Header';
import PanelWrapper from '../../components/PanelWrapper/PanelWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { getAnswersResultSurvey } from '../../help';
import { getCurEra, getImages, getResultCurSurveys } from '../../Selectors/data_selectors';

const ListQuizes = ({ id, surveys,
    onBack = () => { }, 
    createOnClickItemQuizesBtn = (index) => null , 
    createOnClickItemQuizes = (index) => null 
}) => {


    // const info = surveys.map((survey)=>{
    //     return{
    //         russianName: survey.russianName,
    //         percentProgress: surveyResult.score,
    //         numberOfQuestions: surveyResult.total,
    //         imageName: survey.image.imageName,
    //         description: survey.description,
    //         isBtnNeed: surveyResult.score !== 0 ? true : false
    //     }
    // })

    // const newImages = useSelector(getImages)
    // console.log(newImages)
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
