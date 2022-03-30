import { takeEvery, call, put } from 'redux-saga/effects'
import * as api from '../api'
import { 
    ROUTE_REQUEST,
    routeSuccess,
    routeFailure,
    } from '../actions'

export function* routeGetSaga(action) {
    try {
        const data = yield call(api.route, action.payload)
        yield put(routeSuccess(data))
    } catch(e) {
        yield put(routeFailure(e))
    }
}

export function* routeSaga() {
    yield takeEvery(ROUTE_REQUEST, routeGetSaga)
}