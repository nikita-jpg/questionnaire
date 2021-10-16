import { PanelHeader, Panel, Div } from '@vkontakte/vkui';
import React from 'react';
import './ListAge.css'
import { getAnswersResulEra, isTitleCentre } from '../../help';
import ListCard from '../../components/ListCard/ListCard'
import Header from '../../components/Header/Header'
import PanelWrapper from '../../components/PanelWrapper/PanelWrapper';
import downloadImage from '../../NotUI/Server/server.js'


const ListAge = ({id, eras, createOnClickItemAge=index=>null}) => {

    // console.log(eras)

    const info = eras.map((era)=>(
        {
            russianName: era.russianName,
            percentProgress: getAnswersResulEra(era).score,
            numberOfQuestions: getAnswersResulEra(era).total,
            imageName: era.image.imageName,
            description: era.description
        }
    ))

    return (
        <PanelWrapper id={id} headerText="Выбирете эпоху" isHeaderFixed={true}>

                <div className="ListAge__content">
                    <ListCard
                        info={info}
                        cardClick={createOnClickItemAge}>
                    </ListCard>
                </div>

        </PanelWrapper>
    )
}

export default ListAge;
