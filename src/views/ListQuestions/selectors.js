import { useSelector } from "react-redux"
import { getEras } from "../PoolView/selector"

export const getIndexEraAndSurvey = (state) => {
    return{
        indexEra: state.Data.indexEraAndSurvey.indexEra,
        indexSurvey: state.Data.indexEraAndSurvey.indexSurvey
    }
}

export const getArrQuestions = (state) => {
    const eras = getEras(state)
    const indexEraAndSurvey = getIndexEraAndSurvey(state)
    console.log(indexEraAndSurvey)
    return(
        eras[indexEraAndSurvey.indexEra].subset[indexEraAndSurvey.indexSurvey].subset
    )
}