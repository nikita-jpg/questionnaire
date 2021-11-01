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



// //Картинки

export const Data_addStaticImages = (images) => {
    return{
        type:consts.ADD_STATIC_IMAGES,
        images:images
    }
}

// export const Data_setImagesEras = (images) => {
//     return{
//         type:consts.SET_IMAGES_ERAS,
//         images:images
//     }
// }

// export const Data_setImagesSurveys = (images) => {
//     return{
//         type:consts.SET_IMAGES_SURVEYS,
//         images:images
//     }
// }

// export const Data_setImages_Cur = (images) => {
//     return{
//         type:SET_IMAGES_CUR,
//         images:images
//     }
// }