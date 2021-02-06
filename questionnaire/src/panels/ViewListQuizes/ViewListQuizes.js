import { Icon24Back } from '@vkontakte/icons';
import { Panel, PanelHeader, View } from '@vkontakte/vkui';
import React from 'react';
import ListQuizes from '../../components/ListQuizes/ListQuizes';

import './ViewListQuizes.css';

const ViewListQuizes = ({ id, title, quizes, onBack = () => { }, createOnClickItemQuizes = (index) => null }) => {
    const ID_ACTIVE_PANEL = `${id}-0`;

    return (
        <View id={id} activePanel={ID_ACTIVE_PANEL}>
            <Panel id={ID_ACTIVE_PANEL}>
                <PanelHeader
                    left={
                        <div className="ViewListQuizes__header-left">
                            <Icon24Back onClick={onBack} fill="white" />
                            <h1 className="ViewListQuizes__title">{title}</h1>
                        </div>
                    }
                    className="ViewListQuizes__header"
                    visor={true}
                    transparent={true}
                    separator={false}
                >
                </PanelHeader>

                <div className="ViewListQuizes">
                    <ListQuizes
                        quizes={quizes}
                        createOnClickItemQuizes={createOnClickItemQuizes}
                    />
                </div>
            </Panel>
        </View>
    );
}

export default ViewListQuizes;
