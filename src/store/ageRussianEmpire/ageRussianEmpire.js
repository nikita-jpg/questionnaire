import mainImage from "../../img/ageRussianEmpire/quizPetr1/petr.png";
import quizPetr1 from "./quizPetr1";
import quizTheEraOfPalaceCoups from "./quizTheEraOfPalaceCoups";

const ageRussianEmpire = {
    title: "Империя",
    shortTitle: "Империя",
    imageSrc: mainImage,
    description:"Росси́йская импе́рия (рус. дореф. Россійская имперія; также Всеросси́йская импе́рия, ца́рская Росси́я) — государство, существовавшее в период с 22 октября (2 ноября) 1721 года до Февральской революции и провозглашения республики в сентябре 1917 года Временным правительством.",
    percentProgress: 0,
    // numberOfQuestions:8,
    quizzes: [
        quizPetr1,
        quizPetr1,
        quizPetr1,
        quizPetr1,
        quizPetr1,
        quizPetr1,
        quizTheEraOfPalaceCoups
    ]
}

export default ageRussianEmpire;
