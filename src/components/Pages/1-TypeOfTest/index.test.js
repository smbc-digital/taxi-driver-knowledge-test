import { React, mount} from '../../../helpers/SetupTest'
import { TypeOfTest } from './index'
import { getPageRoute } from '../../../helpers/pagehelper'
import renderer from 'react-test-renderer'

describe('TypeOfTest', () => {
    it('should call push on submit', () => {
        //Arrange
        const data = {
            testType: {
                value: 'Private hire',
                isValid: true
            }
        }

        const history = { push: jest.fn() }
		const wrapper = mount(<TypeOfTest context={data} history={history} />)

        //Act
        wrapper.find('form').simulate('submit')
        //Assert
        expect(history.push).toHaveBeenCalledWith(getPageRoute(2))
    })

    describe('snapshot', () => {
		it('should render correctly',() => {
			// Arrange
			const data = {
                testType: {
                    value: 'Private Hire',
                    isValid: true
                }
			}

			// Act
			const tree = renderer
			.create(<TypeOfTest context={data} />)
			.toJSON()

			// Assert
			expect(tree).toMatchSnapshot()
		})
	})
})
