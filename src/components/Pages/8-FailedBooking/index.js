import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import { ErrorPage } from 'smbc-react-components'

export const FailedBooking = ({ history }) => {
    return (
        <ErrorPage
            title='Sorry, something went wrong'
            errorMessage={() =>
                <Fragment>
                    <p>We&#39;re sorry, something went wrong. We may have taken the money from your account but not booked your test.</p>
                    <p>Please ring the contact centre on <strong>0161 217 6111</strong> to make sure your booking is complete.</p>
                </Fragment>
            }
            showSubtitle={false}
            history={history}
        />
    )
}

FailedBooking.propTypes = {
    history: PropTypes.object
}

export default withContext(FailedBooking)