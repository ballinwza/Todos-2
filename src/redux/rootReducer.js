import { combineReducers } from 'redux'
import {todoReducer} from './todoReducer' 
import { TriggerReducer } from './triggerReducer'
export const rootReducer = combineReducers({
    todos: todoReducer,
    trigger: TriggerReducer,
})