import { takeEvery, call, put } from "redux-saga/effects";
import * as api from '../api'
import { sendRegisterSuccess, sendRegisterFailure, 
    SEND_REGISTER_REQUEST } from "../actions";

export function* sendRegisterRequestSaga(action) {
    try {
        console.log('send request registartion');
        const response = yield call(api.registration, action.payload)
        console.log(response);
        if(response.success){
            console.log(response);
            yield put(sendRegisterSuccess(response))
        }
    } catch(e) {
        yield put(sendRegisterFailure(e))
        console.log(e);
    }
}

export function* registerSaga() {
    yield takeEvery(SEND_REGISTER_REQUEST, sendRegisterRequestSaga)
}