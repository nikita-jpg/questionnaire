import { PanelHeader, Panel, Div } from '@vkontakte/vkui';
import React from 'react';
import './ListAge.css'
import { getAnswersResultEra, isTitleCentre } from '../../help';
import ListCard from '../../components/ListCard/ListCard'
import Header from '../../components/Header/Header'
import PanelWrapper from '../../components/PanelWrapper/PanelWrapper';
import downloadImage from '../../NotUI/Server/server.js'
import { useSelector } from 'react-redux';
import { getEraResult, getResultsEras } from '../../Selectors/data_selectors';


const ListAge = ({id, eras, createOnClickItemAge=index=>null}) => {

 
    const eraResults = useSelector(getResultsEras);

    const info = eras.map((era)=>{
        let eraResult = eraResults.filter((eraResult)=>eraResult.idEra === era.idEra)[0]
        return {
            russianName: era.russianName,
            percentProgress: eraResult.score,
            numberOfQuestions: eraResult.total,
            imageName: era.image.imageName,
            description: era.description
        }
    })
    
    let newInfo = info;
    newInfo.push(info[0])
    newInfo.push(info[0])
    newInfo.push(info[0])

    const cardClick = (index) => () =>{
        createOnClickItemAge(eras[index].idEra)
    }

    return (
        <PanelWrapper id={id} headerText="Выбирете эпоху" isHeaderFixed={true}>

                <div className="ListAge__content">
                    <ListCard
                        info={newInfo}
                        cardClick={cardClick}>
                    </ListCard>
                </div>

        </PanelWrapper>
    )
}

export default ListAge;
