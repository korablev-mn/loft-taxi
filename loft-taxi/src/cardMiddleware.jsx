import { GET_CARD_REQUEST, getCardSuccess, getCardFailure } from './actions'

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
    }
    next(action)
}