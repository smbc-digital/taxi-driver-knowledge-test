import { React } from '../../../helpers/SetupTest'
import { SomethingWentWrong } from './index'
import renderer from 'react-test-renderer'

describe('SomethingWentWrong', () => {
    describe('snapshot', () => {
		it('should render correctly',() => { 
			// Arrange
			const history = { block: jest.fn() }
			const location = {search: {

			}}

			// Act
			const tree = renderer
			.create(<SomethingWentWrong history={history} location={location} />)
			.toJSON()
		
			// Assert
			expect(tree).toMatchSnapshot()
		})
	})
})
