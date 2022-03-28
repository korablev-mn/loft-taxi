import { takeEvery, call, put } from 'redux-saga/effects'
import * as api from '../api'
import { 
    GET_CARD_REQUEST,
    getCardSuccess,
    getCardFailure,
    SET_CARD_REQUEST,
    setCardSuccess, 
    setCardFailure } from '../actions'

export function* sendCardSaga(action) {
    try{
        // const { cardNumber, expiryDate, cardName, cvc } = action.payload
        const token = localStorage.getItem('token')
        console.log('token: ');
        console.log(token);
        const data = yield call(api.postCards, action.payload)
        
        console.log(data.success);
        if(data.success) {
        console.log('DATA >>>:');
        console.log(data);
            yield put(setCardSuccess(action.payload))
        }
    } catch(e) {
        yield put(setCardFailure(e))
    }
}

export function* getCardSaga() {
    try{
        const token = localStorage.getItem('token')
        console.log('token: ');
        console.log(token);
        const data = yield call(api.getCards, token)
        yield put(getCardSuccess(data))
    } catch(e) {
        yield put(getCardFailure(e))
    }
}

export function* cardSaga() {
    yield takeEvery(SET_CARD_REQUEST, sendCardSaga)
    yield takeEvery(GET_CARD_REQUEST, getCardSaga)
}