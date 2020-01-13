import React from 'react'
import Enzyme, { mount } from 'enzyme'
import queryString from 'query-string'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'
import PaymentFailed from './index'

Enzyme.configure({ adapter: new Adapter() })

describe('PaymentFailed', () => {

    it('should parse payment url query string', () => {
        // Arrange
        let parseMock = jest.fn()
        parseMock.mockReturnValue({
            paymenturl: 'test'
        })
        queryString.parse = parseMock

        mount(<PaymentFailed location={{ search: '?paymenturl=test' }} />)

        // Assert
        expect(parseMock).toHaveBeenCalled()
    })

    describe('snapshot', () => {

        it('should render correctly', () => {
            // Arrange
            const tree = renderer
                .create(<PaymentFailed location={{ search: '?paymenturl=test' }} />)
                .toJSON()

            // Assert
            expect(tree).toMatchSnapshot()
        })
    })
})