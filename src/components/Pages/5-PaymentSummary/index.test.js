import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
// import { getPageRoute } from '../../../helpers/pagehelper'
import * as submitUtils from '../../Utils'
import { PaymentSummary } from './index'
// import renderer from 'react-test-renderer'

Enzyme.configure({ adapter: new Adapter() })

describe('PaymentSummary', () => {
	beforeEach(() => {
		fetch.resetMocks()
	})

	it('should call push on submit with the correct next page url when response is 200', async () => {
		// Arrange
		const url = 'http://www.test.url/paymentTest'
		const data = {
			testDate: '26/02/2019',
			selectedAppointment:{
				date: 'test',
				times:{
					startTime: 'asd'
				}
			}
		}
		const history = { push: jest.fn() }
		window.location.assign = jest.fn()
		submitUtils.getPaymentUrl = jest.fn().mockReturnValue({ status: 200, url: url })

		const wrapper = mount(<PaymentSummary context={data} history={history} />)

		// Act
		await wrapper.find('form').simulate('submit')

		// Assert
		expect(window.location.assign).toHaveBeenCalledWith(url)
	})

	// it('should call push on submit with an error page when reponse is not 200', async () => {
	// 	// Arrange
	// 	const url = 'http://www.test.url/paymentTest'
	// 	const data = {
	// 		selectedAppointment:{
	// 			date: 'test',
	// 			times:{
	// 				startTime: 'asd'
	// 			}
	// 		}
	// 	}
	// 	const history = { push: jest.fn() }
	// 	window.location.assign = jest.fn()
	// 	submitUtils.getPaymentUrl = jest.fn().mockReturnValue({ status: 400, url: url })

	// 	const wrapper = mount(<PaymentSummary context={data} history={history} />)

	// 	// Act
	// 	await wrapper.find('form').simulate('submit')

	// 	// Assert
	// 	expect(history.push).toHaveBeenCalledWith(getPageRoute(7))
	// })

	// it('should not call push on submit when recaptcha is invalid', () => {
	// 	// Arrange
	// 	document.body.innerHTML = '<span id="displayRecaptcha" class="hidden">true</span>'
	// 	const data = {
	// 		displayRecaptcha: true,
	// 		selectedAppointment:{
	// 			date: 'test',
	// 			times:{
	// 				startTime: 'asd'
	// 			}
	// 		}
	// 	}

	// 	let history = { push: jest.fn() }
	// 	let wrapper = mount(<PaymentSummary context={data} history={history} />)

	// 	// Act
	// 	wrapper.find('button').simulate('click')

	// 	// Assert
	// 	expect(history.push).not.toBeCalled()
	// })

	// it('should set recaptchaValid in state to false', () => {
	// 	// Arrange
	// 	document.body.innerHTML = '<span id="displayRecaptcha" class="hidden">true</span>'
	// 	const data = {
	// 		displayRecaptcha: true,
	// 		selectedAppointment:{
	// 			date: 'test',
	// 			times:{
	// 				startTime: 'asd'
	// 			}
	// 		}
	// 	}

	// 	let history = { push: jest.fn() }
	// 	let wrapper = mount(<PaymentSummary context={data} history={history} />)

	// 	// Act
	// 	wrapper.instance().onChangeRecaptcha(undefined)

	// 	// Assert
	// 	expect(wrapper.state().recaptchaValid).toBe(false)
	// })

	// it('should set recaptchaValid in state to true', () => {
	// 	// Arrange
	// 	document.body.innerHTML = '<span id="displayRecaptcha" class="hidden">true</span>'
	// 	const data = {
	// 		displayRecaptcha: true,
	// 		selectedAppointment:{
	// 			date: 'test',
	// 			times:{
	// 				startTime: 'asd'
	// 			}
	// 		}
	// 	}

	// 	let history = { push: jest.fn() }
	// 	let wrapper = mount(<PaymentSummary context={data} history={history} />)

	// 	// Act
	// 	wrapper.instance().onChangeRecaptcha('testRecaptchaValue')

	// 	// Assert
	// 	expect(wrapper.state().recaptchaValid).toBe(true)
	// })

	// describe('snapshot', () => {
	// 	it('renders correctly', () => {
	// 		const context = {
	// 			whyMoreSpace: {
	// 				value: '',
	// 				isValid: false
	// 			},
	// 			whyMoreSpaceOther: {
	// 				value: '',
	// 				isValid: false
	// 			},
	// 			selectedAppointment:{
	// 				date: 'test',
	// 				times:{
	// 					startTime: 'asd'
	// 				}
	// 			}
	// 		}

	// 		const tree = renderer.create(<PaymentSummary context={context} />).toJSON()

	// 		expect(tree).toMatchSnapshot()
	// 	})
	// })
})
