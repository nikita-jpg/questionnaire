// картинки к тесту про гея
import imgHowGayAreYou from "../img/how_gay_are_you/how_gay_are_you.png";
import gaetanDuga from "../img/how_gay_are_you/Gaetan Duga.png";
import nolanDiagram from '../img/how_gay_are_you/nolan diagram.png';

import img_test from "../img/img_test.png";

const store = {
    quizzes: [
        {
            title: "Насколько вы гей?",
            img: imgHowGayAreYou,
            quetions: [
                {
                    questionImg:  gaetanDuga,
                    questionText: "Знакомый пригласил вас на аниме «Первый мститель», ваши действия:",
                    answerOptions: [
                        {
                            text: "С легкостью примите приглашение, даже не подумав, что он может оказаться геем"
                        },
                        {
                            text: "Согласитесь с надеждой, что он может оказаться геем и вы станете парой"
                        },
                        {
                            text: "Категорически откажитесь"
                        }
                    ]
                },
                {
                    questionImg:  nolanDiagram,
                    questionText: "Твои политические убеждения?",
                    answerOptions: [
                        {
                            text: "Левые"
                        },
                        {
                            text: "Правые"
                        },
                        {
                            text: "Тоталитаризм"
                        },
                        {
                            text: "Либертарианство"
                        }
                    ]
                }
            ]
        },
        {
            title: "Опрос2",
            img: img_test,
            quetions: [
                "21",
                "22",
            ]
        },
        {
            title: "Опрос3",
            img: img_test,
            quetions: [
                "31"
            ]
        }
    ]
}

export default store;
