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
					<h1>Thank you for contacting Stockport Council</h1>
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

					<h2>What happens next</h2>
					<p>
						On the day of your test you&#39;ll need to go to the Town Hall, Edward Street, Stockport, SK1 3XE. You&#39;ll be met by our team and taken inside.</p>
					<p>
						If you&#39;re late you&#39;ll be turned away, and you&#39;ll have to re-book and pay for another test.
					</p>

					<p><strong>Before your test</strong></p>
					<p>We recommend you take a lateral flow test the night before and on the morning of the test to help keep everyone safe. If you feel unwell, do not attend.</p>

					<p><strong>What you need to bring to your test</strong></p>

					<p>You&#39;ll need to bring the following with you to the test:</p>
						<ul className="indented-list">
							<li>a recent passport sized photograph, signed and dated by yourself on the back</li>
							<li>driving licence or passport</li>
							<li>pen(s)</li>
							<li>facemask, which must be worn at all times or until our team tell you it can be removed</li>
							<li>water, if needed for refreshment</li>
						</ul>
					<p>
						If you do not bring the required documents you will not be able to take the test, and you&#39;ll have to re-book and pay for another test.
					</p>
						
					<strong>Manage your test online</strong>
					<p>
						Use <a href="https://myaccount.stockport.gov.uk/">My Account</a> to change your test date and time online. You can do this up until 9am on the Thursday before your test to make sure you&#39;re not charged for cancelling or re-booking.
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
