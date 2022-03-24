// import { createAction } from 'redux-actions'

export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const AUTH = 'AUTH'
export const SET_CARD = 'SET_CARD'
export const GET_CARD = 'GET_CARD'
export const GET_CARD_REQUEST = 'GET_CARD_REQUEST'
export const GET_CARD_SUCCESS = 'GET_CARD_SUCCESS'
export const GET_CARD_FAILURE = 'GET_CARD_FAILURE'

export const logIn = () => ({ type: LOG_IN })
export const logOut = () => ({ type: LOG_OUT })
export const auth = (email, password) => ({ type: AUTH, payload: { email, password } })
export const setCard = (cardNumber, expiryDate, cardName, cvc) => ({ type: SET_CARD, payload: { cardNumber, expiryDate, cardName, cvc } })
export const getCard = () => ({ type: GET_CARD })
export const getCardRequest = () => ({ type: GET_CARD_REQUEST})
export const getCardSuccess = (data) => ({ type: GET_CARD_SUCCESS, payload: { data }})
export const getCardFailure = (error) => ({ type: GET_CARD_FAILURE, paeload: { error }})