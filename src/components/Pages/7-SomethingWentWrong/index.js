import React, { Component } from 'react'
import queryString from 'query-string'
import PropTypes from 'prop-types'
import showBreadCrumbs from '../../../helpers/breadcrumbHelper'
import showAToZFooter from '../../../helpers/aToZFooterHelper'

class SomethingWentWrong extends Component {
    constructor(props) {
        super(props)
        this.parsedQueryString = queryString.parse(props.location.search)
    }

    componentDidMount() {
        showBreadCrumbs(true)
        showAToZFooter(true)
    }

    render() {
        const { parsedQueryString } = this

        return <form>
            <div className="ineligible-warning">
            <div className="header-container">
                <div>
                    <i className="fa fa-exclamation" aria-hidden="true" />
                </div>
                <h1> We&apos;re sorry, the payment was unsuccessful</h1>
            </div>
            <p className="no-margin-bottom">Something went wrong. Please try again if you want to continue with the order.</p>
            <a className="button-primary" href={parsedQueryString.paymenturl}>Continue with the order</a>
            <a className="button-secondary anchor-as-block" href="https://www.stockport.gov.uk/">Go to the homepage</a>
        </div>
        </form>
    }
}

SomethingWentWrong.propTypes = {
    location: PropTypes.object
}

export default SomethingWentWrong