import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Success } from './index'

Enzyme.configure({ adapter: new Adapter() })

describe('Success',() => { 
	it('should find elements required',() => { 
		// Arrange
		const context = {
			success: {
				value: '',
			}
		}
		const history = { block: jest.fn() }
		const wrapper = mount(<Success context={context} history={history} />)
		// Act

		// Assert
		expect(wrapper.find('h1','h2','p','a').exists()).toBe(true)
	})
})