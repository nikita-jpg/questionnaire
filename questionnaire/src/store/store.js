/// картинки к тесту про гея
//Постер
import imgHowGayAreYou from "../img/how_gay_are_you/HowGayAreYou.jpg";
import imgHowGayAreYouBack from "../img/how_gay_are_you/HowGayAreYouBack.jpg";
//Дюга
import gaetanDuga from "../img/how_gay_are_you/Gaetan Duga.jpg";
import gaetanDugaBack from "../img/how_gay_are_you/Gaetan Duga Back.jpg";
//Диаграмма
import nolanDiagram from '../img/how_gay_are_you/Nolan Diagram.jpg';
import nolanDiagramBack from '../img/how_gay_are_you/Nolan Diagram Back.jpg';
//Кобейн
import cobain from '../img/how_gay_are_you/Cobain.jpg';
import cobainBack from '../img/how_gay_are_you/Cobain Back.jpg';
//Суп
import supply from '../img/how_gay_are_you/Supply.jpg';
import supplyBack from '../img/how_gay_are_you/Supply Back.jpg';
//Базука
import bazooka from '../img/how_gay_are_you/Bazooka.jpg';
import bazookaBack from '../img/how_gay_are_you/Bazooka Back.jpg';
//Штурвал
import steuerrad from '../img/how_gay_are_you/Steuerrad.jpg';
import steuerradBack from '../img/how_gay_are_you/Steuerrad Back.jpg';
//СССР
import ussr from '../img/how_gay_are_you/USSR.jpg';
import ussrBack from '../img/how_gay_are_you/USSR Back.jpg';
//Принглс
import pringles from '../img/how_gay_are_you/Pringles.jpg';
import pringlesBack from '../img/how_gay_are_you/Pringles Back.jpg';

import test_back from "../img/test_back.png";
import test from "../img/test.png";

const store = {
    quizzes: [
        {
            title: "Насколько вы гей?",
            img: imgHowGayAreYou,
            imgBackground: imgHowGayAreYouBack,
            quetions: [
                // Вопрос 1
                {
                    questionImgBack : gaetanDugaBack,
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
                // Вопрос 2
                {
                    questionImgBack : nolanDiagramBack,
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
                },
                // Вопрос 3
                {
                    questionImgBack : cobainBack,
                    questionImg:  cobain,
                    questionText: "Как вы себя чувствуете в обществе одних мужчин:",
                    answerOptions: [
                        {
                            text: "Легко и уверенно"
                        },
                        {
                            text: "Испытываете постоянно неловкость и напряжения"
                        },
                        {
                            text: "испытываете удовольствие (даже от одной мысли, что рядом одни мужчины)"
                        }
                    ]
                },
                // Вопрос 4
                {
                    questionImgBack : supplyBack,
                    questionImg:  supply,
                    questionText: "Часто ли вы с друзьями шутите про маструбацию и письки?",
                    answerOptions: [
                        {
                            text: "Регулярно. Весело же"
                        },
                        {
                            text: "Мы про это не шутим, мы нормальные люди"
                        },
                        {
                            text: "Редко"
                        }
                    ]
                },
                // Вопрос 5
                {
                    questionImgBack : bazookaBack,
                    questionImg:  bazooka,
                    questionText: "Ходите ли вы в качалку?",
                    answerOptions: [
                        {
                            text: "Делаю там кардиo и oстальнoе без фанатизма"
                        },
                        {
                            text: "Нет, не хожу"
                        },
                        {
                            text: "Настoящий мужик дoлжен быть накаченым и сильным как Van Darkholme на фоне."
                        }
                    ]
                },
                // Вопрос 6
                {
                    questionImgBack : steuerradBack,
                    questionImg:  steuerrad,
                    questionText: "Что вы знаете про Голландский штурвал?",
                    answerOptions: [
                        {
                            text: "Знаю"
                        },
                        {
                            text: "Hичего не знаю, но загуглю"
                        },
                        {
                            text: "Ничего не знаю и гуглить не буду (Правда не буду!)"
                        }
                    ]
                },
                // Вопрос 7
                {
                    questionImgBack : ussrBack,
                    questionImg:  ussr,
                    questionText: "В детстве вы ходили с мальчиками, взявшись за руки?",
                    answerOptions: [
                        {
                            text: "Да"
                        },
                        {
                            text: "Нет"
                        }
                    ]
                },
                // Вопрос 8
                {
                    questionImgBack : pringlesBack,
                    questionImg:  pringles,
                    questionText: "Вам нравится творчество LOBODA-ы?",
                    answerOptions: [
                        {
                            text: "Да"
                        },
                        {
                            text: "Нет"
                        }
                    ]
                },
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
