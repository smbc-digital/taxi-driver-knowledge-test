import { React, mount} from '../../../helpers/SetupTest'
import { Resit } from './index'
import { getPageRoute } from '../../../helpers/pagehelper'

describe('Resit', () => {
    it('should call push on submit', () => {
        //Arrange
        const data = {
            isResit: {
                value: 'false',
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
})