import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Provider from './components/Provider'
import { Router } from 'react-router'
import moment from 'moment-timezone'
import createHistory from 'history/createBrowserHistory'
import ScrollToTop from './components/ScrollToTop'

let history = createHistory()

moment.tz.setDefault('Europe/London')

ReactDOM.render(
	<Provider>
		<Router history={history}>
			<ScrollToTop>
				<App />
			</ScrollToTop>
		</Router>
	</Provider>,
	document.getElementById('root')
)
