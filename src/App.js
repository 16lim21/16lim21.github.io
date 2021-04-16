import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from './Main'
import HCD from './projects/HCD'

const App = () => {
	return (
		<Switch>
			<Route exact path='/' component={Main}></Route>
			<Route exact path='/Human-Centered-Design' component={HCD}></Route>
		</Switch>
	);
}

export default App