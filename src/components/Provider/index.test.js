import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Provider from '../Provider'

Enzyme.configure({ adapter: new Adapter() })

describe('Provider', () => {
    it('should create the base state with objects', () => {
        //Arrange
        const wrapper = mount(<Provider></Provider>)

        //Assert
        expect(wrapper.state()).not.toBeNull()
    })

    
    it('should set displayRecaptcha in state to be false when displayRecaptcha span null',() => {
        // Arrange
        const wrapper = mount(<Provider></Provider>)
        // Assert
        expect(wrapper.state().displayRecaptcha).toBeFalsy()
    })

    it('should set displayRecaptcha in state to be true when enabled',() => {
        // Arrange
        document.body.innerHTML = '<span id="displayRecaptcha" class="hidden">true</span>'
        const wrapper = mount(<Provider></Provider>)

        // Assert
        expect(wrapper.state().displayRecaptcha).toBeTruthy()
    })

    it('should set displayRecaptcha in state to be false when disabled',() => {
        // Arrange
        document.body.innerHTML = '<span id="displayRecaptcha" class="hidden">false</span>'
        const wrapper = mount(<Provider></Provider>)

        // Assert
        expect(wrapper.state().displayRecaptcha).toBeFalsy()
    })

    describe('onChange', () => {
        it('should update the state with event data', () => {
            // Arrange
            const wrapper = mount(<Provider></Provider>)
            const e = {
                target: {
                    value: 'test',
                    name: 'firstName'
                }
            }

            // Act
            wrapper.instance().onChange(e, true)

            // Assert
            expect(wrapper.state().firstName.value).toBe('test')
            expect(wrapper.state().firstName.isValid).toBe(true)
        })
    })

    describe('onFormSubmission', () => {
        it('should set submittedFormSuccessfully to true', () => {
            // Arrange
            const wrapper = mount(<Provider></Provider>)

            // Act
            wrapper.instance().onFormSubmission()

            // Assert
            expect(wrapper.state().submittedFormSuccessfully).toBe(true)
        })
    })
})