import { combineReducers } from "redux";
import {appReducer} from './App/Redusers'
import {dataReducer} from './NotUI/Data/reducers'
import {additionalReducer} from './Additional/reducer'
import { listSurveyReducer } from "./views/ListQuestions/reducer";

export const comboReducer = combineReducers({
    App: appReducer,
    ListSurvey: listSurveyReducer,
    Data: dataReducer,
    Additional: additionalReducer
})