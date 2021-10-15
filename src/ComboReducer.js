import { combineReducers } from "redux";
import {appReducer} from './App/Redusers'

export const comboReducer = combineReducers({
    App: appReducer
})