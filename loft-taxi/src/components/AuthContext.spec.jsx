import React from 'react'
import { AuthProvider, AuthContext } from './AuthContext'
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

describe('AuthContext', () => {
    describe('#login', () => {
        it('sets prop isLoggedIn to false', () => {
            let isLoggedIn;
            let logIn;

            render(
                <AuthProvider>
                    <AuthContext.Consumer>
                        {(value) => {
                            isLoggedIn = value.isLoggedIn
                            logIn = value.logIn
                            return null
                        }}
                    </AuthContext.Consumer>
                </AuthProvider>
            )
            expect(isLoggedIn).toBe(false)
            act(() => {
                logIn('test@mail.ru', '12345')
            })
            expect(isLoggedIn).toBe(true)
        })
    })
    describe('#logout', () => {
        it('sets prop isLoggedIn to false', () => {
            let isLoggedIn;
            let logIn;

            render(
                <AuthProvider>
                    <AuthContext.Consumer>
                        {(value) => {
                            isLoggedIn = value.isLoggedIn
                            logIn = value.logIn
                            return null
                        }}
                    </AuthContext.Consumer>
                </AuthProvider>
            )
            expect(isLoggedIn).toBe(false)
            act(() => {
                logIn('test@mail.ru', '12345')
            })
            expect(isLoggedIn).toBe(true)
            act(() => {
                logOut()
            })
            expect(isLoggedIn).toBe(false)
        })
    })
})