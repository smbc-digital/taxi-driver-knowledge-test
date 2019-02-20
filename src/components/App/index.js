import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import { getPageRoute } from '../../helpers/pagehelper'
import { ErrorPage } from 'smbc-react-components'
import TypeOfTest from '../Pages/1-TypeOfTest'
import Resit from '../Pages/2-Resit'
// import AboutYourself from '../Pages/3-AboutYourself'

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={getPageRoute(1)} component={ TypeOfTest } />
                <Route exact path={getPageRoute(2)} component={ Resit } />
                {/* <Route exact path={getPageRoute(3)} component={ AboutYourself }/> */}
                <Route exact path="/error" component={ ErrorPage } />
            </Switch>
        )
    }
}

export default App