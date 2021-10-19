import {SET_INDEX_ERA_AND_SURVEY, SAVE_USER_ANSWERS} from './consts'

export const setIndexEraAndSurvey = (indexEra, indexSurvey) => {
    return{
        type:SET_INDEX_ERA_AND_SURVEY,
        indexEra:indexEra,
        indexSurvey: indexSurvey
    }
}

export const saveUserAnswers = (userAnswers) => {
    return{
        type:SAVE_USER_ANSWERS,
        userAnswers:userAnswers
    }
}
