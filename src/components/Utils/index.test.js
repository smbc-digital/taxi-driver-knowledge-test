import { getPaymentUrl } from './index'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'


Enzyme.configure({ adapter: new Adapter() })

describe('getPaymentUrl', () => {
    beforeEach(() => {
		fetch.resetMocks()
    })

    it('should call frontend', async () => {

        let expectedResult = {status: 200}

        let data = {
            firstName : {
				value: 'test',
				isValid: false
			}
        }

        fetch.mockResponse(JSON.stringify(expectedResult))

        await expect(getPaymentUrl(data))
        expect(fetch).toHaveBeenCalledWith('/book-taxi-driver-knowledge-test/generate-payment-url', expect.anything())
    })
})