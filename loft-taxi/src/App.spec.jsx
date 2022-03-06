import React from 'react'
import App from './App'
import { render, fireEvent } from '@testing-library/react'

jest.mock('./components/home/Home', () => ({ Home: () => <div>Home component</div>}))
jest.mock('./components/map/Map', () => ({ Map: () => <div>Map component</div>}))
jest.mock('./components/profile/Profile', () => ({ Profile: () => <div>Profile component</div>}))

describe('App', () => {
    it('renders coorectly', () => {
        const { container } = render(<App/>)
        expect(container.innerHTML).toMatch('Home component')
    })
    
    describe('when click on navigation buttons', () => {
        it('open the page', () => {
            const { getByText, container } = render(<App/>)

            fireEvent.click(getByText('Map'))
            expect(container.innerHTML).toMatch('Map component')

            fireEvent.click(getByText('Profile'))
            expect(container.innerHTML).toMatch('Profile component')
        })
    })

})