import { Icon24Back } from '@vkontakte/icons';
import { Panel, PanelHeader, View } from '@vkontakte/vkui';
import React from 'react';
import ItemListQuizes from './ItemListQuizes/ItemListQuizes';

import './ListQuizes.css';

const ListQuizes = ({ id, title, quizes, onBack = () => { }, createOnClickItemQuizes = (index) => null }) => {
    const ID_ACTIVE_PANEL = `${id}-0`;

    return (
        <View id={id} activePanel={ID_ACTIVE_PANEL}>
            <Panel id={ID_ACTIVE_PANEL}>
                <PanelHeader
                    left={
                        <div className="ListQuizes__header-left">
                            <Icon24Back onClick={onBack} fill="white" />
                            <h1 className="ListQuizes__title">{title}</h1>
                        </div>
                    }
                    className="ListQuizes__header"
                    visor={true}
                    transparent={true}
                    separator={false}
                >
                </PanelHeader>

                <ul className="ListQuizes">
                    {
                        quizes.map((quiz, i) => (
                            <ItemListQuizes
                                key={i}
                                image={quiz.image}
                                title={quiz.title}
                                onClick={createOnClickItemQuizes(i)}
                                percentProgress={quiz.percentProgress}
                            />
                        ))
                    }
                </ul>
            </Panel>
        </View>
    );
}

export default ListQuizes;
