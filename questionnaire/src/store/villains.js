//Постер
import KarKarich from "../img/villains/KarKarich.jpg";
import KarKarichBack from "../img/villains/KarKarichBack.jpg";
// картинки к тесту про злодея
//Лес
import Forest from "../img/villains/Forest.jpg";
import ForestBack from "../img/villains/ForestBack.jpg";
//Копатыч
import Kopatych from "../img/villains/Kopatych.jpg";
import KopatychBack from "../img/villains/KopatychBack.jpg";
//Иннокентий
import Innocent from "../img/villains/Innocent.jpg";
import InnocentBack from "../img/villains/InnocentBack.jpg";
//Фишка
import Piece from "../img/villains/Piece.jpg";
import PieceBack from "../img/villains/PieceBack.jpg";
//Институт
import Institute from "../img/villains/Institute.jpg";
import InstituteBack from "../img/villains/InstituteBack.jpg";
//Бетмен
import Batman from "../img/villains/Batman.jpg";
import BatmanBack from "../img/villains/BatmanBack.jpg";
//Коварство
import Treachery from "../img/villains/Treachery.jpg";
import TreacheryBack from "../img/villains/TreacheryBack.jpg";
//Шерлок
import Sherlock from "../img/villains/Sherlock.jpg";
import SherlockBack from "../img/villains/SherlockBack.jpg";

//Результаты
import resBack from '../img/villains/r_back.jpg';
//Кексик
import resCupcake from '../img/villains/r_Cupcake.jpg';
//Волан-Де-Морт
import resVolanDeMort from '../img/villains/r_VolanDeMort.jpg';
//Веном
import resVenom from '../img/villains/r_Venom.jpg';
//Иван Ванко
import resIvan from '../img/villains/r_Ivan.jpg';
//Джокер
import resJoker from '../img/villains/r_Joker.jpg';


const store = {
    quizzes: [
        {
            title: "Кто вы из злодеев?",
            img: KarKarich,
            imgBackground: KarKarichBack,
            maxScore: 8,
            quetions: [
                // Вопрос 1
                {
                    questionImgBack : ForestBack,
                    questionImg:  Forest,
                    questionText: "Здесь начинается наше злодейское путешествие, вы готовы?",
                    answerOptions: [
                        {
                            text: "Интересно, насколько оно злодейское.. ",
                            score: 0.5
                        },
                        {
                            text: "Не уверен..",
                            score: 1
                        },
                        {
                            text: "Я только что подумал, почему б мне не взять с собой пару приспешников",
                            score: 0
                        },
                        {
                            text: "Да *С ножом в руке*",
                            score: 0
                        }
                    ]
                },
                // Вопрос 2
                {
                    questionImgBack : KopatychBack,
                    questionImg:  Kopatych,
                    questionText: "Во-первых! Вам нужно выбрать свое злодейское оружие в этой жуткой лачуге. Какое из них вам больше нравится?",
                    answerOptions: [
                        {
                            text: "Топор",
                            score: 1
                        },
                        {
                            text: "Пистолет",
                            score: 1
                        },
                        {
                            text: "Магия БДСМ",
                            score: -1
                        }
                    ]
                },
                // Вопрос 3
                {
                    questionImgBack : InnocentBack,
                    questionImg:  Innocent,
                    questionText: "Выберите слово, которое ассоциируется у вас с вашим злодейством!",
                    answerOptions: [
                        {
                            text: "Доминирование",
                            score: 0
                        },
                        {
                            text: "Смерть",
                            score: 0.5
                        },
                        {
                            text: "Мрак",
                            score: 1
                        }
                    ]
                },
                // Вопрос 4
                {
                    questionImgBack : PieceBack,
                    questionImg:  Piece,
                    questionText: "Каждый злодей нуждается в своей фишке, какую выберите вы?",
                    answerOptions: [
                        {
                            text: "Уродство",
                            score: 0
                        },
                        {
                            text: "Взгляд",
                            score: 1
                        },
                        {
                            text: "Смех",
                            score: 0.5
                        }
                    ]
                },
                // Вопрос 5
                {
                    questionImgBack :InstituteBack,
                    questionImg:  Institute,
                    questionText: "Ваше злодейское величество нуждается в убежище, выберите себе логово!",
                    answerOptions: [
                        {
                            text: "Пещера *смех*",
                            score: 1
                        },
                        {
                            text: "Психбольница",
                            score: 0
                        },
                        {
                            text: "Обычный дом",
                            score: 2
                        }
                    ]
                },
                // Вопрос 6
                {
                    questionImgBack : BatmanBack,
                    questionImg:  Batman,
                    questionText: "Пришло время выбрать своего первого врага",
                    answerOptions: [
                        {
                            text: "Бетмен",
                            score: 0
                        },
                        {
                            text: "Супер мен",
                            score: 0
                        },
                        {
                            text: "Представители ЛГБТ сообщества",
                            score: 2
                        }
                    ]
                },
                // Вопрос 7
                {
                    questionImgBack : Treachery,
                    questionImg:  Treachery,
                    questionText: "Итак, этот fucking slave неожиданно появился и атаковал со спины. Что будешь делать?",
                    answerOptions: [
                        {
                            text: "Ничего (¬‿¬)",
                            score: 1
                        },
                        {
                            text: "Сражаться как настоящий воин",
                            score: 0
                        },
                        {
                            text: "Попробую договориться",
                            score: 0
                        }
                    ]
                },
                // Вопрос 8
                {
                    questionImgBack : SherlockBack,
                    questionImg:  Sherlock,
                    questionText: "Произошло что-то странное. Вы почувствовали, что вас уже не так прижали к полу. Повернув голову, вы увидели эти глаза. Добрые глаза. Они кричали вам о том, что всё происходящее чистой воды безумие.",
                    answerOptions: [
                        {
                            text: "Посмотреть взглядом “Я тебя уничтожу”",
                            score: 0
                        },
                        {
                            text: "Посмотреть взглядом “Я тебя понимаю”",
                            score: 1
                        },
                        {
                            text: "Посмотреть взглядом “пойдём смотреть аниме”",
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
                    text: "Вы кексик. Красивый снаружи и вкусный внутри. В Вас нет совершенно ничего плохоко *обнимашки*",
                    backgroundImage: resBack,
                    image: resCupcake,
                    historyImage: natural,
                    wallImage: natural
                },
                // 1-3 балла
                {
                    min: 1,
                    max: 3,
                    text: "Вы голубой, и не только по цвету кожи. Всё, на что вы годитесь - гоняться за детьми в попытках осуществить свои злодияния.",
                    backgroundImage: resBack,
                    image: resVolanDeMort,
                    historyImage: natural,
                    wallImage: natural
                },
                // 4-5 баллов
                {
                    min: 4,
                    max: 5,
                    text: "Веном. Большой. Чёрный. Любишь  Гэнг-бэнг. Это всё, что можно о тебе сказать",
                    backgroundImage: resBack,
                    image: resVenom,
                    historyImage: natural,
                    wallImage: natural
                },
                // 6-7 баллов
                {
                    min: 6,
                    max: 7,
                    text: "Иван Ванко. Ваша мотивация проста как ведро огурцов, а решение напасть на миллиардера в месте, где более сотни вооружённых охранников и имея из защиты лишь штаны и крутые тату на почти голом торсе, вызывает уважение.",
                    backgroundImage: resBack,
                    image: resIvan,
                    historyImage: natural,
                    wallImage: natural
                },
                // >=8 баллов
                {
                    min: 8,
                    max: Infinity,
                    text: "Джокер. Вы злодей принципиально нового уровня. Идеологический. Вы верите в свою правоту, верите, что творите добро, творя зло.",
                    backgroundImage: resBack,
                    image: resJoker,
                    historyImage: natural,
                    wallImage: natural
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

export default villans