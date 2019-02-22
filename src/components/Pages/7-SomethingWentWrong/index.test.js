import { React } from '../../../helpers/SetupTest'
import { SomethingWentWrong } from './index'
import renderer from 'react-test-renderer'

describe('SomethingWentWrong', () => {
    describe('snapshot', () => {
		it('should render correctly',() => { 
			// Arrange
			const history = { block: jest.fn() }

			// Act
			const tree = renderer
			.create(<SomethingWentWrong history={history} />)
			.toJSON()
		
			// Assert
			expect(tree).toMatchSnapshot()
		})
	})
})
