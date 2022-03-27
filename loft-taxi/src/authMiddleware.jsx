import { logIn } from './actions'
import { serverLogin2 } from './api'
import { AUTH } from './actions'

export const authMiddleware = (store) => (next) => async (action) => {
    if(action.type === AUTH) {
        const { email, password } = action.payload
        console.log('AUTH email: ' + email + ' pass: ' + password);
        const {success, token} = await serverLogin2(email,password)
        console.log('success: ' + success + ' ' + token);
        if(success) {
            console.log('success connect and token: ' + token);
            localStorage.setItem('token', token)
            store.dispatch(logIn(token))
        }
    } else {
        next(action)
    }
}