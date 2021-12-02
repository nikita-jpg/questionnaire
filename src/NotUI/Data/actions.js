import * as consts from './consts'

export const Data_setIndexEra = (indexEra) => {
    return{
        type:consts.SET_INDEX_ERA,
        CurEraId:indexEra
    }
}

export const Data_setIndexSurvey = (indexSurvey) => {
    return{
        type:consts.SET_INDEX_SURVEY,
        CurSurveyId: indexSurvey
    }
}

export const Data_setIndexQuestion= (indexQuestion) => {
    return{
        type:consts.SET_INDEX_QUESTION,
        CurQuestionId: indexQuestion
    }
}

export const Data_saveUserAnswers = (userAnswers) => {
    return{
        type:consts.SAVE_USER_ANSWERS,
        userAnswers:userAnswers
    }
}


export const Data_setStaticDataFromServer = (data) => {
    return{
        type:consts.SET_STATIC_DATA_FROM_SERVER,
        data:data
    }
}



//Картинки
export const Data_addStaticImages = (images) => {
    return{
        type:consts.ADD_STATIC_IMAGES,
        images:images
    }
}

//Реклама
export const Set_adsProps = (adsProps) => {
    return{
        type:consts.SET_ADS_PROPS,
        adsProps:adsProps
    }
}

//Платформа
export const Set_platform = (platform) => {
    return{
        type:consts.SET_PLATFORM,
        platform:platform
    }
}

