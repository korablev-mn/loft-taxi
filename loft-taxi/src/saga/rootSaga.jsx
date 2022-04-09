import { fork } from "redux-saga/effects";
import { authSaga } from "./authSaga";
import { cardSaga } from './cardSaga'
import { registerSaga } from './registerSaga'
import { addressSaga } from './addressSaga'
import { routeSaga } from './routeSaga'

export function* rootSaga() {
    yield fork(authSaga);
    yield fork(registerSaga);
    yield fork(cardSaga);
    yield fork(addressSaga);
    yield fork(routeSaga);
}