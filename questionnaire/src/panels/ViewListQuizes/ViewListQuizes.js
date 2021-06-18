import { Icon24Back, Icon28AddOutline } from '@vkontakte/icons';
import { Panel, PanelHeader, View, PanelHeaderBack, PanelHeaderButton} from '@vkontakte/vkui';
import React from 'react';
import ListQuizes from '../../components/ListQuizes/ListQuizes';

import './ViewListQuizes.css';
import { getColNumber, isTitleCentre } from '../../help';

{/* <div className="ViewListQuizes__header-left">
<Icon24Back onClick={onBack} fill="white" />
</div> */}

const ViewListQuizes = ({ id, curWidth, title, quizes, onBack = () => { }, createOnClickItemQuizes = (index) => null }) => {
    const ID_ACTIVE_PANEL = `${id}-0`;

    return (
        <View id={id} activePanel={ID_ACTIVE_PANEL}>
            <Panel id={ID_ACTIVE_PANEL}>
                <div className="ViewListQuizes">
                <PanelHeader                     
                    separator={false}
                    visor={true}
                    transparent={true}
                    fixed={false}
                    // Центрируем надпись
                    left={
                        isTitleCentre(curWidth,<PanelHeaderBack onClick={onBack} className="ViewListQuizes__bacl"></PanelHeaderBack>).stub
                    }
                    style={isTitleCentre(curWidth).text}
                    >{title}
                </PanelHeader>
                
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
