import {
    ADDRESS_REQUEST,
    ADDRESS_SUCCESS,
    ADDRESS_FAILURE
} from '../actions'

const initialState = {
    mapAddress: [],
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADDRESS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case ADDRESS_SUCCESS:
            return {
                ...state,
                mapAddress: action.payload,
                isLoading: false
            }
        case ADDRESS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state
    }
}