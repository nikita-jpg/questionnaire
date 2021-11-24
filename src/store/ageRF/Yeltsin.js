import imgMain from "../../img/ageRF/Yeltsin/Yeltsin.jpg";

import img1 from "../../img/ageRF/Yeltsin/Yeltsin.jpg";

const Yeltsin = {
    title: "Ельцин",
    description:"Описание",
    percentProgress: 0,
    numberOfQuestions: 1,
    isImageDownloaded: false,
    imageSrc: imgMain,
    questions: [
        {
            imageSrc: img1,
            overSideImg: img1,
            questionText: "Текст вопроса",
            answerOptions: [
                {
                    text: "Вариант 1",
                    score: 1
                },
                {
                    text: "Вариант 2",
                    score: 0
                },
                {
                    text: "Вариант 3",
                    score: 0
                }
            ]
        }
    ]
}

export default Yeltsin;