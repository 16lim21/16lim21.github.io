import React, {useRef, useEffect} from 'react'
import Home from './Home'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'
import ScrollTop from './ScrollTop'
import styled from 'styled-components'

const Content = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	align-items: center;
	background-color: ${props => (props.isNight && "#2A3558") || "#FFFFFF"};
	color: ${props => (props.isNight && "#FFFFFF") || "#000000"};
	transition: background-color .2s, color .2s;
`;

const Main = (props) => {
	
	useEffect(() => {document.title = "Michael's Website"}, []);

	const isNight = props.isNight
	const aboutRef = useRef(null)
	const expRef = useRef(null)
	const projRef = useRef(null)
	const contactRef = useRef(null)

	return (
		<Content isNight={isNight}>
			<Home aboutRef={aboutRef} expRef={expRef} projRef={projRef} contRef={contactRef}/>
			<About myRef={aboutRef}/>
			<Experience myRef={expRef} isNight={isNight}/>
			<Projects myRef={projRef} isNight={isNight} setHome={props.setHome}/>
			<Contact myRef={contactRef} isNight={isNight}/>
			<ScrollTop isNight={isNight}/>
		</Content>
	);
}

export default Main