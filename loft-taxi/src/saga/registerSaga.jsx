import { takeEvery, call, put } from "redux-saga/effects";
import * as api from '../api'
import { sendRegisterSuccess, sendRegisterFailure, 
    SEND_REGISTER_REQUEST, 
    logIn} from "../actions";

export function* sendRegisterRequestSaga(action) {
    try {
        console.log('send request registartion');
        const data = yield call(api.registration, action.payload)
        console.log(data);
        if(data.success){
            console.log('success: ');
            console.log(data);
            yield put(sendRegisterSuccess(data))
            yield put(logIn(data.token))
        } else {
            yield put(sendRegisterFailure(data.error))
        }
    } catch(e) {
        console.log('error');
        yield put(sendRegisterFailure(e))
        console.log(e);
    }
}

export function* registerSaga() {
    yield takeEvery(SEND_REGISTER_REQUEST, sendRegisterRequestSaga)
}