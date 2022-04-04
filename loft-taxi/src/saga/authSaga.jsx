import { takeEvery, call, put } from 'redux-saga/effects'
import { serverLogin2, registration } from '../api'
import { AUTH, logIn, LOG_OUT, sendRegisterSuccess, sendRegisterFailure, SEND_REGISTER_REQUEST } from '../actions'

export function* authenticateSaga(action) {
    const { email, password } = action.payload
    const { success, token } = yield call(serverLogin2, email, password)
    if( success ) {
        localStorage.setItem('token', token)
        yield put(logIn(token))
    }
}

export function* authSaga() {
    yield takeEvery(AUTH, authenticateSaga)
    yield takeEvery(LOG_OUT, function() {
        localStorage.removeItem('token')
    })
}

export function* sendRegisterRequestSaga(action) {
    try{
        const response = yield call(registration, action.payload)
        console.log(response);
        //yield put(api.saveToken, response.token)
        localStorage.setItem('token', response.token)
        yield put(sendRegisterSuccess())
    }catch(e) {
        yield put(sendRegisterFailure(e))
    }
}

export function* registerSaga() {
    yield takeEvery(SEND_REGISTER_REQUEST, sendRegisterRequestSaga)
    yield takeEvery(LOG_OUT, function() {
        localStorage.removeItem('token')
    })
}