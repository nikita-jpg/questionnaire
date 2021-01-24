//Постер
import Stalin from "../img/hate/Stalin.jpg";
import StalinBack from "../img/hate/StalinBack.jpg";
// картинки к тесту про злодея
//ТикТок
import TikTok from "../img/hate/TikTok.jpg";
import TikTokBack from "../img/hate/TikTokBack.jpg";
//Мусор
import Trash from "../img/hate/Trash.jpg";
import TrashBack from "../img/hate/TrashBack.jpg";
//Оружие
import Gun from "../img/hate/Gun.jpg";
import GunBack from "../img/hate/GunBack.jpg";
//Цвет
import Color from "../img/hate/Color.jpg";
import ColorBack from "../img/hate/ColorBack.jpg";
//Чувак
import Dude from "../img/hate/Dude.jpg";
import DudeBack from "../img/hate/DudeBack.jpg";
//KFC
import KFC from "../img/hate/KFC.jpg";
import KFCBack from "../img/hate/KFCBack.jpg";
//Долматинцы
import Dalmatian from "../img/hate/Dalmatian.jpg";
import DalmatianBack from "../img/hate/DalmatianBack.jpg";
//Котик
import Cat from "../img/hate/Cat.jpg";
import CatBack from "../img/hate/CatBack.jpg";

//Результаты
import resBack from '../img/hate/r_back.jpg';
//Котик
import resCat from '../img/hate/r_Cat.jpg';
//Червяк
import resWorm from '../img/hate/r_Worm.jpg';
//Домашнее насилие
import resHomeTyrant from '../img/hate/r_HomeTyrant.jpg';
//1984
import res1984 from '../img/hate/r_1984.jpg';


const quizHate = {
    title: "Сколько в тебе ...",
    img: Stalin,
    imgBackground: StalinBack,
    maxScore: 8,
    quetions: [
        // Вопрос 1
        {
            questionImgBack: TikTokBack,
            questionImg: TikTok,
            questionText: "Тебе нравится тик-ток?",
            answerOptions: [
                {
                    text: "Да",
                    score: 0.5
                },
                {
                    text: "Нет",
                    score: 1
                },
                {
                    text: "Что это такое? *Идёт в пещеру разводить огонь трением палочек*",
                    score: 0
                }
            ]
        },
        // Вопрос 2
        {
            questionImgBack: TrashBack,
            questionImg: Trash,
            questionText: "Что ты делаешь, если тебе хамят?",
            answerOptions: [
                {
                    text: "Отвечаю тем же",
                    score: 1
                },
                {
                    text: "Корректно ставлю человека на место",
                    score: 1
                },
                {
                    text: "Очень некорректно ставлю человека на место",
                    score: -1
                }
            ]
        },
        // Вопрос 3
        {
            questionImgBack: GunBack,
            questionImg: Gun,
            questionText: "Выбери вид оружия",
            answerOptions: [
                {
                    text: "Нож",
                    score: 0
                },
                {
                    text: "Взрывчатка",
                    score: 0.5
                },
                {
                    text: "Пистолет",
                    score: 1
                }
            ]
        },
        // Вопрос 4
        {
            questionImgBack: ColorBack,
            questionImg: Color,
            questionText: "Выбери цвет",
            answerOptions: [
                {
                    text: "Зелёный",
                    score: 0
                },
                {
                    text: "Красный",
                    score: 1
                },
                {
                    text: "Чёрный",
                    score: 0.5
                }
            ]
        },
        // Вопрос 5
        {
            questionImgBack: DudeBack,
            questionImg: Dude,
            questionText: "Какой жанр в кинематографе ты предпочитаешь?",
            answerOptions: [
                {
                    text: "Комедия",
                    score: 1
                },
                {
                    text: "Ужасы",
                    score: 0
                },
                {
                    text: "Фантастика",
                    score: 2
                }
            ]
        },
        // Вопрос 6
        {
            questionImgBack: KFCBack,
            questionImg: KFC,
            questionText: "'Черный юмор' по-твоему - это...?",
            answerOptions: [
                {
                    text: "Не люблю",
                    score: 0
                },
                {
                    text: "Прекрасно",
                    score: 0
                }
            ]
        },
        // Вопрос 7
        {
            questionImgBack: DalmatianBack,
            questionImg: Dalmatian,
            questionText: "Какой персонаж тебе импонирует?",
            answerOptions: [
                {
                    text: "Джек Воробей",
                    score: 1
                },
                {
                    text: "Добби",
                    score: 0
                },
                {
                    text: "Стервелла Де Виль (Панин для долматинцев)",
                    score: 0
                }
            ]
        },
        // Вопрос 8
        {
            questionImgBack: CatBack,
            questionImg: Cat,
            questionText: "Ты любишь котиков?",
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
        }
    ],
    results: [
        {
            min: -Infinity,
            max: 0,
            text: "Ты ненавистен всего на 0%. Ты котя. Мяяяяя",
            backgroundImage: resBack,
            image: resCat,
            historyImage: resCat,
            wallImage: resCat
        },
        {
            min: 1,
            max: 3,
            text: "Ты ненавистен всего на {%percent%}%. Округляем, получаем 0. Ты котя. Мяяяяя",
            backgroundImage: resBack,
            image: resCat,
            historyImage: resCat,
            wallImage: resCat
        },
        {
            min: 4,
            max: 5,
            text: "Ты ненавистен всего {%percent%}%. Латентный тиран. Задумайся, возможно тебе стоит сходить к психологу, это поможет тебе решить твои внутренние проблемы",
            backgroundImage: resBack,
            image: resWorm,
            historyImage: resWorm,
            wallImage: resWorm
        },
        {
            min: 6,
            max: 7,
            text: "Ты ненавистен всего {%percent%}%. Ты открытый тиран. Злодействуешь, вредишь людям. И это ооочень плохо",
            backgroundImage: resBack,
            image: resHomeTyrant,
            historyImage: resHomeTyrant,
            wallImage: resHomeTyrant
        },
        {
            min: 8,
            max: Infinity,
            text: "Ты ненавистен всего {%percent%}%. Амбасадор слова “тиран” в СНГ. В аду для тебя и Сталина приготовлен личный ГУЛАГ",
            backgroundImage: resBack,
            image: res1984,
            historyImage: res1984,
            wallImage: res1984
        }
    ]
}

export default quizHate;