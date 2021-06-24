import { Panel } from '@vkontakte/vkui';
import React from 'react';
import ListQuizes from '../ListQuizes/ListQuizes';

import './ViewListQuizes.css';
import Header from '../../components/Header/Header';

const ViewListQuizes = ({ id, curWidth, title, quizes, onBack = () => { }, createOnClickItemQuizes = (index) => null }) => {

    return (
        <Panel id={id}>
            <div className="ViewListQuizes">

                <Header
                    curWidth={curWidth}
                    hasBatton={true}
                    onBack={onBack}
                    title={title}
                >
                </Header>

                <ListQuizes
                    quizes={quizes}
                    curWidth={curWidth}
                    createOnClickItemQuizes={createOnClickItemQuizes}
                />

            </div>
        </Panel>
    );
}

export default ViewListQuizes;
