export * as consts from './consts'

// export const SurveyView_setIfSurveyFinishedGoToResultTrue = () =>{
//     return{
//         type: SURVEY_FINISHED_GO_TO_RESULT_TRUE
//     }
// }

// export const SurveyView_setIfSurveyFinishedGoToResultFalse = () =>{
//     return{
//         type: SURVEY_FINISHED_GO_TO_RESULT_FALSE
//     }
// }

export const SurveyView_giveAnswer = (userAnswer) =>{
    return{
        type: consts.SurveyView_giveAnswer,
        userAnswer:userAnswer
    }
}