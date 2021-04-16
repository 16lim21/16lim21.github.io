import React, {useState} from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from './Main'
import HCD from './projects/HCD'
import NightMode from './NightMode'
import styled from 'styled-components'

const Background = styled.div`
	background-color: ${props => (props.isNight && "#2A3558") || "#FFFFFF"};
	color: ${props => (props.isNight && "#FFFFFF") || "#000000"};
	transition: background-color .2s, color .2s;
`;

const App = () => {
	const [isNight, setNight] = useState(false)

	return (
		<Background isNight={isNight}>
			<NightMode isNight={isNight} setNight={() => setNight(!isNight)}></NightMode>
			<Switch>
				<Route exact path='/' 
					render={(props) => (
						<Main {...props} isNight={isNight}/>
					)}></Route>
				<Route exact path='/Human-Centered-Design' 
					isNight={isNight} 
					component={HCD}></Route>
			</Switch>
		</Background>
	);
}

export default App