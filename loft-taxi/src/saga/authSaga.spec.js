import{ recordSaga } from './recordSaga'
import { authenticateSaga } from './authSaga'
import { auth } from '../actions'

jest.mock('../api', () => ({ serverLogin2: jest.fn(() => true)}))

describe('authSaga', () => {
    describe('#AUTH', () => {
        it('authenticate api', async () => {
            const dispatched = await recordSaga(
                authenticateSaga,
                auth('login', 'pass')
            )
            expect(dispatched).toEqual([
                {
                    type: 'LOG_IN'
                }
            ])
        })
    })
})