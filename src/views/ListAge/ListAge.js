import React from 'react';
import './ListAge.css'
import ListCard from '../../components/ListCard/ListCard'
import PanelWrapper from '../../components/PanelWrapper/PanelWrapper';
import { useSelector } from 'react-redux';
import { getResultsEras } from '../../Selectors/data_selectors';


const ListAge = ({id, eras, createOnClickItemAge=index=>null}) => {
 
    const eraResults = useSelector(getResultsEras);

    const info = eras.map((era)=>{
        let eraResult = eraResults.filter((eraResult)=>eraResult.idEra === era.idEra)[0]
        return {
            russianName: era.russianName,
            percentProgress: eraResult.score,
            numberOfQuestions: eraResult.total,
            imageName: era.image.imageName,
            imgSource: era.image.sourceImageLink,
            description: era.description
        }
    })
    
    let newInfo = info;

    const cardClick = (index) => () =>{
        createOnClickItemAge(eras[index].idEra)
    }

    return (
        <PanelWrapper id={id} headerText="Выберите эпоху" isHeaderFixed={true}>

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
