//Постер
import Stalin from "../hate/hate/Stalin.jpg";
import StalinBack from "../hate/villains/StalinBack.jpg";
// картинки к тесту про злодея
//ТикТок
import TikTok from "../hate/villains/TikTok.jpg";
import TikTokBack from "../hate/villains/TikTokBack.jpg";
//Мусор
import Trash from "../hate/villains/Trash.jpg";
import TrashBack from "../hate/villains/TrashBack.jpg";
//Оружие
import Gun from "../hate/villains/Gun.jpg";
import GunBack from "../hate/villains/GunBack.jpg";
//Цвет
import Color from "../hate/villains/Color.jpg";
import ColorBack from "../hate/villains/ColorBack.jpg";
//Чувак
import Dude from "../hate/villains/Dude.jpg";
import DudeBack from "../hate/villains/DudeBack.jpg";
//KFC
import KFC from "../hate/villains/KFC.jpg";
import KFCBack from "../hate/villains/KFCBack.jpg";
//Долматинцы
import Dalmatian from "../hate/villains/Dalmatian.jpg";
import DalmatianBack from "../hate/villains/DalmatianBack.jpg";
//Котик
import Cat from "../hate/villains/Cat.jpg";
import CatBack from "../hate/villains/CatBack.jpg";

//Результаты
import resBack from '../hate/villains/r_back.jpg';
//Котик
import resCat from '../hate/villains/r_Cat.jpg';
//Котик
import resCat from '../hate/villains/r_Cat.jpg';
//Червяк
import resWorm from '../hate/villains/r_Worm.jpg';
//Домашнее насилие
import resHomeTyrant from '../hate/villains/r_HomeTyrant.jpg';
//1984
import res1984 from '../hate/villains/r_1984.jpg';

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