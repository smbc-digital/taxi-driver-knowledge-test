import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import showBreadCrumbs from '../../../helpers/breadcrumbHelper'

export class Success extends Component {
	constructor(props) {
		super(props)
		props.history.block()
		props.context
	}

	componentDidMount = () => {
		showBreadCrumbs(true)
	}

	render() {
		const { paymentReference } = this.props.context

		return (
			<Fragment>
				<section className="header-container">
					<h1>Booking complete</h1>
					<p className="h2">Thank you for booking to take the taxi driver knowledge test</p>
					<p>
						<strong>Your payment reference: {paymentReference}</strong>
					</p>
				</section>
				<section className="body-container">
					<p>Your appointment to take the hackney carriage taxi driver knowledge test is at...</p>
                    <p>We&#39;ve sent you a confirmation email including this information.</p>
					<h2>What happens next</h2>
					<p>
						On the day of your test you&#39;ll need to go to the Town Hall, Edward Street, Stockport, SK1 3XE and check in at reception.
					</p>
					<p>
                        Please arrive around 15 minutes early for your test to allow time for ID checks. If you&#39;re late you&#39;ll be turned away.
					</p>
                    <p><strong>What you need to bring to your test</strong></p>
                    <p>
                        You&#39;ll need to bring the following with you to the test:
					</p>
						<ul>
							<li>Utility bill or bank statement from the last 3 months with your name and address on</li>
							<li>Passport or other suitable evidence of your right to work in the UK</li>
							<li>Photocard DVLA driving licence showing your current address</li>
						</ul>
					<p>
                        <strong>Manage your test online</strong>
                    </p>
                    <p>You can change your test date and time online up until midday the day before by using My Account.</p>
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