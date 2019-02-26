import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Context } from '../../context/'
import moment from 'moment'

class Provider extends Component{
	constructor(props){
		super(props)
		this.state = {
			formHeader: 'Book your taxi driver knowledge test',
			bookingId: '',
			testDate: '',
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
				isValid: ''
			},
			lastName: {
				value: '',
				isValid: ''
			},
			phoneNumber: {
				value: '',
				isValid: ''
			},
			emailAddress: {
				value: '',
				isValid: ''
			},
			address: {
				value: '',
				isValid: ''
			},
			displayRecaptcha: document.getElementById('displayRecaptcha') != null ? document.getElementById('displayRecaptcha').innerHTML === 'true' : false,
			onChange: this.onChange,
			isOutsideRange: this.isOutsideRange
		}
	}
	
	onChange = (event, isValid) => {
		const copyOfState = Object.assign({}, this.state)
		copyOfState[event.target.name].value = event.target.value
		copyOfState[event.target.name].isValid = isValid

		this.setState(copyOfState)
	}

	isOutsideRange = (date) => {
		return moment(date).format('YYYY-MM-DD') > moment().format('YYYY-MM-DD') ? true : false
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