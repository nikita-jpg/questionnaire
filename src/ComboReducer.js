import { combineReducers } from "redux";
import {appReducer} from './App/Redusers'
import {dataReducer} from './NotUI/Data/reducers'
import {additionalReducer} from './Additional/reducer'
import { listSurveyReducer } from "./views/ListQuestions/reducer";
import { poolVeiwReducer } from "./views/PoolView/reducer";
import {alertReducer} from "./components/Alert/alertReducer"
import { modalReducer } from "./components/Modal/modalRootMainReduecer";

export const comboReducer = combineReducers({
    App: appReducer,
    ListSurvey: listSurveyReducer,
    PoolView: poolVeiwReducer,
    Data: dataReducer,
    Alert: alertReducer,
    Modal: modalReducer,
    Additional: additionalReducer
})