import React from 'react'
import App from './App'
import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { createMemoryHistory } from 'history'

jest.mock('./components/home/Home', () => ({ Home: () => <div>Home component</div> }))
jest.mock('./components/map/Map', () => ({ Map: () => <div>Map component</div> }))
jest.mock('./components/profile/Profile', () => ({ Profile: () => <div>Profile component</div> }))

describe('App', () => {
    it('renders coorectly', () => {
        const mockStore = {
            getState: () => ({auth: {isLoggedIn: true} }),
            subscribe: () => { },
            dispatch: () => { },
        }
        const history = createMemoryHistory()
        const { container } = render(
            <Route history={history}>
                <Provider store={mockStore}>
                    <App />
                </Provider>
            </Route>
        )
        expect(container.innerHTML).toMatch('Home component')
    })

    describe('when click on navigation buttons', () => {
        it('open the page', () => {
            const mockStore = {
                getState: () => ({auth: {isLoggedIn: true} }),
                subscribe: () => { },
                dispatch: () => { },
            }
            const history = createMemoryHistory()
            const { container, getByText } = render(
                <Route history={history}>
                    <Provider store={mockStore}>
                        <App />
                    </Provider>
                </Route>
            )
            expect(container.innerHTML).toMatch('Home component')
            fireEvent.click(getByText('Map'))
            expect(container.innerHTML).toMatch('Map component')

            fireEvent.click(getByText('Profile'))
            expect(container.innerHTML).toMatch('Profile component')
        })
    })

})