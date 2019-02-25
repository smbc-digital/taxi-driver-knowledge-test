import { submitForm, getAvailableAppointments } from './index'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'


Enzyme.configure({ adapter: new Adapter() })

describe('submitForm', () => {
    beforeEach(() => {
		fetch.resetMocks()
    })
    

    it('should call frontend with sanitized context', async () => {

        let expectedResult = {status: 200}

        const expectedContext = {
            firstName : 'test first name',
			lastName : 'test last name'
        }

        let data = {
            firstName : {
				value: 'test first name',
				isValid: false
			},
			lastName : {
				value: 'test last name',
				isValid: false
			}
        }

        let expectedFetch = {
            method: 'POST',
            headers: {
                Accept: 'application/json; charset=utf-8',
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(expectedContext)
        }

        fetch.mockResponse(JSON.stringify(expectedResult))

        await expect(submitForm(data))
        expect(fetch).toHaveBeenCalledWith(expect.anything(), expectedFetch)
    })

    it('should remove undefined from sanitized context', async () => {

        let expectedResult = {status: 200}

        const expectedContext = {
            firstName : 'test'
        }

        let data = {
            firstName : {
				value: 'test',
				isValid: false
			},
            undefined
        }
        
        let expectedFetch = {
            method: 'POST',
            headers: {
                Accept: 'application/json; charset=utf-8',
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(expectedContext)
        }

        fetch.mockResponse(JSON.stringify(expectedResult))

        await expect(submitForm(data))
        expect(fetch).toHaveBeenCalledWith(expect.anything(), expectedFetch)
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

        await expect(submitForm(data))
        expect(fetch).toHaveBeenCalledWith('/book-taxi-driver-knowledge-test/submit', expect.anything())
    })


    it('should remove script from content when submitting to frontend', async () => {

        let expectedResult = {status: 200}

        const expectedContext = {
            firstName : 'shdshdshtextetxetxtexte more text helpim stuckinahere',
            lastName: 'valid'
        }

        let data = {
            firstName : {
				value: 'shdshdshtextetxetxtexte more text<script>alert(\'alert\')</script> helpim stuckinahere',
				isValid: true
            },
            lastName: {
                value: 'valid',
				isValid: true
            }
        }
        
        let expectedFetch = {
            method: 'POST',
            headers: {
                Accept: 'application/json; charset=utf-8',
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(expectedContext)
        }

        fetch.mockResponse(JSON.stringify(expectedResult))

        await expect(submitForm(data))
        expect(fetch).toHaveBeenCalledWith(expect.anything(), expectedFetch)
    })

    it('should remove html tag from content when submitting to frontend', async () => {

        let expectedResult = {status: 200}

        const expectedContext = {
            firstName: 'valid',
            lastName: 'valid'
        }

        let data = {
            firstName: {
                value: '<p>valid</p>',
				isValid: true
            },
            lastName: {
                value: 'valid',
				isValid: true
            }
        }
        
        let expectedFetch = {
            method: 'POST',
            headers: {
                Accept: 'application/json; charset=utf-8',
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(expectedContext)
        }

        fetch.mockResponse(JSON.stringify(expectedResult))

        await expect(submitForm(data))
        expect(fetch).toHaveBeenCalledWith(expect.anything(), expectedFetch)
    })
})