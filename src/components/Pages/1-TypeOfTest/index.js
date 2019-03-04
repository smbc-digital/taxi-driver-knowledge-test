import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import { RadioInputsContainer, Button } from 'smbc-react-components'
import { getPageRoute } from '../../../helpers/pagehelper'

export const TypeOfTest = props => {
	const { context, history } = props
	
	const onSubmit = (event) => {
		event.preventDefault()
		history.push(getPageRoute(2))
	}

	return (
		<Fragment>
			<form onSubmit={onSubmit}>
				<h1>{context.formHeader}</h1>
				<RadioInputsContainer
					onChange={context.onChange}
					options={[{
						label: 'Private hire',
						id: 'private',
						name: 'testType',
						value: 'Private Hire'
					},
					{
						label: 'Hackney carriage',
						id: 'hackney',
						name: 'testType',
						value: 'Hackney Carriage'
					},
					{
						label: 'Executive hire',
						id: 'executive',
						name: 'testType',
						value: 'Executive Hire'
					},
					{
						label: 'Assisted transport',
						id: 'assisted',
						name: 'testType',
						value: 'Assisted Transport'
					}]}
					value={context.testType.value}
					displayHeading={true}
					header='Which taxi driver knowledge test do you want to take?'
					enableH2={true}
				/>
				<Button label="Next step" isValid={context.testType.isValid} />
			</form>
		</Fragment>
	)
}

TypeOfTest.propTypes = {
	context: PropTypes.object,
	history: PropTypes.object
}

export default withContext(TypeOfTest)
