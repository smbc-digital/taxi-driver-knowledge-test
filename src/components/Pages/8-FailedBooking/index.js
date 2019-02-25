import React from 'react'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import { ErrorPage } from 'smbc-react-components'

export const FailedBooking = ({ history }) => {
    return(
        <ErrorPage 
            title='Sorry, something went wrong'
            errorMessage='Please ring the contact centre and give them your details to make sure your order is complete.'
            subtitle='We&#39;re sorry, something went wrong and we may have taken the money from your account but not ordered your test.'
            // showSubtitle={false}
            history={history}
        />
    )
}

FailedBooking.propTypes = {
    context: PropTypes.object,
    history: PropTypes.object,
	errorMessage: PropTypes.string,
	title: PropTypes.string,
}

export default withContext(FailedBooking)