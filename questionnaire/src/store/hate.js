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

// то что не импортировал
import KarKarich from "../img/villains/KarKarich.jpg";
import KarKarichBack from "../img/villains/KarKarichBack.jpg";

import Innocent from "../img/villains/Innocent.jpg";
import InnocentBack from "../img/villains/InnocentBack.jpg";

import Piece from "../img/villains/Piece.jpg";
import PieceBack from "../img/villains/PieceBack.jpg";

import Institute from "../img/villains/Institute.jpg";
import InstituteBack from "../img/villains/InstituteBack.jpg";

import Batman from "../img/villains/Batman.jpg";
import BatmanBack from "../img/villains/BatmanBack.jpg";

import Treachery from "../img/villains/Treachery.jpg";
import TreacheryBack from "../img/villains/TreacheryBack.jpg";

import Sherlock from "../img/villains/Sherlock.jpg";
import SherlockBack from "../img/villains/SherlockBack.jpg";

import resCupcake from "../img/villains/r_Cupcake.jpg";

import resVolanDeMort from "../img/villains/r_VolanDeMort.jpg";

import resVenom from "../img/villains/r_Venom.jpg";

import resIvan from "../img/villains/r_Ivan.jpg";

import resJoker from "../img/villains/r_Joker.jpg";

const quizHate = {
    title: "Сколько в тебе ненависти?",
    img: KarKarich,
    imgBackground: KarKarichBack,
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
            questionImgBack: InnocentBack,
            questionImg: Innocent,
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
            questionImgBack: PieceBack,
            questionImg: Piece,
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
            questionImgBack: InstituteBack,
            questionImg: Institute,
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
            questionImgBack: BatmanBack,
            questionImg: Batman,
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
            questionImgBack: TreacheryBack,
            questionImg: Treachery,
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
            questionImgBack: SherlockBack,
            questionImg: Sherlock,
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
            text: "Ты кексик. Красивый снаружи и вкусный внутри. В тебе нет совершенно ничего плохоко *обнимашки*",
            backgroundImage: resBack,
            image: resCupcake,
            historyImage: resCupcake,
            wallImage: resCupcake
        },
        {
            min: 1,
            max: 3,
            text: "Ты голубой, и не только по цвету кожи. Всё, на что ты годишься - гоняться за детьми в попытках осуществить свои злодияния.",
            backgroundImage: resBack,
            image: resVolanDeMort,
            historyImage: resVolanDeMort,
            wallImage: resVolanDeMort
        },
        {
            min: 4,
            max: 5,
            text: "Веном. Большой. Чёрный. Любишь  Гэнг-бэнг. Это всё, что можно о тебе сказать",
            backgroundImage: resBack,
            image: resVenom,
            historyImage: resVenom,
            wallImage: resVenom
        },
        {
            min: 6,
            max: 7,
            text: "Иван Ванко. Твоя мотивация проста как ведро огурцов, а решение напасть на миллиардера в месте, где более сотни вооружённых охранников и имея из защиты лишь штаны и крутые тату на почти голом торсе, вызывает уважение.",
            backgroundImage: resBack,
            image: resIvan,
            historyImage: resIvan,
            wallImage: resIvan
        },
        {
            min: 8,
            max: Infinity,
            text: "Джокер. Ты злодей принципиально нового уровня. Идеологический. Ты верищь в свою правоту, верищь, что творишь добро, творя зло.",
            backgroundImage: resBack,
            image: resJoker,
            historyImage: resJoker,
            wallImage: resJoker
        }
    ]
}

export default quizHate;