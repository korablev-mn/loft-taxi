import {
    ROUTE_REQUEST,
    ROUTE_SUCCESS,
    ROUTE_FAILURE
} from '../actions'

const initialState = {
    data: [],
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ROUTE_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case ROUTE_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            }
        case ROUTE_FAILURE:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            }
        default:
            return state
    }
}