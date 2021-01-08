import { Div, Panel, PanelHeaderSimple } from '@vkontakte/vkui';
import React from 'react';
import PropTypes from 'prop-types';

import "./Quiz.css"

const Quiz = props => (
    <Panel id={props.id} separator={false}>
        <PanelHeaderSimple left={
            <h1 className="Quiz__title">
                Насколько вы гей?
            </h1>
        } separator={false} visor={false} transparent={true}></PanelHeaderSimple>

        <Div className="Quiz">
            <Div className="Quiz__background-img "></Div>
            <Div className="Quiz__content">
            </Div>
        </Div>
    </Panel>
);

Quiz.propTypes = {
    id: PropTypes.string.isRequired
}

export default Quiz;
