import { Icon24Back, Icon28AddOutline } from '@vkontakte/icons';
import { Panel, PanelHeader, View, PanelHeaderBack, PanelHeaderButton} from '@vkontakte/vkui';
import React from 'react';
import ListQuizes from '../ListQuizes/ListQuizes';

import './ViewListQuizes.css';
import { getColNumber, isTitleCentre } from '../../help';

{/* <div className="ViewListQuizes__header-left">
<Icon24Back onClick={onBack} fill="white" />
</div> */}

const ViewListQuizes = ({ id, curWidth, title, quizes, history, onBack = () => { }, createOnClickItemQuizes = (index) => null, onSwipeBack= () => { } }) => {
    const ID_ACTIVE_PANEL = `${id}-0`;

    return (
        <Panel id={id}>
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
                    curWidth={curWidth}
                    createOnClickItemQuizes={createOnClickItemQuizes}
                />
            </div>
        </Panel>
    );
}

export default ViewListQuizes;
