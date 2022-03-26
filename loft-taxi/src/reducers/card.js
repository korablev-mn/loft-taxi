import {
    GET_CARD_REQUEST,
    GET_CARD_SUCCESS,
    GET_CARD_FAILURE,
    SET_CARD_REQUEST,
    SET_CARD_SUCCESS,
    SET_CARD_FAILURE
} from '../actions'

const initialState = {
    cardName: null,
    cardNumber: null,
    expiryDate: null,
    cvc: null,
    isLoading: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_CARD_REQUEST:
            return {
                ...state,
                // data: {},
                isLoading: true
            }
        case GET_CARD_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isLoading: false
            }
        case GET_CARD_FAILURE:
            return {
                ...state,
                ...action.payload,
                isLoading: false
            }
        case SET_CARD_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case SET_CARD_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isLoading: false
            }
        case SET_CARD_FAILURE:
            return {
                ...state,
                ...action.payload,
                isLoading: false
            }
        default:
            return state
    }
}