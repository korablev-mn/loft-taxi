import { authMiddleware } from "./authMiddleware";
import { auth } from './actions'
import { serverLogin } from './api'

jest.mock('./api', () => ({serverLogin: jest.fn(() => true)}))

describe('authMiddleware', () => {
    describe('#AUTH', () => {
        it('authenticate api', async () => {
            const dispatch = jest.fn()

            await authMiddleware({dispatch})()(
                auth('login', 'pass')
            )

            expect(serverLogin).toBeCalledWith('login', 'pass')
            expect(dispatch).toBeCalledWith(
                { type: 'LOG_IN'}    
            )
        })
    })
})