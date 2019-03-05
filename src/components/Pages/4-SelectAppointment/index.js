import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import { getPageRoute } from '../../../helpers/pagehelper'
import { AlertForm, SelectableButtonList, Button, Anchor } from 'smbc-react-components'
import { reserveAppointment } from '../../Utils'
import moment from 'moment'

export class SelectAppointment extends Component {
	constructor(props) {
		super(props)

		const earliestNewTestDate = !this.props.context.isResit.value ? moment() : moment(this.props.context.previousTestDate.value).add(4, 'weeks')

		this.state = {
			appointments: [],
			isLoading: false,
			dateToSearchFrom: earliestNewTestDate < moment() ? moment() : earliestNewTestDate
		}
	}

	// componentDidMount = async () => {
	// 	const result = await getAvailableAppointments(this.props.context.isResit.value, moment(this.state.dateToSearchFrom).format(), moment(this.state.dateToSearchFrom).add(18, 'weeks').format())

	// 	this.setState({appointments: result.appointments, isGettingAppointments: false})
	// }

	onSubmit = async event => {
		event.preventDefault()
		this.setState({ isLoading: true })
		
		const { context: { setBookingId, isResit, testDate }, history } = this.props
		const result = await reserveAppointment(isResit.value, moment(testDate.value).format())
		
		setBookingId(result.bookingId)

		if(result.status === 200) {
            history.push(getPageRoute(5))
		} else {
			history.push(getPageRoute(7))
		}
	}

	filterAppointments = appointments => {
		return appointments.filter(_ => moment(_.date, 'DD/MM/YYYY', true).isBefore(moment(this.state.dateToSearchFrom).add(12, 'weeks')))
	}

	onClick = event => {
		event.preventDefault()
		this.setState({showMore: false})
	}

	render() {
		const { formHeader, onChange, testDate } = this.props.context
		const { appointments, isLoading} = this.state
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
						buttonList={appointments}
						filter={this.filterAppointments}
						onChange={onChange}
						onClick={this.onClick}
					/>
					<Button isValid={testDate.isValid} label="Next step" isLoading={isLoading}/>
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
