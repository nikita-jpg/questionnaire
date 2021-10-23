import { Panel } from '@vkontakte/vkui';
import React from 'react';
import ListCard from '../../components/ListCard/ListCard'

import './ListQuizes.css';
import Header from '../../components/Header/Header';
import PanelWrapper from '../../components/PanelWrapper/PanelWrapper';
import { useDispatch } from 'react-redux';
import { getAnswersResultSurvey } from '../../help';

const ListQuizes = ({ id, title, surveys, surveysResults,
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

    const info = surveys.map((survey)=>{
        return{
            russianName: survey.russianName,
            percentProgress: 0,
            numberOfQuestions: 0,
            imageName: survey.image.imageName,
            description: survey.description,
            isBtnNeed: false
        }
    })
    

    return (
        <PanelWrapper id={id} headerText={title} onHeaderBack={onBack} isHeaderFixed={true}>

            <div className="ListQuizes">
                <ListCard
                    info={info}
                    cardClick={createOnClickItemQuizes}
                    btnCardClick={createOnClickItemQuizesBtn}
                />
            </div>

        </PanelWrapper>
    );
}

export default ListQuizes;
