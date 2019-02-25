import React from 'react'
import PropTypes from 'prop-types'
// import queryString from 'query-string'
import withContext from '../../WithContext'
import { ErrorPage } from 'smbc-react-components'

export const SomethingWentWrong = ({ history, location }) => {
    // const parsedQueryString = queryString.parse(location.search)

    return(
        <ErrorPage 
            title='We&#39;re sorry, the payment was unsuccessful'
            errorMessage='Something went wrong. Please try again if you want to continue with the order.'
            showSubtitle={false}
            links={[
                {
                    location: '/',
                    text: 'Continue with the order'
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
    context: PropTypes.object,
    history: PropTypes.object,
    location: PropTypes.object,
	errorMessage: PropTypes.string,
	title: PropTypes.string,
	links: PropTypes.array
}

export default withContext(SomethingWentWrong)