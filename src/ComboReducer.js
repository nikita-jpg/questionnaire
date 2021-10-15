import { combineReducers } from "redux";
import {appReducer} from './App/Redusers'
import {dataReducer} from './NotUI/Data/reducers'

export const comboReducer = combineReducers({
    App: appReducer,
    Data: dataReducer
})