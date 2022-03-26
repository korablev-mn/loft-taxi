import { 
    GET_CARD_REQUEST,
    getCardSuccess,
    getCardFailure,
    SET_CARD_REQUEST,
    setCardSuccess, 
    setCardFailure
    } from './actions'
import { postCards } from '../src/api'

export const cardMiddleware = (store) => (next) => async (action) => {
    console.log('start: ' + action.type);
    if(action.type === GET_CARD_REQUEST) {
        const { auth: { token }} = store.getState()
        fetch(
            `https://loft-taxi.glitch.me/card?token=${token}`, {method: 'GET'}
        )
        .then(d => d.json())
        .then(data => {
            console.log(data);
            store.dispatch(getCardSuccess(data))
        })
        .catch(error => {
            console.log('Error: '+ error)
            store.dispatch(getCardFailure(error))
        })
    } else if(action.type === SET_CARD_REQUEST) {
        try {
        const {answer} = await postCards(action.payload)
        if(answer.success) {
            store.dispatch(setCardSuccess(action.payload))
        }
        console.log('answer: ' + answer);
        console.log(answer);
        } catch(e) {
            console.log('Error set card: ' + e);
            store.dispatch(setCardFailure(e))
        }
    }
    next(action)
}