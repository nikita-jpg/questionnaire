import { Div, Panel, PanelHeader } from '@vkontakte/vkui';
import React from 'react';
import PropTypes from 'prop-types';

import "./Quiz.css"

const Quiz = props => (
    <Panel id={props.id}>
        <Div className="Quiz">
            <Div className="Quiz__background-img "></Div>

            <Div className="Quiz__content">
                <PanelHeader left={
                    <h1 className="Quiz__title">
                        Насколько ты гей?
                    </h1>
                } transparent={true} separator={false}></PanelHeader>

                
            </Div>
        </Div>
    </Panel>
);

Quiz.propTypes = {
    id: PropTypes.string.isRequired
}

export default Quiz;
