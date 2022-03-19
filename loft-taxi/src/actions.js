export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const AUTH = 'AUTH'

export const logIn = () => ({ type: LOG_IN })
export const logOut = () => ({ type: LOG_OUT })
export const auth = (email, password) => ({ type: AUTH, payload: { email, password } })