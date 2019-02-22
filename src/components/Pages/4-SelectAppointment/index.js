import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import { getPageRoute } from '../../../helpers/pagehelper'
import { AlertForm, SelectableButtonList, Button, Anchor } from 'smbc-react-components'
import { getAvailableAppointments } from '../../Utils'
import moment from 'moment'

export class SelectAppointment extends Component {
	constructor(props) {
		super(props)
		props.context

		this.state = {
			appointments: []
		}
	}

	componentDidMount = async () => {
		const result = await getAvailableAppointments(this.props.context)
		const formattedResult = this.formatAppointments(result.appointments)
		const copyOfState = Object.assign({}, this.state)
		copyOfState.appointments = formattedResult
		this.setState(copyOfState)
	}

	formatAppointments = (appointments) => {
		for(let i = 0; i < appointments.length; i++) {
			appointments[i].date = moment(appointments[i].date, 'DD/MM/YYYY', true).format('dddd D MMMM YYYY')
			for(let j = 0; j < appointments[i].times.length; j++) {
				appointments[i].times[j].startTime = moment(appointments[i].times[j].startTime, 'HH:mm:ss', true).format('H:mma')
			}
		}

		return appointments
	}

	onSubmit = (event) => {
        event.preventDefault()
        history.push(getPageRoute(5))
	}

	render() {
		const { formHeader } = this.props.context
		return(
			<Fragment>
				<form onSubmit={this.onSubmit}>
					<h1>{formHeader}</h1>
					<AlertForm
							level="information"
							content="The test usually takes place on a Wednesday. There may be times when we run the test on other days, these will be displayed below."
						/>
					<SelectableButtonList 
							heading='Select an appointment' 
							enableH2={true} 
							buttonList={this.state.appointments} 
							colour='inverted' 
							inline={true} 
							showMore={true} 
						/>
					<Button isValid={true} label="Next step" />
				</form>
				<Anchor label='Back' history={history} />
			</Fragment>
		)
	}
}

SelectAppointment.propTypes = {
	context: PropTypes.object,
	history: PropTypes.object
}

export default withContext(SelectAppointment)