import { React } from '../../../helpers/SetupTest'
import { FailedBooking } from './index'
import renderer from 'react-test-renderer'

describe('FailedBooking', () => {
    describe('snapshot', () => {
		it('should render correctly',() => { 
			// Arrange
			const history = { block: jest.fn() }

			// Act
			const tree = renderer
			.create(<FailedBooking history={history} />)
			.toJSON()
		
			// Assert
			expect(tree).toMatchSnapshot()
		})
	})
})
