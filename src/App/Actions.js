import * as viewsConsts from './Constants'

export const App_goToPollView = () => {
    return{
        type:viewsConsts.VIEW_ID_LIST_AGE_AND_QUIZES
    }
}

export const App_goToSurveyView = () => {
    return{
        type:viewsConsts.VIEW_ID_LIST_QUESTIONES
    }
}

export const App_goToResultView = () => {
    return{
        type:viewsConsts.VIEW_ID_RESULT
    }
}
