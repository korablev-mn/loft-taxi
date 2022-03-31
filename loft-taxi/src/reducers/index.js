import { combineReducers } from "redux";
import authReducers from './auth'
import card from './card'
import route from './route'
import address from './address'

export default combineReducers({auth: authReducers, card, route, address})