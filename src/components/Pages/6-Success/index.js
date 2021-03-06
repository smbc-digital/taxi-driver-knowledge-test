import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import queryString from 'query-string'
import moment from 'moment-timezone'
import showBreadCrumbs from '../../../helpers/breadcrumbHelper'
import showAToZFooter from '../../../helpers/aToZFooterHelper'

export class Success extends Component {
	constructor(props) {
		super(props)
		props.history.block()
	}

	componentDidMount = () => {
		showBreadCrumbs(true)
		showAToZFooter(true)
	}

	render() {
		const { testDate, testType, receiptNumber } = queryString.parse(location.search)

		return (
			<Fragment>
				<section className="header-container">
					<h1>Booking complete</h1>
					<p className="h2">Thank you for booking to take the taxi driver knowledge test</p>
				</section>
				<section className="body-container">
					<p>
						Your appointment to take the {testType} taxi driver knowledge test is at{' '}
						<strong>{moment(testDate, 'YYYY-MM-DD[T]HH:mm:ss').format('h:mma')}</strong> on{' '}
						<strong>{moment(testDate, 'YYYY-MM-DD[T]HH:mm:ss').format('dddd D MMMM YYYY')}</strong>{' '}
					</p>
					<p>
						Your reference number is <strong>{receiptNumber}</strong>.
					</p>
					<p>We&#39;ve sent you a confirmation email including this information.</p>

					<h2>What happens next</h2>
					<p>
						On the day of your test you&#39;ll need to go to the Town Hall, Edward Street, Stockport, SK1
						3XE and check in at reception.
					</p>
					<p>
						Please arrive 15 minutes early for your test to allow time for ID checks. If you&#39;re late
						you&#39;ll be turned away.
					</p>
					<p>
						<strong>What you need to bring to your test</strong>
					</p>
						<ul className="indented-list">
							<li>a recent passport sized photograph</li>
							<li>EEA/UK photocard driving licence showing your current name and address</li>
							<li>utility bill or bank statement, issued within the last 3 months, showing your current name and address</li>
							<li>EEA/UK passport or other proof of right to work in the UK</li>
						</ul>
					<p>
						<strong>Manage your test online</strong>
					</p>
					<p>
						You can use My Account to change the date and time of your test online up until midday the day
						before your test.
					</p>
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
