import * as viewsConsts from './Constants'

export const App_goToPollView = () => {
    return{
        type:viewsConsts.VIEW_ID_LIST_AGE_AND_QUIZES
    }
}

export const goToSurveyView = () => {
    return{
        type:viewsConsts.VIEW_ID_LIST_QUESTIONES
    }
}

export const goToResultView= () => {
    return{
        type:viewsConsts.VIEW_ID_RESULT
    }
}
