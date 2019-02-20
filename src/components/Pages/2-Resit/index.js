import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import { RadioInputsContainer, AlertForm, DatePicker, Button, Anchor } from 'smbc-react-components'
import { getPageRoute } from '../../../helpers/pagehelper'

export const Resit = props => {
	const { context, history } = props

	const options = [
        {
            label: 'Yes',
            id: 'yes',
            name: 'isResit',
			value: 'false'
        },
        {
            label: 'No',
            id: 'no',
            name: 'isResit',
            value: 'true',
			renderIfChecked: () => (
                context.isResit.value === 'true' &&
                <DatePicker
                    label='Select the date of your last test'
                    id='previous-test-date'
                    enableH2={false}
                    name={'previousTestDate'}
                    value={context.previousTestDate.value}
					onChange={context.onChange}
					validationMessage={'Check the date and try again'}
					dateCantBeInTheFuture={true}
                />
            )
            
        }
    ]
	
	const onSubmit = (event) => {
		event.preventDefault()
		history.push(getPageRoute(3))
	}

	return (
		<Fragment>
			<form onSubmit={onSubmit}>
				<h1>{context.formHeader}</h1>
				<h2>Is this the first time you&#39;ll be taking the taxi driver knowledge test?</h2>
				<AlertForm
					level='information'
					content='If you&#39;ve failed the test before, you cannot retake the test for at least 4 weeks.'
				/>
				<RadioInputsContainer
					onChange={context.onChange}
					options={options}
					value={context.isResit.value}
					displayHeading={false}
				/>
				<Button label="Next step" isValid={context.isResit.value == 'false' || (context.isResit.value == 'true' && context.previousTestDate.isValid)} />
			</form>
			<Anchor label='Back' history={history} />
		</Fragment>
	)
}

Resit.propTypes = {
	context: PropTypes.object,
	history: PropTypes.object
}

export default withContext(Resit)
