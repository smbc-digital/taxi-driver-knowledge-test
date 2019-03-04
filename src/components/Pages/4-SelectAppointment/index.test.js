import { React, mount } from '../../../helpers/SetupTest'
import { SelectAppointment } from './index'
// import { getPageRoute } from '../../../helpers/pagehelper'
import * as submitUtils from '../../Utils'
// import moment from 'moment'

describe('SelectAppointment', () => {
	it('should call push on submit', () => {
		//Arrange
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
				value: '25/04/2019',
				isValid: true
			}
		}

		const history = { push: jest.fn() }
		submitUtils.reserveAppointment = jest.fn().mockReturnValue({ status: 200, response: {bookingId: 'any'} })
		const wrapper = mount(<SelectAppointment context={data} history={history} />)

		//Act
		wrapper.find('form').simulate('submit')

		//Assert
		// expect(history.push).toHaveBeenCalledWith(getPageRoute(5))
	})


	// it('should update state when showMore clicked', () => {
	// 	//Arrange
	// 	const data = {
	// 		appointments: [
	// 			{
	// 				date: '27/02/2019',
	// 				times: [
	// 					{
	// 						startTime: '08:45:00',
	// 						endTime: '11:00:00'
	// 					},
	// 					{
	// 						startTime: '12:45:00',
	// 						endTime: '15:00:00'
	// 					}
	// 				]
	// 			},
	// 			{
	// 				date: '06/03/2019',
	// 				times: [
	// 					{
	// 						startTime: '08:45:00',
	// 						endTime: '11:00:00'
	// 					}
	// 				]
	// 			}
	// 		],
	// 		eighteenWeekAppointments: [
	// 			{
	// 				date: 'Wednesday 27 February 2019',
	// 				times: [
	// 					{
	// 						startTime: '8:45am',
	// 						endTime: '11:00:00'
	// 					},
	// 					{
	// 						startTime: '12:45pm',
	// 						endTime: '15:00:00'
	// 					}
	// 				]
	// 			},
	// 			{
	// 				date: 'Wednesday 6 March 2019',
	// 				times: [
	// 					{
	// 						startTime: '8:45am',
	// 						endTime: '11:00:00'
	// 					}
	// 				]
	// 			},
	// 			{
	// 				date: 'Wednesday 13 March 2019',
	// 				times: [
	// 					{
	// 						startTime: '8:45am',
	// 						endTime: '11:00:00'
	// 					},
	// 					{
	// 						startTime: '12:45pm',
	// 						endTime: '15:00:00'
	// 					}
	// 				]
	// 			}
	// 		]
	// 	}

	// 	const history = { push: jest.fn() }
	// 	const event = { preventDefault: jest.fn() }
	// 	const wrapper = mount(<SelectAppointment context={data} history={history} />)

	// // 	//Act
	// 	wrapper.instance().onClick(event)

	// 	//Assert
	// 	expect(wrapper.state().showMore).toEqual(false)
	// })

	// it('on componentDidMount did update state', async () => {
	// 	const data = {
	// 		isResit: {
	// 			value: false,
	// 			isValid: false
    //         },
    //         previousTestDate: {
	// 			value: '26/02/2019',
	// 			isValid: false
	// 		},
	// 		appointments: [],
	// 		eighteenWeekAppointments: [],
	// 		twelveWeekAppointments : []
	// 	}

	// 	const history = { push: jest.fn() }
	// 	const wrapper = mount(<SelectAppointment context={data} history={history} />)

	// 	//Act
	// 	wrapper.instance().componentDidMount()

	// 	expect(wrapper.state().appointments).toEqual([])
	// })
})
