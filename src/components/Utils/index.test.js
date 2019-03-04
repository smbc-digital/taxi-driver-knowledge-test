import { getPaymentUrl, formatAvailableAppointments, getAvailableAppointments, reserveAppointment } from './index'
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

describe('getAvailableAppointments', () => {
    beforeEach(() => {
		fetch.resetMocks()
    })

    it('should call frontend', async () => {

        let expectedResult = {status: 200}

        let data = {
            from: '2019-03-01',
            to: '2019-07-01',
            isResit: false
        }

        fetch.mockResponse(JSON.stringify(expectedResult))

        await expect(getAvailableAppointments(data))
        expect(fetch).toHaveBeenCalledWith('/book-taxi-driver-knowledge-test/available-appointments', expect.anything())
    })
})

describe('reserveAppointment', () => {
    beforeEach(() => {
		fetch.resetMocks()
    })

    it('should call frontend', async () => {

        let expectedResult = {status: 200}

        let data = {
            testDate: '2019-03-01T09:45:00',
            isResit: false
        }

        fetch.mockResponse(JSON.stringify(expectedResult))

        await expect(reserveAppointment(data))
        expect(fetch).toHaveBeenCalledWith('/book-taxi-driver-knowledge-test/pencil-an-appointment', expect.anything())
    })
})
describe('formatAvailableAppointments', () => {
    it('it should format available appointents', async () => {
        // Arrange
        const givenAppointments = [
            {
                date: '01/03/2019',
                times: [
                    {
                        startTime: '12:00:00'
                    }
                ]
            }
        ]

        const expectedAppointments = [
            {
                date: '01/03/2019',
                displayDate: 'Friday 1 March 2019',
                times: [
                    {
                        startTime: '12:00:00',
                        id: '2019-03-01 12:00:00',
                        value: '2019-03-01 12:00:00',
                        name: 'testDate',
                        label: '12:00pm'
                    }
                ]
            }
        ]
        
        // Act
        const response = formatAvailableAppointments(givenAppointments)

        // Assert
        expect(response).toEqual(expectedAppointments)
    })
})