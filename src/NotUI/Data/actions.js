import {SET_INDEX_ERA, SET_INDEX_SURVEY, SAVE_USER_ANSWERS} from './consts'

export const Data_setIndexEra = (indexEra) => {
    return{
        type:SET_INDEX_ERA,
        CurEraId:indexEra
    }
}

export const Data_setIndexSurvey = (indexSurvey) => {
    return{
        type:SET_INDEX_SURVEY,
        CurSurveyId: indexSurvey
    }
}

export const Data_setIndexQuestion= (indexQuestion) => {
    return{
        type:SET_INDEX_SURVEY,
        CurQuestionId: indexQuestion
    }
}

export const Data_saveUserAnswers = (userAnswers) => {
    return{
        type:SAVE_USER_ANSWERS,
        userAnswers:userAnswers
    }
}
