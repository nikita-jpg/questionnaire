export const getEras = (state) => state.Data.Eras

export const getIndexEra = (state) => state.Data.indexEra

export const getIndexSurvey = (state) => state.Data.indexSurvey

export const getArrQuestions = (state) => {
    const eras = getEras(state)
    const indexEra = getIndexEra(state)
    const indexSurvey = getIndexSurvey(state)

    return(
        eras[indexEra].subset[indexSurvey].subset
    )
}

export const getCurSurvey = (state) => {
    const eras = getEras(state)
    const indexEra = getIndexEra(state)
    const indexSurvey = getIndexSurvey(state)

    return(
        eras[indexEra].subset[indexSurvey]
    )
}
export const getCurSurveys = (state) => {
    const eras = getEras(state)
    const indexEra = getIndexEra(state)

    return(
        eras[indexEra].subset
    )
}

export const getCurEra = (state) => {
    const eras = getEras(state)
    const indexEra = getIndexEra(state)

    return(
        eras[indexEra]
    )
}

// export const getSurveyResult = (state) => {
//     const eras = getEras(state);
//     const indexAgeAndSurvey = 

// }