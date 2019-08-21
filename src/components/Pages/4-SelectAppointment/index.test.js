import { React, mount } from '../../../helpers/SetupTest'
import { SelectAppointment } from './index'
import { getPageRoute } from '../../../helpers/pagehelper'
import * as submitUtils from '../../Utils'
import moment from 'moment-timezone'
import renderer from 'react-test-renderer'

describe('SelectAppointment', () => {
	beforeEach(() => {
		fetch.resetMocks()
	})

	it('should call push on submit to page 5 when status is 200', async () => {
		// Arrange
		const data = {
			isResit: {
				value: false,
				isValid: true
			},
			previousTestDate: {
				value: '',
				isValid: false
			},
			testDate: {
				value: moment('25/04/2019', 'DD/MM/YYYY'),
				isValid: true
			},
			setBookingId: jest.fn()
		}

		const now = moment().format('DD/MM/YYYY')
		const future = moment().add(13, 'weeks').format('DD/MM/YYYY')

		const appointments = [
			{
				date: now,
				times: []
			},
			{
				date: future
			}
		]

		const history = { push: jest.fn() }
		window.location.assign = jest.fn()
		submitUtils.reserveAppointment = jest.fn().mockReturnValue({ status: 200, bookingId: 'any'} )
		const wrapper = mount(<SelectAppointment context={data} history={history} />)
		wrapper.setState({appointments: appointments})
		//Act
		await wrapper.find('form').simulate('submit')

		//Assert
		expect(history.push).toHaveBeenCalledWith(getPageRoute(5))
	})

	it('should call push on submit to page 7 when status is not 200', async () => {

		const now = moment()
		const future = moment().add(13, 'weeks')

		const appointments = [
			{
				date: now,
				times: []
			},
			{
				date: future
			}
		]
		// Arrange
		const data = {
			isResit: {
				value: false,
				isValid: true
			},
			previousTestDate: {
				value: '',
				isValid: false
			},
			testDate: {
				value: moment('25/04/2019', 'DD/MM/YYYY'),
				isValid: true
			},
			appointments: [
				{
					date: now,
					times: []
				}],
			setBookingId: jest.fn()
		}



		const history = { push: jest.fn() }
		window.location.assign = jest.fn()
		submitUtils.reserveAppointment = jest.fn().mockReturnValue({ status: 400, bookingId: 'any'} )
		const wrapper = mount(<SelectAppointment context={data} history={history}  appointments ={appointments}/>)
		wrapper.setState({appointments: appointments})
		//Act
		await wrapper.find('form').simulate('submit')		//Assert
		expect(history.push).toHaveBeenCalledWith(getPageRoute(7))
	})

	describe('getAppointments', () => {
		it('should set appointments to 12 week list when showMore is true', () => {
			// Arrange
			const now = moment()
			const future = moment().add(13, 'weeks')
			const appointments = [
				{
					date: now,
					times: []
				},
				{
					date: future
				}
			]

			const expectedAppointments = [
				{
					date: now,
					times: []
				}
			]

			const data = {
				isResit: {
					value: false,
					isValid: true
				},
				previousTestDate: {
					value: '',
					isValid: false
				},
				testDate: {
					value: moment('25/04/2019', 'DD/MM/YYYY'),
					isValid: true
				},
				setBookingId: jest.fn()
			}

			const history = { push: jest.fn() }
			const wrapper = mount(<SelectAppointment context={ data } history={ history }/>)
			// Act
			const result = wrapper.instance().filterAppointments(appointments)

			// Assert
			expect(result).toEqual(expectedAppointments)

		})
	})

	describe('onClick()', () => {
		it('should set state when called', () => {
			// Arrange
			const data = {
				isResit: {
					value: false,
					isValid: true
				},
				previousTestDate: {
					value: '',
					isValid: false
				},
				testDate: {
					value: moment('25/04/2019', 'DD/MM/YYYY'),
					isValid: true
				},
				setBookingId: jest.fn()
			}

			const event = { preventDefault: jest.fn() }
			const history = { push: jest.fn() }
			const wrapper = mount(<SelectAppointment context={ data } history={ history }/>)
			// Act
			wrapper.instance().onClick(event)

			// Assert
			expect(wrapper.state().showMore).toBe(false)
		})
	})

	describe('snapshot', () => {
		it('renders correctly with spinner while there are no appointments', () => {
			const data = {
				isResit: {
					value: true,
					isValid: true
				},
				previousTestDate: {
					value: '01/02/2019',
					isValid: true
				},
				testDate: {
					value: '',
					isValid: false
				},
				setBookingId: jest.fn()
			}

			const tree = renderer.create(<SelectAppointment context={data} />).toJSON()

			expect(tree).toMatchSnapshot()
		})
	})
})
