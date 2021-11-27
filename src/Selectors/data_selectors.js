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
export const getSurveysById = (idEra) => (state) =>{
    return state.Data.Surveys.filter(survey=>survey.idEra === idEra)
}
export const getQuestionsById = (idSurvey) => (state) =>{
    return state.Data.Questions.filter(question=>question.idSurvey === idSurvey)
}
export const getAnswerOptionsById  = (idQuestion) => (state) =>{
    return state.Data.AnswerOptions.filter(answerOption=>answerOption.idQuestion === idQuestion)
}


// Получение одного элемента по id
export const getEraById = (idEra) => (state) =>{
    return state.Data.Eras.filter((era)=>era.idEra === idEra)[0]
} 
export const getSurveyById = (idSurvey) => (state) =>{
    return state.Data.Surveys.filter((survey)=>survey.idSurvey === idSurvey)[0]
} 
export const getQuestionById = (idQuestion) => (state) =>{
    return state.Data.Questions.filter((question)=>question.idQuestion === idQuestion)[0]
} 
export const getAnswerOptionById = (idAnswerOption) => (state) =>{
    return state.Data.AnswerOptions.filter((answerOption)=>answerOption.idAnswerOption === idAnswerOption)[0]
} 
export const getUserAnswer = (idQuestion) => (state) =>{
    const userAnswer = state.Data.UserAnswers.filter((userAnswer)=>userAnswer.idQuestion === idQuestion)

    if(userAnswer === undefined){
        return undefined
    }
    else{
        return userAnswer[0]
    }
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
export const getCurQuestion = (state) =>{
    const curQuestionId = getCurQuestionId(state)
    return state.Data.Questions.filter(question=>question.idQuestion === curQuestionId)[0]
}
export const getCurQuestions = (state) => {
    const curSurveyId = getCurSurveyId(state)
    return state.Data.Questions.filter(question=>question.idSurvey === curSurveyId)
}
export const getCurAnswerOptions = (state) =>{
    const curQuestionId = getCurQuestionId(state)
    return state.Data.AnswerOptions.filter(answerOption=>answerOption.idQuestion === curQuestionId)
}
export const getCurUserAnswer = (state) => {
    const curQuestionId = getCurQuestionId(state)
    const curUserAnswer = getUserAnswer(curQuestionId)(state)

    if(curUserAnswer === undefined){
        return undefined
    }
    else{
        return curUserAnswer
    }
} 


// Результаты
export const isAnswerOptionTrue = (idAnswerOption) => (state) =>{
    const answerOption = getAnswerOptionById(idAnswerOption)(state)

    return answerOption.score === 1 ? true : false
}
export const isQuestionTrue = (idQuestion) => (state) => {
    const userAnswer = getUserAnswer(idQuestion)(state)
    if(userAnswer === undefined){
        return false
    }

    return isAnswerOptionTrue(userAnswer.idAnswerOption)(state)
} 
export const isCurQuestionTrue = (state) => {
    const userAnswer = getCurUserAnswer(state)

    if(userAnswer === undefined){
        return false
    }

    return isAnswerOptionTrue(userAnswer.idAnswerOption)
}



export const getRightAnswerOptionById = (idQuestion) => (state) =>{

    let ret = {};

    const answerOptions = getAnswerOptionsById(idQuestion)(state);

    answerOptions.map((answerOption)=>{
        if(isAnswerOptionTrue(answerOption.idAnswerOption)(state)){
            ret = answerOption
        }
    })

    return ret
}

export const getResultCurSurvey = (state) =>{
    const curQuestions = getCurQuestions(state)

    const total = curQuestions.length
    let score = 0;

    curQuestions.map((question)=>{
        if(isQuestionTrue(question.idQuestion)(state)){
            score++
        }
    })

    return {total:total, score:score}
}
export const getResultSurveyById = (idSurvey) => (state) =>{
    const questions = getQuestionsById(idSurvey)(state)

    const total = questions.length
    let score = 0;

    questions.map((question)=>{
        if(isQuestionTrue(question.idQuestion)(state)){
            score++
        }
    })

    return {total:total, score:score}
}

export const getResultCurSurveys = (state) =>{
    const curSurveys = getCurSurveys(state)

    let ret = []

    curSurveys.map((survey)=>{
        let surveyResult = getResultSurveyById(survey.idSurvey)(state)
        ret.push(
            {
                idSurvey:survey.idSurvey,
                total:surveyResult.total, 
                score:surveyResult.score
            }
        )
    })

    return ret
}

export const getResultEraById = (idEra) => (state) =>{
    const surveys = getSurveysById(idEra)(state)

    const total = surveys.length
    let score = 0

    surveys.map((survey)=>{
        let surveyResult = getResultSurveyById(survey.idSurvey)(state)
        if(surveyResult.score === surveyResult.total){
            score++
        }
    })

    return {score:score, total:total}

}

export const getResultsEras = (state) =>{
    const eras = getEras(state)

    let ret = []

    eras.map((era)=>{
        let eraResult = getResultEraById(era.idEra)(state)
        ret.push(
            {
                idEra:era.idEra,
                total:eraResult.total, 
                score:eraResult.score
            }
        )
    })

    return ret
}



//Данные пользователя
export const getIsFirstOpen = (state) => state.Data.UserData.isFirstOpen




//Остальные функции

//Получить все эры
export const getEras = (state) => state.Data.Eras
export const getImages = (state) => {
    return state.Data.Images
}

//Статические (не меняются на протяжении всей работы приложения) картинки
const getStaticImageByName = (imageName) => (state) => {

    let ret = undefined;
    const images = Object.values(state.Data.StaticImages)

    images.map((image)=>{
        if (image.imageName === imageName){
            ret = image
        }
    })

    return ret
}

export const getImageByName = (imageName) => (state) => {

    let ret = undefined;

    const staticImage = getStaticImageByName(imageName)(state)

    if(staticImage !== undefined){
        ret = staticImage
    }

    return ret

}

//Реклама
export const getAdsProps = (state) => state.Data.AdsProps