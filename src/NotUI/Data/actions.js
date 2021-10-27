import {SET_INDEX_ERA, SET_INDEX_SURVEY, SAVE_USER_ANSWERS, SET_STATIC_DATA_FROM_SERVER, SET_INDEX_QUESTION, SET_IMAGES, SET_IMAGES_ERAS, SET_IMAGES_SURVEYS, SET_IMAGES_CUR} from './consts'

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
        type:SET_INDEX_QUESTION,
        CurQuestionId: indexQuestion
    }
}

export const Data_saveUserAnswers = (userAnswers) => {
    return{
        type:SAVE_USER_ANSWERS,
        userAnswers:userAnswers
    }
}


export const Data_setStaticDataFromServer = (data) => {
    return{
        type:SET_STATIC_DATA_FROM_SERVER,
        data:data
    }
}



//Картинки
export const Data_setImagesEras = (images) => {
    return{
        type:SET_IMAGES_ERAS,
        images:images
    }
}

export const Data_setImagesSurveys = (images) => {
    return{
        type:SET_IMAGES_SURVEYS,
        images:images
    }
}

export const Data_setImages_Cur = (images) => {
    return{
        type:SET_IMAGES_CUR,
        images:images
    }
}