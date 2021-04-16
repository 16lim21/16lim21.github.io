import React from 'react'
import NightMode from './NightMode'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: space-between;
`;

const Home = styled.div`
	font-size: 1.5rem;
	font-family: 'Source Sans Pro', sans-serif;
	font-weight: 600;

	margin: 0 3rem;

	a {
		&:visited{
			color: ${props => (props.isNight && "#FFFFFF") || "#000000"};
		}
	}
`;

const ReturnHome = ({ isNight, isHome, setHome }) => {
	if (!isHome) {
		return(
			<Home isNight={isNight}>
				<Link to='/' onClick={() => setHome(true)}>
					Back to Home
				</Link>
			</Home>
		);
	}
	return <></>;
}

const Navbar = ({ isNight, setNight, isHome, setHome }) => {
	return (
		<Container>
			<NightMode isNight={isNight} setNight={() => setNight(!isNight)}></NightMode>
			<ReturnHome isNight={isNight} isHome={isHome} setHome={setHome}></ReturnHome>
		</Container>
	);
}

export default Navbar