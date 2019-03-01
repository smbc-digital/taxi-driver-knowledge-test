import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import { RadioInputsContainer, DatePicker, Button, Anchor } from 'smbc-react-components'
import { getPageRoute } from '../../../helpers/pagehelper'
import moment from 'moment'

export const Resit = ({ context, history })  => {
	const isOutsideRange = (date) => {
		return moment(date).format('YYYY-MM-DD') > moment().format('YYYY-MM-DD') ? true : false
	}

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
                context.isResit.value &&
                <DatePicker
					label='Select the date of your last test'
					description='You&#39;ll be able to choose a new test 4 weeks from this date'
                    id='previous-test-date'
                    enableH2={false}
                    name={'previousTestDate'}
                    value={context.previousTestDate.value}
					onChange={context.onChange}
					validationMessage={'Check the date and try again'}
					isOutsideRange={isOutsideRange}
                />
            )
        }
	]
	
	const onSubmit = (event) => {
		if(!context.isResit.value) {
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
					onChange={(event, isValid) => context.onChange({
						target: {
							name: event.target.name,
							value: event.target.value === 'true' ? true : false
						}
					},
					isValid)}
					options={options}
					value={context.isResit.value}
					displayHeading={false}
				/>
				<Button label="Next step" isValid={context.isResit.isValid && (!context.isResit.value || context.previousTestDate.isValid)} />
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
