import { setCard, getCard } from './api'
import { CARD } from './actions'

export const cardMiddleware = (store) => (next) => async (action) => {
    if(action.type === CARD) {
        // const { cardNumber, expiryDate, cardName, cvc } = action.payload
        const {cardNumber, expiryDate, cardName, cvc} = await getCard()
        console.log('get card next : ' + cardNumber +' '+ expiryDate +' ' + cardName + ' '+ cvc);
        if(cardNumber) {
            console.log('get card success : ' + cardNumber +' '+ expiryDate +' ' + cardName + ' '+ cvc);
            localStorage.setItem('cardNumber', cardNumber)
            // store.dispatch(logIn())
        }
    } else {
        next(action)
    }
}