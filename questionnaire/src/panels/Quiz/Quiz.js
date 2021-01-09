import { Button, Div, Panel, PanelHeaderSimple } from '@vkontakte/vkui';
import React from 'react';
import PropTypes from 'prop-types';

import "./Quiz.css"
import { Icon16ChevronLeft, Icon16Chevron } from '@vkontakte/icons';

const Quiz = ({ id, quizze, goLeftQuiz, goRightQuiz, hasRightQuiz, hasLeftQuiz }) => {
    console.log(quizze)

    const styleChevron = {
        width: 36,
        height: 36,
        fill: "white"
    }

    const styleBackgroundImg = {
        backgroundImage: "url(" + quizze.img + ")"
    }

    return (
        <Panel id={id} separator={false}>
            <PanelHeaderSimple left={
                <h1 className="Quiz__title">
                    {quizze.title}
                </h1>
            } separator={false} visor={false} transparent={true}></PanelHeaderSimple>

            <Div className="Quiz">
                <Div className="Quiz__background-img" style={styleBackgroundImg}></Div>
                <Div className="Quiz__content">
                    <div className="Quiz__carousel">
                        <button 
                            onClick={goLeftQuiz} 
                            className={`Quiz__carousel-button ${hasLeftQuiz ?"" :"Quiz__carousel-button_invisible" }`}
                        >
                            <Icon16ChevronLeft {...styleChevron} />
                        </button>

                        <img className="Quiz__carousel-img" src={quizze.img} alt={id} />

                        <button 
                            onClick={goRightQuiz} 
                            className={`Quiz__carousel-button ${hasRightQuiz ?"" :"Quiz__carousel-button_invisible" }`}
                        >
                            <Icon16Chevron {...styleChevron} />
                        </button>
                    </div>

                    <Button className="Quiz__button-take-survey" mode="overlay_secondary">Пройти опрос</Button>
                </Div>
            </Div>
        </Panel>
    )
};

Quiz.propTypes = {
    id: PropTypes.string.isRequired
}

export default Quiz;
