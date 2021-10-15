import { combineReducers } from "redux";
import {appReducer} from './App/Redusers'
import {dataReducer} from './NotUI/Data/reducers'
import {additionalReducer} from './Additional/reducer'

export const comboReducer = combineReducers({
    App: appReducer,
    Data: dataReducer,
    Additional: additionalReducer
})