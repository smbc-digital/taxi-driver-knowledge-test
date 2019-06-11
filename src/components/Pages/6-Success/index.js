import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import queryString from 'query-string'
import moment from 'moment'
import showBreadCrumbs from '../../../helpers/breadcrumbHelper'

export class Success extends Component {
	constructor(props) {
		super(props)
		props.history.block()
	}

	componentDidMount = () => {
		showBreadCrumbs(true)
	}

	render() {
		const { testDate, testType } = queryString.parse(location.search)

		return (
			<Fragment>
				<section className="header-container">
					<h1>Booking complete</h1>
					<p className="h2">Thank you for booking to take the taxi driver knowledge test</p>
				</section>
				<section className="body-container">
					<p>Your appointment to take the {testType} taxi driver knowledge test is at <b>{moment(testDate, 'YYYY-MM-DD[T]HH:mm:ss').format('h:mma')}</b> on <b>{moment(testDate, 'YYYY-MM-DD[T]HH:mm:ss').format('dddd D MMMM YYYY')}</b> </p>
                    <p>We&#39;ve sent you a confirmation email including this information.</p>
					<h2>What happens next</h2>
					<p>
						On the day of your test you&#39;ll need to go to the Town Hall, Edward Street, Stockport, SK1 3XE and check in at reception.
					</p>
					<p>
                        Please arrive 15 minutes early for your test to allow time for ID checks. If you&#39;re late you&#39;ll be turned away.
					</p>
                    <p><strong>What you need to bring to your test</strong></p>
					<p>
						<ul>
							<li>utility bill or bank statement from the last 3 months showing your current name and address</li>
							<li>passport or other suitable evidence of your right to work in the UK</li>
							<li>DVLA photocard driving licence showing your current name and address</li>
							<li>recent passport size photograph</li>
						</ul>
					</p>
					<p>
                        <strong>Manage your test online</strong>
                    </p>
                    <p>You can use My Account to change the date and time of your test online up until midday the day before your test.</p>
					<p>
						<a className="button-primary" href="https://myaccount.stockport.gov.uk/">
                        Go to My Account
						</a>
					</p>
				</section>
			</Fragment>
		)
	}
}

Success.propTypes = {
	context: PropTypes.object,
	history: PropTypes.object
}

export default withContext(Success)
