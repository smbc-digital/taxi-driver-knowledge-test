import { React, mount } from '../../../helpers/SetupTest'
import { AboutYourself } from './index'
import { getPageRoute } from '../../../helpers/pagehelper'
import renderer from 'react-test-renderer'

describe('AboutYourself', () => {
    it('should call push on submit', () => {
        //Arrange
        const data = {
            firstName: {
                value:'Sarah',
                isValid: true
            },
            lastName: {
                value:'Logan',
                isValid: true
            },
            phoneNumber: {
                value:'Value',
                isValid: true
            },
            emailAddress: {
                value:'Value',
                isValid: true
            },
            address: {
                value:'Value',
                isValid: true
            },
            onChange: null
        }

        const history = { push: jest.fn() }
        const wrapper = mount(<AboutYourself context={data} history={history} />)

        //Act
        wrapper.find('form').simulate('submit')

        //Assert
        expect(history.push).toHaveBeenCalledWith(getPageRoute(4))
    })

    describe('snapshot', () => {
        it('should render correctly', () => {
            //Arrange
            const data = {
                firstName: {
                    value:'Sarah',
                    isValid: true
                },
                lastName: {
                    value:'Logan',
                    isValid: true
                },
                phoneNumber: {
                    value:'Value',
                    isValid: true
                },
                emailAddress: {
                    value:'Value',
                    isValid: true
                },
                address: {
                    value:'Value',
                    isValid: true
                },
                onChange: null
            }

            // Act
			const tree = renderer
			.create(<AboutYourself context={data} />)
			.toJSON()
		
			// Assert
			expect(tree).toMatchSnapshot()

        })
    })
})