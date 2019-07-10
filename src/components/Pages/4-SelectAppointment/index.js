import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import { getPageRoute } from '../../../helpers/pagehelper'
import { AlertForm, SelectableButtonList, Button, Anchor } from 'smbc-react-components'
import { reserveAppointment, getAvailableAppointments } from '../../Utils'
import moment from 'moment'

export class SelectAppointment extends Component {
	constructor(props) {
		super(props)

		const earliestNewTestDate = this.props.context.isResit.value != 'true' ? moment() : moment(this.props.context.previousTestDate.value).add(4, 'weeks')

		this.state = {
			appointments: [],
			isLoading: false,
			dateToSearchFrom: moment().isAfter(earliestNewTestDate) ? moment() : earliestNewTestDate
		}
	}

	componentDidMount = async () => {
		const result = await getAvailableAppointments(this.props.context.isResit.value, moment(this.state.dateToSearchFrom).toISOString(), moment(this.state.dateToSearchFrom).add(18, 'weeks').toISOString())
		this.setState({appointments: result.appointments})
	}

	onSubmit = async event => {
		event.preventDefault()
		this.setState({ isLoading: true })

		const { context, history: { push } } = this.props

		const reserveRequest = {
			isResit: context.isResit.value,
			testDate: moment(context.testDate.value).format(),
			firstName: context.firstName,
			lastName: context.lastName,
			phoneNumber: context.phoneNumber,
			emailAddress: context.emailAddress,
			address: context.address,
			testType: context.testType,
			previousTestDate: context.previousTestDate
		}

		const { bookingId, status } = await reserveAppointment(reserveRequest)

		context.setBookingId(bookingId)

		if(status === 200) {
            push(getPageRoute(5))
		} else {
			push(getPageRoute(7))
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
		const { context: {formHeader, onChange, testDate}, history } = this.props
		const { appointments, isLoading } = this.state

		if ((appointments.length === 0 || appointments === undefined) && (isLoading === false || isLoading == undefined))
		{
			return (
				<Fragment>
					<h1>{formHeader}</h1>
					<AlertForm
						level="information"
						content="There are currently no online appointments available. Please email <a href='mailto:taxi.licensing@stockport.gov.uk'>taxi.licensing@stockport.gov.uk</a> to book your test"
					/>
					<a className="button-primary" href="https://www.stockport.gov.uk">Return to homepage</a>
					<Anchor label='Previous' history={history} />
				</Fragment>
			)
		}

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
				<Anchor label='Previous' history={history} />
			</Fragment>
		)
	}
}

SelectAppointment.propTypes = {
	context: PropTypes.object,
	history: PropTypes.object
}

export default withContext(SelectAppointment)
