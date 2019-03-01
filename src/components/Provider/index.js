import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Context } from '../../context/'

class Provider extends Component{
	constructor(props){
		super(props)
		this.state = {
			formHeader: 'Book your taxi driver knowledge test',
			bookingId: '',
			testDate: {
				value: '',
				isValid: false
			},
			testType: {
				value:'',
				isValid: false
			},
			isResit: {
				value: '',
				isValid: false
			},
			previousTestDate: {
				value: '',
				isValid: false
			},
			firstName: {
				value: '',
				isValid: false
			},
			lastName: {
				value: '',
				isValid: false
			},
			phoneNumber: {
				value: '',
				isValid: false
			},
			emailAddress: {
				value: '',
				isValid: false
			},
			address: {
				value: '',
				isValid: false
			},
			displayRecaptcha: document.getElementById('displayRecaptcha') != null ? document.getElementById('displayRecaptcha').innerHTML === 'true' ? true : false : false,
			onChange: this.onChange,
			setBookingId: bookingId => this.setState({bookingId})
		}
	}
	
	onChange = (event, isValid) => {
		const copyOfState = Object.assign({}, this.state)
		copyOfState[event.target.name].value = event.target.value
		copyOfState[event.target.name].isValid = isValid

		this.setState(copyOfState)
	}

	onFormSubmission = () => {
		const copyOfState = Object.assign({}, this.state)
		copyOfState.submittedFormSuccessfully = true
		
		this.setState(copyOfState)
	}

	// onFormSubmission = (paymentReference) => {
	// 	const copyOfState = Object.assign({}, this.state)
	// 	copyOfState.paymentReference = paymentReference
		
	// 	this.setState(copyOfState)
	// }

	render(){
		return <Context.Provider value={ this.state }>{this.props.children}</Context.Provider>
	}
}

Provider.propTypes = {
	history: PropTypes.object,
	context: PropTypes.object,
	children: PropTypes.object,
	mockState: PropTypes.object
}

export default Provider