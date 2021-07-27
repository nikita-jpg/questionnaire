import imgMain from "../../img/ageRF/Zero/Zero.jpg";

import img1 from "../../img/ageRF/Zero/Zero.jpg";

const Zero = {
    title: "Нулевые",
    description:"Описание",
    percentProgress: 0,
    numberOfQuestions: 8,
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

export default Zero;
