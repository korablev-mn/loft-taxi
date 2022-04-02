import { combineReducers } from "redux";
import authReducers from './auth'
import card from './card'
import address from './address'
import route from "./route";

export default combineReducers({auth: authReducers, card, address, route})