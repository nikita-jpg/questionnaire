import { Panel } from '@vkontakte/vkui';
import React from 'react';
import ListCard from '../../components/ListCard/ListCard'

import './ListQuizes.css';
import Header from '../../components/Header/Header';
import PanelWrapper from '../../components/PanelWrapper/PanelWrapper';

const ListQuizes = ({ id, title, quizes, onBack = () => { }, createOnClickItemQuizes = (index) => null }) => {

    console.log(title[0])

    return (
        <PanelWrapper id={id} headerText={title} onHeaderBack={onBack} isHeaderFixed={true}>

            <div className="ListQuizes">
                <ListCard
                    info={quizes}
                    cardClick={createOnClickItemQuizes}
                />
            </div>

        </PanelWrapper>
    );
}

export default ListQuizes;
