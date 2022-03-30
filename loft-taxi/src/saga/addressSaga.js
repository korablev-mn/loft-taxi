import { takeEvery, call, put } from 'redux-saga/effects'
import * as api from '../api'
import { 
    ADDRESS_REQUEST,
    addressSuccess,
    addressFailure,
    } from '../actions'

export function* addressGetSaga() {
    try {
        const data = yield call(api.addressList)
        yield put(addressSuccess(data))
    } catch(e) {
        yield put(addressFailure(e))
    }
}

export function* addressSaga() {
    yield takeEvery(ADDRESS_REQUEST, addressGetSaga)
}