import { logIn } from './actions'
import { serverLogin } from './api'
import { AUTH } from './actions'

export const authMiddleware = (store) => (next) => async (action) => {
    if(action.type === AUTH) {
        const { email, password } = action.payload
        console.log('AUTH email: ' + email + ' pass: ' + password);
        const success = await serverLogin(email,password)
        console.log('success: ' + success);
        if(success) {
            console.log('success connect');
            store.dispatch(logIn())
        }
    } else {
        next(action)
    }
}