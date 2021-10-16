export const getEras = state => state.Data.Eras

export const getIndexEraAndSurvey = (state) => {
    return{
        indexEra: state.Data.indexEraAndSurvey.indexEra,
        indexSurvey: state.Data.indexEraAndSurvey.indexSurvey
    }
}

export const getArrQuestions = (state) => {
    const eras = getEras(state)
    const indexEraAndSurvey = getIndexEraAndSurvey(state)
    return(
        eras[indexEraAndSurvey.indexEra].subset[indexEraAndSurvey.indexSurvey].subset
    )
}