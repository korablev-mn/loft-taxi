import {
    SEND_REGISTER_REQUEST,
    SEND_REGISTER_SUCCESS,
    SEND_REGISTER_FAILURE
} from '../actions'

const initialState = {
    email: undefined,
    password: undefined,
    name: undefined,
    surname: undefined,
    success: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SEND_REGISTER_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case SEND_REGISTER_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isLoading: false
            }
        case SEND_REGISTER_FAILURE:
            return {
                ...state,
                ...action.payload,
                isLoading: false
            }
        default:
            return state
    }
}