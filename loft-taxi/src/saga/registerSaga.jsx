import { takeEvery, call, put } from "redux-saga/effects";
import * as api from '../api'
import { sendRegisterSuccess, sendRegisterFailure, 
    SEND_REGISTER_REQUEST } from "../actions";

export function* sendRegisterRequestSaga(action) {
    try {
        const response = yield call(api.registration, action.payload)
        yield put(sendRegisterSuccess(response))
    } catch(e) {
        yield put(sendRegisterFailure(e))
        console.log(e);
    }
}

export function* registerSaga() {
    yield takeEvery(SEND_REGISTER_REQUEST, sendRegisterRequestSaga)
}