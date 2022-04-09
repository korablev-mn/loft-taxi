import { takeEvery, call, put } from 'redux-saga/effects'
import * as api from '../api'
import { 
    ROUTE_REQUEST,
    routeSuccess,
    routeFailure,
    } from '../actions'

export function* routeGetSaga(action) {
    try {
        console.log('routeSaga: ');
        console.log(action.payload);
        const { From, To } = action.payload
        const data = yield call(api.route, From, To)
        console.log('data: ');
        console.log(data);
        yield put(routeSuccess(data))
    } catch(e) {
        yield put(routeFailure(e))
    }
}

export function* routeSaga() {
    yield takeEvery(ROUTE_REQUEST, routeGetSaga)
}