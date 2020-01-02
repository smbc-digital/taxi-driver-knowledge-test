import 'isomorphic-fetch'
import React, { Component } from 'react'
import { Button, Anchor } from 'smbc-react-components'
import PropTypes from 'prop-types'
import { getPaymentUrl } from '../../Utils'
import { getPageRoute } from '../../../helpers/pagehelper'
import withContext from '../../WithContext'
import ReCAPTCHA from 'react-google-recaptcha'
import moment from 'moment-timezone'

export class PaymentSummary extends Component {
	constructor(props) {
		super(props)
		this.state = {
            isLoading: false,
            recaptchaValid: false
		}
    }

    onChangeRecaptcha = value => {
		this.setState({
			recaptchaValid: value ? true : false
		})
	}

    onSubmit = async (event) => {
        event.preventDefault()
        const { context : {emailAddress, testType, testDate, bookingId, address}, history } = this.props
   
        this.setState({ isLoading: true })
        let rawResponse = await getPaymentUrl(bookingId, testDate.value, testType.value, emailAddress.value, address.value)
        if(rawResponse.status === 200){
            window.location.assign(rawResponse.url)
        } else{
            history.push(getPageRoute(7))
        }
    }

render() {
    const { isLoading, recaptchaValid } = this.state
    const { context : {displayRecaptcha, formHeader, testType, testDate }, history } = this.props
    return (
        <form onSubmit={this.onSubmit}>
            <h1>{formHeader}</h1>
            <h2>Your booking summary</h2>
            <p>Your booking to take the {testType.value} taxi driver knowledge test is at {moment(testDate.value).format('h:mma')} on {moment(testDate.value).format('dddd D MMMM')}.</p>
            <p>You&#39;ll now be taken to our online system to make the payment.</p>
            <p>The cost is <strong>£70</strong>.</p>
            {displayRecaptcha && (
						<div className="recaptcha">
							<ReCAPTCHA
								sitekey="6LfAeSIUAAAAAGsx6tYHz4MIvhP0pSx9Tq7Hf8Yx"
								onChange={this.onChangeRecaptcha}
								name="recaptcharesult"
							/>
						</div>
					)}

            <Button
                id='continue-to-payment'
                label='Continue to payment'
                isValid={recaptchaValid || !displayRecaptcha }
                isLoading={isLoading}
            />
            <Anchor label='Previous' history={history} />
        </form>

    )
    }
}

PaymentSummary.propTypes = {
	context: PropTypes.object,
	history: PropTypes.object
}

export default withContext(PaymentSummary)