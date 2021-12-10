export * as consts from './consts'

export const SurveyView_giveAnswer = (userAnswer) =>{
    return{
        type: consts.SurveyView_giveAnswer,
        userAnswer:userAnswer
    }
}