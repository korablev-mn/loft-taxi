import {
    ROUTE_REQUEST,
    ROUTE_SUCCESS,
    ROUTE_FAILURE
} from '../actions'

const initialState = {
    mapAddress: [],
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
                mapAddress: action.payload,
                isLoading: false
            }
        case ROUTE_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state
    }
}