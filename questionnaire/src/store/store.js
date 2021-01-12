// картинки к тесту про гея
import imgHowGayAreYou from "../img/how_gay_are_you/HowGayAreYou.png";
import imgHowGayAreYouBack from "../img/how_gay_are_you/HowGayAreYouBack.png";
import gaetanDuga from "../img/how_gay_are_you/Gaetan Duga.png";
import nolanDiagram from '../img/how_gay_are_you/nolan diagram.png';

import test_back from "../img/test_back.png";
import test from "../img/test.png";

const store = {
    quizzes: [
        {
            title: "Насколько вы гей?",
            img: imgHowGayAreYou,
            imgBackground: imgHowGayAreYouBack,
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
            img: test,
            imgBackground: test_back,
            quetions: [
                "21",
                "22",
            ]
        },
        {
            title: "Опрос3",
            img: test,
            imgBackground: test_back,
            quetions: [
                "31"
            ]
        }
    ]
}

export default store;
