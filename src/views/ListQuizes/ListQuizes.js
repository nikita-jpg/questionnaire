import { Panel } from '@vkontakte/vkui';
import React from 'react';
import ListCard from '../../components/ListCard/ListCard'

import './ListQuizes.css';
import Header from '../../components/Header/Header';
import PanelWrapper from '../../components/PanelWrapper/PanelWrapper';
import { useDispatch } from 'react-redux';
import { getAnswersResultSurvey } from '../../help';

const ListQuizes = ({ id, title, quizes, onBack = () => { },goToSurveyView, createOnClickItemQuizes = (index) => null }) => {

    const dispath = useDispatch()

    const info = quizes.map((quiz)=>(
        {
            russianName: quiz.russianName,
            percentProgress: getAnswersResultSurvey(quiz).score,
            numberOfQuestions: getAnswersResultSurvey(quiz).total,
            imageName: quiz.image.imageName,
            description: quiz.description,
            isBtnNeed: true
        }
    ))

    // getAnswersResultSurvey(quiz).score !== 0 ? true : false

    const btnCardClick = (index) => {
        console.log(index)
    }


    return (
        <PanelWrapper id={id} headerText={title} onHeaderBack={onBack} isHeaderFixed={true}>

            <div className="ListQuizes">
                <ListCard
                    info={info}
                    cardClick={createOnClickItemQuizes}
                    btnCardClick={btnCardClick}
                />
            </div>

        </PanelWrapper>
    );
}

export default ListQuizes;
