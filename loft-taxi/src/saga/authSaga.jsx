import { takeEvery, call, put } from 'redux-saga/effects'
import { serverLogin2 } from '../api'
import { AUTH, logIn } from '../actions'

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
}