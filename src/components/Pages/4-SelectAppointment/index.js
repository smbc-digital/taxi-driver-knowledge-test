import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import { getPageRoute } from '../../../helpers/pagehelper'
import { AlertForm, Button, Anchor } from 'smbc-react-components'

export const SelectAppointment = props => {
	const { context, history } = props

	// const componentDidMount = () => {

	// }

	const onSubmit = (event) => {
        event.preventDefault()
        history.push(getPageRoute(5))
	}
	
	return(
		<Fragment>
			<form onSubmit={onSubmit}>
				<h1>{context.formHeader}</h1>
				<AlertForm
                        level="information"
                        content="The test usually takes place on a Wednesday. There may be times when we run the test on other days, these will be displayed below."
                    />
				<h2>Choose an appointment</h2>
				<Button isValid={true} label="Next step" />
			</form>
			<Anchor label='Back' history={history} />
		</Fragment>
	)
}

SelectAppointment.propTypes = {
	context: PropTypes.object,
	history: PropTypes.object
}

export default withContext(SelectAppointment)