import {QUESTION_NOT_ANSWERED} from "../NotUI/Data/consts"

// export const getEras = (state) => state.Data.Eras


// Получение ID
export const getCurEraId = (state) =>{
    return state.Data.CurEraId
}
export const getCurSurveyId = (state) =>{
    return state.Data.CurSurveyId
}
export const getCurQuestionId = (state) =>{
    return state.Data.CurQuestionId
}



// Получение массива элементов по id вышестоящего элемента
export const getSurveys = (idEra) => (state) =>{
    return state.Data.Surveys.filter(survey=>survey.idEra === idEra)
}
export const getQuestions = (idSurvey) => (state) =>{
    return state.Data.Questions.filter(question=>question.idSurvey === idSurvey)
}
export const getAnswerOptions = (idQuestion) => (state) =>{
    return state.Data.AnswerOptions.filter(answerOption=>answerOption.idQuestion === idQuestion)
}


// Получение одного элемента по id
export const getEraById = (idEra) => (state) =>{
    return state.Data.Eras.filter((era)=>era.idEra === idEra)
} 
export const getSurveyById = (idSurvey) => (state) =>{
    return state.Data.Surveys.filter((survey)=>survey.idSurvey === idSurvey)
} 
export const getQuestionById = (idQuestion) => (state) =>{
    return state.Data.Questions.filter((question)=>question.idQuestion === idQuestion)
} 
export const getAnswerOptionById = (idAnswerOption) => (state) =>{
    return state.Data.AnswerOptions.filter((answerOption)=>answerOption.idAnswerOption === idAnswerOption)
} 



// Получение текущих данных
export const getCurEra = (state) => {

    const curEraId = getCurEraId(state)
    const eras = getEras(state)

    return(
        eras.filter((era)=>era.idEra === curEraId)[0]
    )
}
export const getCurSurvey = (state) => {

    const curSurvId = getCurSurveyId(state)
    const surveys = getCurSurveys(state)

    return(
        surveys.filter((survey)=>survey.idSurvey === curSurvId)[0]
    )
}
export const getCurSurveys = (state) =>{
    const curEraId = getCurEraId(state)
    return state.Data.Surveys.filter(survey=>survey.idEra === curEraId)
}
export const getCurQuestions = (state) => {
    const curSUrveyId = getCurSurveyId(state)
    return state.Data.Questions.filter(question=>question.idSurvey === curSUrveyId)
}

//Остальные функции

//Получить все эры
export const getEras = (state) => state.Data.Eras




// export const getArrQuestions = (state) => {
//     const eras = getEras(state)
//     const indexEra = getIndexEra(state)
//     const indexSurvey = getIndexSurvey(state)

//     return(
//         eras[indexEra].subset[indexSurvey].subset
//     )
// }

// export const getCurSurvey = (state) => {

//     const curSurvId = getCurSurveyId(state)
//     const surveys = getSurveys(curSurvId)(state)

//     return(
//         eras[indexEra].subset[indexSurvey]
//     )
// }

// export const getCurEraSurveys = (state) => {
//     const eras = getEras(state)
//     const indexEra = getIndexEra(state)

//     return(
//         eras[indexEra].subset
//     )
// }

// export const getCurEra = (state) => {
//     const eras = getEras(state)
//     const indexEra = getIndexEra(state)

//     return(
//         eras[indexEra]
//     )
// }



// export const getSurveyResult = (idSurvey) => (state) =>{
//     const answers = getAnswers()
//     return state.Data.Surveys.filter(survey=>survey.idEra === idEra)
// }

// Извлечение статических данных
// export const getEras = (state) => state.Data.Eras










// Результаты

// export const isAnswerOptionTrue = (idAnswerOption) => (state) =>{
//     const answerOption = getAnswerOption(idAnswerOption)(state)
//     return answerOption.score === 1 ? true : false
// } 

// export const getIdUserAnswerOption = (idQuestion) => (state) =>{
//     const userAnswer = state.Data.UserAnswers.filter((userAnswer)=>userAnswer.idQuestion === idQuestion);

//     if(userAnswer.lenght === undefined){
//         return QUESTION_NOT_ANSWERED
//     }
//     else{
//         return userAnswer[0].idAnswerOption
//     }
// }

// export const isQuestionAnsweredTrue = (idQuestion) => (state) =>{
//     const idUserAnswerOption = getIdUserAnswerOption(idQuestion)(state)

//     if(idUserAnswerOption === QUESTION_NOT_ANSWERED){
//         return false
//     }

//     const answerOption = getAnswerOption(idUserAnswerOption)(state)[0]
//     return answerOption.score === 1 ? true : false
// }

// export const getSurveyResult = (idSurvey) => (state) =>{
//     const questions = getQuestions(idSurvey)(state)

//     const total = questions.length
//     let score = 0;

//     questions.map((question)=>{

//         if(isQuestionAnsweredTrue(question.idQuestion)(state)){
//             score++
//         }

//     })

//     return {total:total, score:score}
// }

// export const getSurveysResults = (state) =>{
//     const surveys = getCurSurveys(state)

//     let ret = []

//     surveys.map((survey)=>{

//         let surveyResult = getSurveyResult(survey.idSurvey)(state)

//         ret.push(
//             {
//                 idSurvey:survey.idSurvey,
//                 total:surveyResult.total,
//                 score:surveyResult.score
//             }
//         )
//     })

//     return ret
// }


// export const getEraResult = (idEra) => (state) =>{
//     const surveys = getSurveys(idEra)(state);

//     const total = surveys.length;
//     let score = 0;

//     surveys.map((survey)=>{
//         let surveyResult = getSurveyResult(survey.idSurvey)(state);
//         if(surveyResult.total === surveyResult.score){
//             score++
//         }
//     })

//     return {total:total, score:score}

// } 

// export const getErasResults = (state) =>{
//     const eras = getEras(state)

//     let ret = []

//     eras.map((era)=>{

//         let eraResult = getEraResult(era.idEra)(state)

//         ret.push({
//             idEra:era.idEra,
//             total:eraResult.total,
//             score:eraResult.score
//         })
//     })

//     return ret
// }





// export const isAnswerTrue = (idAnswer) => {

// }

// export const getSurveyResult = (state) => {
//     const eras = getEras(state);
//     const indexAgeAndSurvey = 

// }