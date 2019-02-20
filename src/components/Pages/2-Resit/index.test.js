import { React, mount} from '../../../helpers/SetupTest'
import { Resit } from './index'
import { getPageRoute } from '../../../helpers/pagehelper'
import renderer from 'react-test-renderer'
import moment from 'moment'

describe('Resit', () => {
    it('should call push on submit for not resit', () => {
        //Arrange
        const data = {
            isResit: {
                value: 'false',
                isValid: true
            },
            previousTestDate: {
                value: '',
                isValid: false
            }
        }

        const history = { push: jest.fn() }
		const wrapper = mount(<Resit context={data} history={history} />)

        //Act
        wrapper.find('form').simulate('submit')


        //Assert
        expect(history.push).toHaveBeenCalledWith(getPageRoute(3))
    })

    it('should call push on submit for resit', () => {
        //Arrange
        const data = {
            isResit: {
                value: 'true',
                isValid: true
            },
            previousTestDate: {
                value: moment(),
                isValid: true
            }
        }

        const history = { push: jest.fn() }
		const wrapper = mount(<Resit context={data} history={history} />)

        //Act
        wrapper.find('form').simulate('submit')


        //Assert
        expect(history.push).toHaveBeenCalledWith(getPageRoute(3))
    })

    describe('snapshot', () => {
		it('should render correctly',() => { 
			// Arrange
            const data = {
                isResit: {
                    value: 'true',
                    isValid: true
                },
                previousTestDate: {
                    value: '',
                    isValid: false
                }
            }
		
			// Act
			const tree = renderer
			.create(<Resit context={data} />)
			.toJSON()
		
			// Assert
			expect(tree).toMatchSnapshot()
		})
	})
})