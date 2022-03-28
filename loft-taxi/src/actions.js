// import { createAction } from 'redux-actions'

export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const AUTH = 'AUTH'
export const SET_CARD_REQUEST = 'SET_CARD_REQUEST'
export const SET_CARD_SUCCESS = 'SET_CARD_SUCCESS'
export const SET_CARD_FAILURE = 'SET_CARD_FAILURE'

export const GET_CARD_REQUEST = 'GET_CARD_REQUEST'
export const GET_CARD_SUCCESS = 'GET_CARD_SUCCESS'
export const GET_CARD_FAILURE = 'GET_CARD_FAILURE'

export const SEND_REGISTER_REQUEST = 'SEND_REGISTER_REQUEST'
export const SEND_REGISTER_SUCCESS = 'SEND_REGISTER_SUCCESS'
export const SEND_REGISTER_FAILURE = 'SEND_REGISTER_FAILURE'

export const logIn = (token) => ({ type: LOG_IN, payload: token })
export const logOut = () => ({ type: LOG_OUT })
export const auth = (email, password) => ({ type: AUTH, payload: { email, password } })

export const setCardRequest = (card) => ({ type: SET_CARD_REQUEST, payload: card })
export const setCardSuccess = data => ({ type: SET_CARD_SUCCESS, payload: data})
export const setCardFailure = (error) => ({ type: SET_CARD_FAILURE, payload:  error })

export const getCardRequest = () => ({ type: GET_CARD_REQUEST})
export const getCardSuccess = (data) => ({ type: GET_CARD_SUCCESS, payload: data })
export const getCardFailure = (error) => ({ type: GET_CARD_FAILURE, payload: error })

export const sendRegisterRequest = (data) => ({ type: SEND_REGISTER_REQUEST, payload: data })
export const sendRegisterSuccess = () => ({ type: SEND_REGISTER_SUCCESS })
export const sendRegisterFailure = (error) => ({ type: SEND_REGISTER_FAILURE, payload: error })