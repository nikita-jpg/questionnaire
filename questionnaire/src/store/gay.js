//// картинки к тесту про гея ////
/// Вопросы
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
/// Результаты теста

// 0 баллов
import resBack from '../img/how_gay_are_you/r_back.jpg';
// 1-3 балла
import natural from '../img/how_gay_are_you/r_natural.jpg';
// 4-5 баллов
import garri from '../img/how_gay_are_you/r_garri.jpg';
// 6-7 баллов
import stopper from '../img/how_gay_are_you/r_stopper.jpg';
// >=8 баллов
import drink from '../img/how_gay_are_you/r_drink.jpg';

const quizGay = {
    title: "Насколько вы гей?",
    img: imgHowGayAreYou,
    imgBackground: imgHowGayAreYouBack,
    maxScore: 8,
    quetions: [
        // Вопрос 1
        {
            questionImgBack : gaetanDugaBack,
            questionImg:  gaetanDuga,
            questionText: "Знакомый пригласил тебя на аниме «Первый мститель», твои действия:",
            answerOptions: [
                {
                    text: "С лёгкостью приму приглашение, даже не подумав, что он может оказаться геем",
                    score: 0.5
                },
                {
                    text: "Соглашусь с надеждой, что он может оказаться геем и мы станем парой",
                    score: 1
                },
                {
                    text: "Категорически откажусь",
                    score: 0
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
                    text: "Левые",
                    score: 1
                },
                {
                    text: "Правые",
                    score: 1
                },
                {
                    text: "Тоталитаризм",
                    score: -1
                },
                {
                    text: "Либертарианство",
                    score: 1
                }
            ]
        },
        // Вопрос 3
        {
            questionImgBack : cobainBack,
            questionImg:  cobain,
            questionText: "Как ты себя чувствуете в обществе одних мужчин:",
            answerOptions: [
                {
                    text: "Легко и уверенно",
                    score: 0
                },
                {
                    text: "Испытывю постоянно неловкость и напряжения",
                    score: 0.5
                },
                {
                    text: "Испытываете удовольствие (даже от одной мысли, что рядом одни мужчины)",
                    score: 1
                }
            ]
        },
        // Вопрос 4
        {
            questionImgBack : supplyBack,
            questionImg:  supply,
            questionText: "Часто ли ты с друзьями шутишь про маструбацию и письки?",
            answerOptions: [
                {
                    text: "Регулярно. Весело же",
                    score: 0
                },
                {
                    text: "Мы про это не шутим, мы нормальные люди",
                    score: 1
                },
                {
                    text: "Редко",
                    score: 0.5
                }
            ]
        },
        // Вопрос 5
        {
            questionImgBack : bazookaBack,
            questionImg:  bazooka,
            questionText: "Ходишь ли ты в качалку?",
            answerOptions: [
                {
                    text: "Делаю там кардиo и oстальнoе без фанатизма",
                    score: 1
                },
                {
                    text: "Нет, не хожу",
                    score: 0
                },
                {
                    text: "Настoящий мужчина дoлжен быть накаченым и сильным как Van Darkholme на фоне.",
                    score: 2
                }
            ]
        },
        // Вопрос 6
        {
            questionImgBack : steuerradBack,
            questionImg:  steuerrad,
            questionText: "Ты знаешь про Голландский штурвал?",
            answerOptions: [
                {
                    text: "Знаю",
                    score: 0
                },
                {
                    text: "Hичего не знаю, но загуглю",
                    score: 0
                },
                {
                    text: "Ничего не знаю и гуглить не буду (Правда не буду!)",
                    score: 2
                }
            ]
        },
        // Вопрос 7
        {
            questionImgBack : ussrBack,
            questionImg:  ussr,
            questionText: "В детстве ты ходил с мальчиками, взявшись за руки?",
            answerOptions: [
                {
                    text: "Да",
                    score: 1
                },
                {
                    text: "Нет",
                    score: 0
                }
            ]
        },
        // Вопрос 8
        {
            questionImgBack : pringlesBack,
            questionImg:  pringles,
            questionText: "Тебе нравится творчество LOBODA-ы?",
            answerOptions: [
                {
                    text: "Да",
                    score: 0
                },
                {
                    text: "Нет",
                    score: 1
                }
            ]
        },
    ],
    results: [
        // min, max в абсолютном значении (включительно)
        //0 баллов
        {
            min: -Infinity,
            max: 0,
            text: "Ты гей всего на {%percent%}%. Ты на столько вошёл в роль натурала ,что уже не мыслшь иначе, но ты гей.",
            backgroundImage: resBack,
            image: natural,
            historyImage: natural,
            wallImage: natural
        },
        // 1-3 балла
        {
            min: 1,
            max: 3,
            text: "Ты гей всего на {%percent%}%. Округляем, получаем 0.",
            backgroundImage: resBack,
            image: natural,
            historyImage: natural,
            wallImage: natural
        },
        // 4-5 баллов
        {
            min: 4,
            max: 5,
            text: "Вы гей на {%percent%}%. Латентный гомосексуалист.  Задумайся, возможно тебе стоит переехать туда, где ты сможешь быть самим собой",
            backgroundImage: resBack,
            image: garri,
            historyImage: natural,
            wallImage: natural
        },
        // 6-7 баллов
        {
            min: 6,
            max: 7,
            text: "Вы гей на {%percent%}%. Ты не босс качалки, но и не факинг слэйв",
            backgroundImage: resBack,
            image: stopper,
            historyImage: natural,
            wallImage: natural
        },
        // >=8 баллов
        {
            min: 8,
            max: Infinity,
            text: "Ты гей на {%percent%}%. Амбасадор слова “гомосексуалист” в СНГ. ",
            backgroundImage: resBack,
            image: drink,
            historyImage: natural,
            wallImage: natural
        }
    ]
}

export default quizGay;
