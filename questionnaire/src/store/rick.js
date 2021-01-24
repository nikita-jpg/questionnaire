//Постер
import Stalin from "../img/rick/Stalin.jpg";
import StalinBack from "../img/rick/StalinBack.jpg";
// картинки к тесту про злодея
//Гитара
import Guitar from "../img/rick/Guitar.jpg";
import GuitarBack from "../img/rick/GuitarBack.jpg";
//SCHWIF
import SCHWIF from "../img/rick/SCHWIF.jpg";
import SCHWIFBack from "../img/rick/SCHWIFBack.jpg";
//Грязный рот
import DirtyMouth from "../img/rick/DirtyMouth.jpg";
import DirtyMouthBack from "../img/rick/DirtyMouthBack.jpg";
//Закат
import Sunset from "../img/rick/Sunset.jpg";
import SunsetBack from "../img/rick/SunsetBack.jpg";
//Огурец
import Cucumber from "../img/rick/Cucumber.jpg";
import CucumberBack from "../img/rick/CucumberBack.jpg";
//3 Рика
import ThreeRick from "../img/rick/ThreeRick.jpg";
import ThreeRickBack from "../img/rick/ThreeRickBack.jpg";
//Осьминог
import Octopus from "../img/rick/Octopus.jpg";
import OctopusBack from "../img/rick/OctopusBack.jpg";
//Наушники
import Headphones from "../img/rick/Headphones.jpg";
import HeadphonesBack from "../img/rick/HeadphonesBack.jpg";

//Результаты
import resBack from '../img/rick/r_back.jpg';
//Рик
import resRick from '../img/rick/r_Rick.jpg';
//Саммер
import resSummer from '../img/rick/r_Summer.jpg';
//Бет
import resBet from '../img/rick/r_Bet.jpg';
//Джерри
import resJerri from '../img/rick/r_Jerri.jpg';
//Морти
import resMorti from '../img/rick/r_Morti.jpg';


const quizHate = {
    title: "Кто ты в мульт сериале Рик и Морти?",
    img: Stalin,
    imgBackground: StalinBack,
    maxScore: 8,
    quetions: [
        // Вопрос 1
        {
            questionImgBack: GuitarBack,
            questionImg: Guitar,
            questionText: "Если бы ты был в составе Рик - Рок группы то на каком бы инструменте играл ?",
            answerOptions: [
                {
                    text: "На ударных",
                    score: 0.5
                },
                {
                    text: "Конечно на бас-гитаре",
                    score: 1
                },
                {
                    text: "Был бы вакалистом",
                    score: 0
                }
            ]
        },
        // Вопрос 2
        {
            questionImgBack: SCHWIFBack,
            questionImg: SCHWIF,
            questionText: "Ты вернулися после очередного асквончительного приключения. Что будишь делать?",
            answerOptions: [
                {
                    text: "Лягу на диван и буду смотреть межпространственное кабельное.",
                    score: 1
                },
                {
                    text: "Пойду создавать новые пушки для Майкла.",
                    score: 1
                },
                {
                    text: "Телепортирую Цитадель Риков в тюрьму Федерации ведь это так весело.",
                    score: -1
                },
                {
                    text: "Хах. Приключения только начинаются ...",
                    score: -1
                }
            ]
        },
        // Вопрос 3
        {
            questionImgBack: DirtyMouthBack,
            questionImg: DirtyMouth,
            questionText: "Какой ты фрукт/овощ?",
            answerOptions: [
                {
                    text: "Ораматная дыня",
                    score: 0
                },
                {
                    text: "Дурьян с одекалоном",
                    score: 0.5
                },
                {
                    text: "Обычный",
                    score: 1
                },
                {
                    text: "Истиный огурец",
                    score: 1
                }
            ]
        },
        // Вопрос 4
        {
            questionImgBack: SunsetBack,
            questionImg: Sunset,
            questionText: "Какова цель твоих невероятных путишествий?",
            answerOptions: [
                {
                    text: "Цели нет есть лишь кайф",
                    score: 0
                },
                {
                    text: "Это постоянная погоня за острыми ощущениями",
                    score: 1
                },
                {
                    text: "Во всем есть цель...",
                    score: 0.5
                }
            ]
        },
        // Вопрос 5
        {
            questionImgBack: CucumberBack,
            questionImg: Cucumber,
            questionText: "Ты попал в передрягу из которой тебе просто так не уйти. Каким способом ты фальсифицируешь свою смерть?",
            answerOptions: [
                {
                    text: "Нет таких проблем которые нельзя решить при помощи пушек!",
                    score: 1
                },
                {
                    text: "Конечно воспользуюсь баком с кислотой.",
                    score: 0
                },
                {
                    text: "Мистер Мисикс спешит на помощь!",
                    score: 2
                }
            ]
        },
        // Вопрос 6
        {
            questionImgBack: ThreeRickBack,
            questionImg: ThreeRick,
            questionText: "Кто твой лучший друг?",
            answerOptions: [
                {
                    text: "У меня нет друзей",
                    score: 0
                },
                {
                    text: "Птичья личность",
                    score: 0
                },
                {
                    text: "Мистер Жопосранчик",
                    score: 0
                },
                {
                    text: "Сквончи",
                    score: 0
                }
            ]
        },
        // Вопрос 7
        {
            questionImgBack: OctopusBack,
            questionImg: Octopus,
            questionText: "Тебе нравятся формы жизни контралирующие разум?",
            answerOptions: [
                {
                    text: "Да",
                    score: 1
                },
                {
                    text: "Смотря какие",
                    score: 0
                },
                {
                    text: "Нет",
                    score: 0
                },
                {
                    text: "Присоединяйся...",
                    score: 0
                }
            ]
        },
        // Вопрос 8
        {
            questionImgBack: HeadphonesBack,
            questionImg: Headphones,
            questionText: "Какая песня твоя любимая?",
            answerOptions: [
                {
                    text: "Пора швифтануться",
                    score: 0
                },
                {
                    text: "Goodbye Moonmen",
                    score: 1
                },
                {
                    text: "Нуб нуб",
                    score: 1
                },
                {
                    text: "Танец Рика",
                    score: 1
                }
            ]
        }
    ],
    results: [
        {
            min: -Infinity,
            max: 0,
            text: "Вы Рик ! Так как явно отвечали на вопросы в настроении “отвали”.",
            backgroundImage: resBack,
            image: resRick,
            historyImage: resRick,
            wallImage: resRick
        },
        {
            min: 1,
            max: 3,
            text: "Вы Саммер!",
            backgroundImage: resBack,
            image: resSummer,
            historyImage: resSummer,
            wallImage: resSummer
        },
        {
            min: 4,
            max: 5,
            text: "Вы Бет!",
            backgroundImage: resBack,
            image: resBet,
            historyImage: resBet,
            wallImage: resBet
        },
        {
            min: 6,
            max: 7,
            text: "Вы Джери!",
            backgroundImage: resBack,
            image: resJerri,
            historyImage: resJerri,
            wallImage: resJerri
        },
        {
            min: 8,
            max: Infinity,
            text: "Вы Морти!",
            backgroundImage: resBack,
            image: resMorti,
            historyImage: resMorti,
            wallImage: resMorti
        }
    ]
}

export default quizHate;