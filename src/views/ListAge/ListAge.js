import { PanelHeader, Panel, Div } from '@vkontakte/vkui';
import React from 'react';
import './ListAge.css'
import { getAnswersResultEra, isTitleCentre } from '../../help';
import ListCard from '../../components/ListCard/ListCard'
import Header from '../../components/Header/Header'
import PanelWrapper from '../../components/PanelWrapper/PanelWrapper';
import downloadImage from '../../NotUI/Server/server.js'
import { useSelector } from 'react-redux';
import { getEraResult } from '../../Selectors/data_selectors';


const ListAge = ({id, eras, erasResults, createOnClickItemAge=index=>null}) => {

    // let a = 0

    // for(let i=0;i<10;i++){
    //     a = useSelector(getEraReselt)
    // }
    const info = eras.map((era)=>{
        // let eraResult = erasResults.filter((eraResult)=>eraResult.idEra === era.idEra)[0]
        return {
            russianName: era.russianName,
            percentProgress: 0,
            numberOfQuestions: 0,
            imageName: era.image.imageName,
            description: era.description
        }
    })

    const cardClick = (index) => () =>{
        createOnClickItemAge(eras[index].idEra)
    }

    return (
        <PanelWrapper id={id} headerText="Выбирете эпоху" isHeaderFixed={true}>

                <div className="ListAge__content">
                    <ListCard
                        info={info}
                        cardClick={cardClick}>
                    </ListCard>
                </div>

        </PanelWrapper>
    )
}

export default ListAge;
