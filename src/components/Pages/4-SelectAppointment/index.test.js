import { React, mount } from '../../../helpers/SetupTest'
import { SelectAppointment } from './index'
import { getPageRoute } from '../../../helpers/pagehelper'
import moment from 'moment'

describe('SelectAppointment', () => {
	it('should call push on submit', () => {
		//Arrange
		const data = {
			appointments: [
				{
					date: '27/02/2019',
					times: [
						{
							startTime: '08:45:00',
							endTime: '11:00:00'
						},
						{
							startTime: '12:45:00',
							endTime: '15:00:00'
						}
					]
				},
				{
					date: '06/03/2019',
					times: [
						{
							startTime: '08:45:00',
							endTime: '11:00:00'
						}
					]
				}
			]
		}

		const history = { push: jest.fn() }
		const wrapper = mount(<SelectAppointment context={data} history={history} />)

		//Act
		wrapper.find('form').simulate('submit')

		//Assert
		expect(history.push).toHaveBeenCalledWith(getPageRoute(5))
	})

	it('formatAppointments test', () => {
		const data = {
			appointments: [
				{
					date: '27/02/2019',
					times: [
						{
							startTime: '08:45:00',
							endTime: '11:00:00'
						},
						{
							startTime: '12:45:00',
							endTime: '15:00:00'
						}
					]
				},
				{
					date: '06/03/2019',
					times: [
						{
							startTime: '08:45:00',
							endTime: '11:00:00'
						}
					]
				}
			]
		}

		const expectedData = [
			{
				date: 'Wednesday 27 February 2019',
				times: [
					{
						startTime: '8:45am',
						endTime: '11:00:00'
					},
					{
						startTime: '12:45pm',
						endTime: '15:00:00'
					}
				]
			},
			{
				date: 'Wednesday 6 March 2019',
				times: [
					{
						startTime: '8:45am',
						endTime: '11:00:00'
					}
				]
			}
		]

		const history = { push: jest.fn() }
		const wrapper = mount(<SelectAppointment context={data} history={history} />)

		const formatted = wrapper.instance().formatAppointments(data.appointments)

		expect(formatted).toEqual(expectedData)
	})

	it('getTwelveWeeksAppointments within 12 week limit test', () => {
		const data = {
			appointments: [
				{
					date: moment().format('DD/MM/YYYY'),
					times: [
						{
							startTime: '08:45:00',
							endTime: '11:00:00'
						},
						{
							startTime: '12:45:00',
							endTime: '15:00:00'
						}
					]
				}
			]
		}

		const expectedData = [
			{
				date: moment().format('DD/MM/YYYY'),
				times: [
					{
						startTime: '08:45:00',
						endTime: '11:00:00'
					},
					{
						startTime: '12:45:00',
						endTime: '15:00:00'
					}
				]
			}
		]

		const history = { push: jest.fn() }
		const wrapper = mount(<SelectAppointment context={data} history={history} />)

		const formatted = wrapper.instance().getTwelveWeeksAppointments(data.appointments)

		expect(formatted).toEqual(expectedData)
	})

	it('getTwelveWeeksAppointments over 12 week limit test', () => {
		const data = {
			appointments: [
				{
					date: moment().format('DD/MM/YYYY'),
					times: [
						{
							startTime: '08:45:00',
							endTime: '11:00:00'
						},
						{
							startTime: '12:45:00',
							endTime: '15:00:00'
						}
					]
				},
				{
					date: moment().add(13, 'weeks').format('DD/MM/YYYY'),
					times: [
						{
							startTime: '08:45:00',
							endTime: '11:00:00'
						},
						{
							startTime: '12:45:00',
							endTime: '15:00:00'
						}
					]
				}
			]
		}

		const expectedData = [
			{
				date: moment().format('DD/MM/YYYY'),
				times: [
					{
						startTime: '08:45:00',
						endTime: '11:00:00'
					},
					{
						startTime: '12:45:00',
						endTime: '15:00:00'
					}
				]
			}
		]

		const history = { push: jest.fn() }
		const wrapper = mount(<SelectAppointment context={data} history={history} />)

		const formatted = wrapper.instance().getTwelveWeeksAppointments(data.appointments)

		expect(formatted).toEqual(expectedData)
	})

	it('should update state when showMore clicked', () => {
		//Arrange
		const data = {
			appointments: [
				{
					date: '27/02/2019',
					times: [
						{
							startTime: '08:45:00',
							endTime: '11:00:00'
						},
						{
							startTime: '12:45:00',
							endTime: '15:00:00'
						}
					]
				},
				{
					date: '06/03/2019',
					times: [
						{
							startTime: '08:45:00',
							endTime: '11:00:00'
						}
					]
				}
			],
			eighteenWeekAppointments: [
				{
					date: 'Wednesday 27 February 2019',
					times: [
						{
							startTime: '8:45am',
							endTime: '11:00:00'
						},
						{
							startTime: '12:45pm',
							endTime: '15:00:00'
						}
					]
				},
				{
					date: 'Wednesday 6 March 2019',
					times: [
						{
							startTime: '8:45am',
							endTime: '11:00:00'
						}
					]
				},
				{
					date: 'Wednesday 13 March 2019',
					times: [
						{
							startTime: '8:45am',
							endTime: '11:00:00'
						},
						{
							startTime: '12:45pm',
							endTime: '15:00:00'
						}
					]
				}
			]
		}

		const history = { push: jest.fn() }
		const event = { preventDefault: jest.fn() }
		const wrapper = mount(<SelectAppointment context={data} history={history} />)

	// 	//Act
		wrapper.instance().onClick(event)

		//Assert
		expect(wrapper.state().showMore).toEqual(false)
	})

	it('on componentDidMount did update state', async () => {
		const data = {
			isResit: {
				value: 'false',
				isValid: false
            },
            previousTestDate: {
				value: '26/02/2019',
				isValid: false
			},
			appointments: [],
			eighteenWeekAppointments: [],
			twelveWeekAppointments : []
		}

		const history = { push: jest.fn() }
		const wrapper = mount(<SelectAppointment context={data} history={history} />)

		//Act
		wrapper.instance().componentDidMount()

		expect(wrapper.state().appointments).toEqual([])
	})
})
