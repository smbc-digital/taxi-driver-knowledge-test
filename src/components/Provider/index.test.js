import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Provider from '../Provider'
import moment from 'moment-timezone'

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

    describe('isOutsideRange', () => {
        it('should return false for date in past', () => {
            // Arrange
            const wrapper = mount(<Provider></Provider>)
            const date = moment().subtract(2, 'days')

            // Act
            const result = wrapper.instance().isOutsideRange(date)

            // Assert
            expect(result).toBe(false)
        })

        it('should return true for date in the future', () => {
            // Arrange
            const wrapper = mount(<Provider></Provider>)
            const date = moment().add(2, 'days')

            // Act
            const result = wrapper.instance().isOutsideRange(date)

            // Assert
            expect(result).toBe(true)
        })
    })

    describe('setBookingId', () => {
        it('should update the state with the bookingId', () => {
            // Arrange
            const bookingId = 'test-id'
            const wrapper = mount(<Provider></Provider>)

            // Act
            wrapper.instance().setBookingId(bookingId)

            // Assert
            expect(wrapper.state().bookingId).toBe(bookingId)
        })
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