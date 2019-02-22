import 'isomorphic-fetch'
import React, { Component } from 'react'
import { Button, Anchor } from 'smbc-react-components'
import PropTypes from 'prop-types'
import SubmitUtil from '../../Utils' 
import { getPageRoute } from '../../../helpers/pagehelper'
import withContext from '../../WithContext'
import ReCAPTCHA from 'react-google-recaptcha'

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
        const { context, history } = this.props
        
        this.setState({ isLoading: true })
        let rawResponse = await SubmitUtil(context)
        if(rawResponse.status === 200){
            window.location.assign(rawResponse.url)
        } else{
            history.push(getPageRoute(7))
        }
    }

render() {
    const { isLoading, recaptchaValid } = this.state
    const { context : {displayRecaptcha, formHeader }, history } = this.props
    return ( 
        <form onSubmit={this.onSubmit}>
            <h1>{formHeader}</h1>
            <h2>Your booking summary</h2>
            <p>Your booking to take the taxi driver knowledge test is at 8:45am on Wednesday 23 January.</p>
            <p>You&#39;ll now be taken to our online system to make the payment.</p>
            <p>The cost is £70.</p>
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