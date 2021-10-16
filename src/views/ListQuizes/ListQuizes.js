import { Panel } from '@vkontakte/vkui';
import React from 'react';
import ListCard from '../../components/ListCard/ListCard'

import './ListQuizes.css';
import Header from '../../components/Header/Header';
import PanelWrapper from '../../components/PanelWrapper/PanelWrapper';
import { useDispatch } from 'react-redux';

const ListQuizes = ({ id, title, quizes, onBack = () => { },goToSurveyView, createOnClickItemQuizes = (index) => null }) => {

    const dispath = useDispatch()

    return (
        <PanelWrapper id={id} headerText={title} onHeaderBack={onBack} isHeaderFixed={true}>

            <div className="ListQuizes">
                <ListCard
                    info={quizes}
                    cardClick={ ()=>createOnClickItemQuizes}
                />
            </div>

        </PanelWrapper>
    );
}

export default ListQuizes;