import { GET_CARD_REQUEST, getCardSuccess, getCardFailure, SET_CARD, setCard } from './actions'
import { postCards } from '../src/api'

export const cardMiddleware = (store) => (next) => async (action) => {
    console.log('start: ' + action.type);
    if(action.type === GET_CARD_REQUEST) {
        console.log('state: ' + store.getState());
        fetch(
            `https://loft-taxi.glitch.me/card?token=AUTH_TOKEN`, {method: 'GET'}
        )
        .then(d => d.json())
        .then(data => {
            console.log('data id: ' + data.id);
            console.log('data cardName: ' + data.cardName);
            store.dispatch(getCardSuccess(data))
        })
        .catch(error => {
            console.log('Error: '+ error)
            store.dispatch(getCardFailure(error))
        })
    } else if(action.type === SET_CARD) {
        console.log('setCard: ' + store.getState());
        const { cardNumber, expiryDate, cardName, cvc } = action.payload
        console.log('setparams from card: ' + cardNumber + ' ' + expiryDate +' ' + cardName +' ' + cvc );
        try {
        const {answer} = await postCards(cardNumber, expiryDate, cardName, cvc)
        console.log('answer: ' + answer);
        } catch(e) {
            console.log('Error set card: ' + e);
        }
    }
    next(action)
}