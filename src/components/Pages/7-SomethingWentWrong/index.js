import React from 'react'
import PropTypes from 'prop-types'
import queryString from 'query-string'
import withContext from '../../WithContext'
import { ErrorPage } from 'smbc-react-components'

export const SomethingWentWrong = ({ history, location }) => {
    const { paymenturl } = queryString.parse(location.search)

    return (
        <ErrorPage
            title='We&#39;re sorry, the payment was unsuccessful'
            errorMessage={() => <p>Please try again if you want to continue with the booking.</p>}
            showSubtitle={false}
            links={[
                {
                    location: paymenturl,
                    text: 'Continue with the booking'
                },
                {
                    location: 'https://www.stockport.gov.uk',
                    text: 'Go to the homepage',
                    class: 'button-secondary'
                }
            ]}
            history={history}
        />
    )
}

SomethingWentWrong.propTypes = {
    history: PropTypes.object,
    location: PropTypes.object
}

export default withContext(SomethingWentWrong)