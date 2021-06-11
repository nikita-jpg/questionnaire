import ageRussianEmpire from "./ageRussianEmpire/ageRussianEmpire";

import results from "./results/results";

const store = {
    eras: [
        ageRussianEmpire,
        ageRussianEmpire,
        ageRussianEmpire,
        ageRussianEmpire,
        ageRussianEmpire
    ],

    results,

    MAX_SCORE: 8
}

export default store;

const calculatePercentAge = (era) => {
    const numberOfPassedQuizes = era.quizzes.reduce((sum, quiz) => {
        return quiz.percentProgress !== undefined ?sum + 1 :sum
    }, 0);

    return Math.round(numberOfPassedQuizes / era.length * 100);
}

export const savePercentQuiz = (indexAge, indexQuiz, percentProgress) => {
    store.eras = store.eras.map((era, i) => {
        if (i !== indexAge) {
            return era;
        }

        if (era.quizzes[indexQuiz].percentProgress === undefined) {
            era.quizzes[indexQuiz].percentProgress = percentProgress;
        } else {
            era.quizzes[indexQuiz].percentProgress = Math.max(percentProgress, era.quizzes[indexQuiz].percentProgress);
        }

        era.percentProgress = calculatePercentAge(era);

        return {...era};
    })
}
