import {
    GET_CARD_REQUEST,
    GET_CARD_SUCCESS,
    GET_CARD_FAILURE
} from '../actions'

const initialState = {
    data: {},
    isLoading: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_CARD_REQUEST:
            return {
                ...state,
                data: {},
                isLoading: true
            }
        case GET_CARD_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            }
        case GET_CARD_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state
    }
}