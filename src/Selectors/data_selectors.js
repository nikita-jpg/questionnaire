export const getEras = (state) => state.Data.Eras

export const getIndexEra = (state) => state.Data.indexEra

export const getIndexSurvey = (state) => state.Data.indexSurvey

export const getArrQuestions = (state) => {
    const eras = getEras(state)
    const indexEraAndSurvey = getIndexEraAndSurvey(state)
    return(
        eras[indexEraAndSurvey.indexEra].subset[indexEraAndSurvey.indexSurvey].subset
    )
}

// export const getSurveyResult = (state) => {
//     const eras = getEras(state);
//     const indexAgeAndSurvey = 

// }