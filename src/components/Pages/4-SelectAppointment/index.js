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
			appointments: [],
			twelveWeekAppointments: [],
			eighteenWeekAppointments: [],
			selectedAppointment:{},
			isSelectedAppointment: false,
			showMore: true
		}
	}

	componentDidMount = async () => {
		const result = await getAvailableAppointments(this.props.context)
		const appointments = result.appointments
		const twelveWeeksResult = this.getTwelveWeeksAppointments(appointments)
		const formattedResult = this.formatAppointments(result.appointments)
		const copyOfState = Object.assign({}, this.state)
		copyOfState.appointments = twelveWeeksResult
		copyOfState.twelveWeekAppointments = twelveWeeksResult
		copyOfState.eighteenWeekAppointments = formattedResult
		this.setState(copyOfState)
	}

	formatAppointments = appointments => {
		for (let i = 0; i < appointments.length; i++) {
			appointments[i].date = moment(appointments[i].date, 'DD/MM/YYYY', true).format('dddd D MMMM YYYY')
			for (let j = 0; j < appointments[i].times.length; j++) {
				appointments[i].times[j].startTime = moment(
					appointments[i].times[j].startTime,
					'HH:mm:ss',
					true
				).format('H:mma')
			}
		}

		return appointments
	}

	getTwelveWeeksAppointments = appointments => {
		let twelveWeeks = []
		const base = moment(appointments[0].date, 'DD/MM/YYYY', true).format()
		const twelveWeekLimit = moment(base)
			.add(12, 'weeks')
			.format()
		for (let i = 0; i < appointments.length; i++) {
			const appointmentB = appointments[i]
			const baseAppointmentDate = moment(appointments[i].date, 'DD/MM/YYYY', true).format()
			if (baseAppointmentDate < twelveWeekLimit) {
				twelveWeeks.push(appointmentB)
			}
		}

		return twelveWeeks
	}

	onSubmit = event => {
		event.preventDefault()
		this.props.history.push(getPageRoute(5))
	}

	onClick = event => {
		event.preventDefault()
		const copyOfState = Object.assign({}, this.state)
		copyOfState.appointments = copyOfState.eighteenWeekAppointments
		copyOfState.showMore = false
		this.setState(copyOfState)
	}

	onButtonClick = (event, item) => {
		event.preventDefault()
		this.props.context.selectedAppointment = item
		const copyOfState = Object.assign({}, this.state)
		copyOfState.isSelectedAppointment = true
		this.setState(copyOfState)
	}

	render() {
		const { formHeader } = this.props.context
		return (
			<Fragment>
				<form onSubmit={this.onSubmit}>
					<h1>{formHeader}</h1>
					<AlertForm
						level="information"
						content="The test usually takes place on a Wednesday. There may be times when we run the test on other days, these will be displayed below."
					/>
					<SelectableButtonList
						heading="Select an appointment"
						enableH2={true}
						buttonList={this.state.appointments}
						onButtonClick={this.onButtonClick}
						colour="radio-list"
						inline={true}
						showMore={this.state.showMore}
						onClick={this.onClick}
					/>
					<Button isValid={this.state.isSelectedAppointment} label="Next step" />
				</form>
				<Anchor label="Back" history={history} />
			</Fragment>
		)
	}
}

SelectAppointment.propTypes = {
	context: PropTypes.object,
	history: PropTypes.object
}

export default withContext(SelectAppointment)
