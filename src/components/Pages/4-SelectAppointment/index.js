import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import { getPageRoute } from '../../../helpers/pagehelper'
import { AlertForm, SelectableButtonList, Button, Anchor } from 'smbc-react-components'
import { getAvailableAppointments, reserveAppointment } from '../../Utils'
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
			showMore: true,
			isLoading: false
		}
	}

	componentDidMount = async () => {
		const result = await getAvailableAppointments(this.props.context)
		const appointments = result.appointments
		const copyOfState = Object.assign({}, this.state)
		copyOfState.eighteenWeekAppointments = appointments
		this.setState(copyOfState)
		// this.getTwelveWeeksAppointments()
	}

	getTwelveWeeksAppointments = () => {
		let twelveWeeks = []
		let formattedTwelveWeeks = []
		let eighteenWeeks = Object.assign({}, this.state.eighteenWeekAppointments)
		const base = moment(eighteenWeeks[0].date, 'dddd D MMMM YYYY', true).format()
		
		const twelveWeekLimit = moment(base)
			.add(12, 'weeks')
			.format()
		console.log(twelveWeekLimit)

		for (let i = 0; i < eighteenWeeks.length; i++) {
			const appointmentB = eighteenWeeks[i]
			const baseAppointmentDate = moment(eighteenWeeks[i].date, 'dddd D MMMM YYYY', true).format()
			console.log(baseAppointmentDate)
			if (baseAppointmentDate < twelveWeekLimit) {
				twelveWeeks.push(appointmentB)
			}
		}

		for (let i = 0; i < twelveWeeks.length; i++) {
			formattedTwelveWeeks.push(this.state.eighteenWeekAppointments[i])
		}

		this.setState({
			appointments: formattedTwelveWeeks,
			twelveWeekAppointments: formattedTwelveWeeks
		})
	}

	onSubmit = async(event) => {
		event.preventDefault()
		const { context, history } = this.props
		
		this.setState({ isLoading: true })
		let result = await reserveAppointment(context.isResit, this.state.selectedAppointment)
		const copyOfState = Object.assign({}, this.state)
		copyOfState.testDate = result.testDate
		copyOfState.bookingId = result.bookingId
		this.setState(copyOfState)

        if(result.status === 200){
            history.push(getPageRoute(5))
        } else{
            history.push(getPageRoute(7))
        }
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
		copyOfState.selectedAppointment = item
		this.setState(copyOfState)
	}

	render() {
		const { formHeader, onChange } = this.props.context
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
						displayHeading={true}
						enableRadioH2={false}
						buttonList={this.state.eighteenWeekAppointments}
						onRadioButtonChange={onChange}
						showMore={this.state.showMore}
						onClick={this.onClick}
						cssClass='new-appointment-radio-container'
					/>
					<Button isValid={this.state.isSelectedAppointment} label="Next step" isLoading={this.state.isLoading}/>
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
