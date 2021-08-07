import { Panel } from '@vkontakte/vkui';
import React from 'react';
import ListCard from '../../components/ListCard/ListCard'

import './ListQuizes.css';
import Header from '../../components/Header/Header';
import PanelWrapper from '../../components/PanelWrapper/PanelWrapper';

const ListQuizes = ({ id, curWidth, title, quizes, onBack = () => { }, createOnClickItemQuizes = (index) => null }) => {

    return (
        <PanelWrapper id={id} headerText={title} onHeaderBack={onBack}>
            <div className="ListQuizes">

                {/* <Header
                    leftBtnFunc={onBack}
                    text={title}
                >
                </Header> */}

                <ListCard
                    info={quizes}
                    cardClick={createOnClickItemQuizes}
                />

            </div>
        </PanelWrapper>
    );
}

export default ListQuizes;
