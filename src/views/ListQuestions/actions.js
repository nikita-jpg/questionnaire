export {SURVEY_FINISHED_GO_TO_RESULT_FALSE, SURVEY_FINISHED_GO_TO_RESULT_TRUE} from './consts'

export const SurveyView_setIfSurveyFinishedGoToResultTrue = () =>{
    return{
        type: SURVEY_FINISHED_GO_TO_RESULT_TRUE
    }
}

export const SurveyView_setIfSurveyFinishedGoToResultFalse = () =>{
    return{
        type: SURVEY_FINISHED_GO_TO_RESULT_FALSE
    }
}