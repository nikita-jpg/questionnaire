import { Panel } from '@vkontakte/vkui';
import React from 'react';
import ListCard from '../../components/ListCard/ListCard'

import './ListQuizes.css';
import Header from '../../components/Header/Header';

const ListQuizes = ({ id, curWidth, title, quizes, onBack = () => { }, createOnClickItemQuizes = (index) => null }) => {

    return (
        <Panel id={id}>
            <div className="ListQuizes">

                <Header
                    curWidth={curWidth}
                    leftBtnFunc={onBack}
                    title={title}
                >
                </Header>

                <ListCard
                    info={quizes}
                    curWidth={curWidth}
                    cardClick={createOnClickItemQuizes}
                />

            </div>
        </Panel>
    );
}

export default ListQuizes;
