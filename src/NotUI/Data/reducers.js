import { initialState } from "./initialState"
import * as consts from './consts'

export const dataReducer = (state = initialState, action) =>{

    switch(action.type){

        case consts.SET_INDEX_ERA:{
            return {...state, ...{CurEraId: action.CurEraId}}
        }

        case consts.SET_INDEX_SURVEY:{
            return {...state, ...{CurSurveyId: action.CurSurveyId}}
        }

        case consts.SET_INDEX_QUESTION:{
            return {...state, ...{CurQuestionId: action.CurQuestionId}}
        }

        case consts.SAVE_USER_ANSWERS:{
            let userAnswersState = [...state.UserAnswers].filter((userAnswer)=>userAnswer.idSurvey !== state.CurSurveyId);
            let userAnswers = action.userAnswers;
            
            if(userAnswersState === undefined){
                userAnswersState = []
            }

            for(let i=0;i<userAnswers.length;i++){
                userAnswersState.push(
                    userAnswers[i]
                )
            }

            return {...state, ...{UserAnswers:userAnswersState}}
        }

        case consts.SET_STATIC_DATA_FROM_SERVER:{
            const data = action.data
            return {...state, ...{
                // UserData:data.UserData,
                Eras:data.Eras,
                Surveys:data.Surveys,
                Questions:data.Questions,
                AnswerOptions:data.AnswerOptions,
                UserAnswers:data.UserAnswers
            }}
        }

        case consts.SET_IMAGES_ERAS:{
            const images = action.images
            let imagesFromState = Object.assign([],state.Images)
            images.map((image)=>{
                imagesFromState.Eras.push(image)
            })
            
            return{...state, ...{
                Images: imagesFromState
            }}
        }

        case consts.SET_ADS_PROPS:{
            const adsProps = action.adsProps
            return{...state, ...{
                AdsProps: adsProps
            }}
        }

        case consts.ADD_STATIC_IMAGES:{
            const images = action.images
            let imagesFromState = Object.assign([],state.StaticImages)

            images.map((image)=>{
                imagesFromState.push(image)
            })
            
            return{...state, ...{
                StaticImages: imagesFromState
            }}
        }

        default:{
            return state
        }
    }
}