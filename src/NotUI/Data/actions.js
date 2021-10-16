import {SET_INDEX_ERA_AND_SURVEY} from './consts'

export const setIndexEraAndSurvey = (indexEra, indexSurvey) => {
    return{
        type:SET_INDEX_ERA_AND_SURVEY,
        indexEra:indexEra,
        indexSurvey: indexSurvey
    }
}
