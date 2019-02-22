import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import { RadioInputsContainer, DatePicker, Button, Anchor } from 'smbc-react-components'
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
					description='You&#39;ll be able to choose a new test 4 weeks from this date'
                    id='previous-test-date'
                    enableH2={false}
                    name={'previousTestDate'}
                    value={context.previousTestDate.value}
					onChange={context.onChange}
					validationMessage={'Check the date and try again'}
					isOutsideRange={context.isOutsideRange}
                />
            )
            
        }
    ]
	
	const onSubmit = (event) => {
		if(context.isResit.value == 'false') {
			context.previousTestDate.value = ''
			context.previousTestDate.isValid = false
		}
		event.preventDefault()
		history.push(getPageRoute(3))
	}

	return (
		<Fragment>
			<form onSubmit={onSubmit}>
				<h1>{context.formHeader}</h1>
				<h2>Is this the first time you&#39;ll be taking the taxi driver knowledge test?</h2>
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
