import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import { getPageRoute } from '../../helpers/pagehelper'
import { ErrorPage } from 'smbc-react-components'
import TypeOfTest from '../Pages/1-TypeOfTest'
import Resit from '../Pages/2-Resit'
import AboutYourself from '../Pages/3-AboutYourself'
import SelectAppointment from '../Pages/4-SelectAppointment'
import PaymentSummary from '../Pages/5-PaymentSummary'
import Success from '../Pages/6-Success'
import SomethingWentWrong from '../Pages/7-SomethingWentWrong'
import FailedBooking from '../Pages/8-FailedBooking'
import PaymentFailed from '../Pages/9-PaymentFailed'

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={getPageRoute(1)} component={ TypeOfTest } />
                <Route exact path={getPageRoute(2)} component={ Resit } />
                <Route exact path={getPageRoute(3)} component={ AboutYourself }/>
                <Route exact path={getPageRoute(4)} component={ SelectAppointment } />
                <Route exact path={getPageRoute(5)} component={ PaymentSummary }/>
                <Route exact path={getPageRoute(6)} component={ Success }/>
                <Route exact path={getPageRoute(7)} component={ SomethingWentWrong }/>
                <Route exact path={getPageRoute(8)} component={ FailedBooking }/>
                <Route exact path={getPageRoute(9)} component={ PaymentFailed }/>
                <Route exact path="/error" component={ ErrorPage } />
            </Switch>
        )
    }
}

export default App