import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import { getPageRoute } from '../../helpers/pagehelper'
import { ErrorPage } from 'smbc-react-components'
import TypeOfTest from '../Pages/1-TypeOfTest'
import Resit from '../Pages/2-Resit'
import AboutYourself from '../Pages/3-AboutYourself'
<<<<<<< HEAD
import SelectAppointment from '../Pages/4-SelectAppointment'
=======
import PaymentSummary from '../Pages/5-PaymentSummary'
>>>>>>> 1bb4ef4ae8143cc1fc5f35da3820c4250e6f0cd3

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={getPageRoute(1)} component={ TypeOfTest } />
                <Route exact path={getPageRoute(2)} component={ Resit } />
                <Route exact path={getPageRoute(3)} component={ AboutYourself }/>
<<<<<<< HEAD
                <Route exact path={getPageRoute(4)} component={ SelectAppointment } />
=======
                <Route exact path={getPageRoute(5)} component={ PaymentSummary }/>
>>>>>>> 1bb4ef4ae8143cc1fc5f35da3820c4250e6f0cd3
                <Route exact path="/error" component={ ErrorPage } />
            </Switch>
        )
    }
}

export default App