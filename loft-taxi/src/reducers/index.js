import { combineReducers } from "redux";
import authReducers from './auth'
import card from './card'

export default combineReducers({auth: authReducers, card})