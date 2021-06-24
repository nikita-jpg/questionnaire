import imagePetr1 from "../../img/ageRussianEmpire/quizPetr1/petr.png";

import imgExample from "../../img/ageRussianEmpire/quizPetr1/Картинка.png";

import ababa from "../../img/ageRussianEmpire/main.png"

const quizPetr1 = {
    title: "Император Пётр I",
    description:"Росси́йская импе́рия (рус. дореф. Россійская имперія; также Всеросси́йская импе́рия, ца́рская Росси́я) — государство, существовавшее в период с 22 октября (2 ноября) 1721 года до Февральской революции и провозглашения республики в сентябре 1917 года Временным правительством.",
    percentProgress: 0,
    numberOfQuestions: 8,
    imageSrc: imagePetr1,
    questions: [
        {
            questionImg: imgExample,
            overSideImg: imgExample,
            questionText: "Основная причина дефолта 98-го года?",
            answerOptions: [
                {
                    text: "Лопнул пузырь ГКО (Государственные краткосрочные облигации)",
                    score: 1
                },
                {
                    text: "Отказ западных партнёров выдать кредит",
                    score: 0
                },
                {
                    text: "Решение о срочном запуске печатного станка в “ускоренном режиме",
                    score: 0
                }
            ]
        },
        {
            questionImg: imgExample,
            overSideImg: null,
            questionText: "Вопрос 2",
            answerOptions: [
                {
                    text: "1",
                    score: 0
                },
                {
                    text: "2",
                    score: 1
                },
                {
                    text: "3",
                    score: 0
                }
            ],
        },
        {
            questionImg: imgExample,
            overSideImg: null,
            questionText: "Вопрос 3",
            answerOptions: [
                {
                    text: "1",
                    score: 1
                },
                {
                    text: "2",
                    score: 0
                },
                {
                    text: "3",
                    score: 0
                }
            ],
        },
        {
            questionImg: imgExample,
            overSideImg: null,
            questionText: "Вопрос 4",
            answerOptions: [
                {
                    text: "1",
                    score: 1
                },
                {
                    text: "2",
                    score: 0
                },
                {
                    text: "3",
                    score: 0
                }
            ]
        }
    ]
}

export default quizPetr1;
