import React, { Component } from 'react'
import queryString from 'query-string'
import PropTypes from 'prop-types'
import showBreadCrumbs from '../../../helpers/breadcrumbHelper'
import showAToZFooter from '../../../helpers/aToZFooterHelper'

class PaymentFailed extends Component {
    constructor(props) {
        super(props)
        this.parsedQueryString = queryString.parse(props.location.search)
    }

    componentDidMount() {
        showBreadCrumbs(false)
        showAToZFooter(false)
    }

    render() {
        const { parsedQueryString } = this

        return <form>
            <div className="ineligible-warning">
            <div className="header-container">
                <div>
                    <i className="fa fa-exclamation" aria-hidden="true" />
                </div>
                <h1>Your payment was declined</h1>
            </div>
            <p className="no-margin-bottom">Contact your bank for more details. No money has been taken from your account.</p>
            <a className="button-primary" href={parsedQueryString.paymenturl}>Go back to try the payment again</a>
            <a className="button-secondary anchor-as-block" href="https://www.stockport.gov.uk/">Go to the homepage</a>
        </div>
        </form>
    }
}

PaymentFailed.propTypes = {
    location: PropTypes.object
}

export default PaymentFailed