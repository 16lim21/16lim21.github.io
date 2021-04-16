import React from 'react'
import styled from 'styled-components'
import git from './resources/github.png'
import gitHover from './resources/github-hover.png'
import gitNight from './resources/github-night-hover.png'
import linkedin from './resources/linkedin.png'
import linkedinHover from './resources/linkedin-hover.png'
import linkedinNight from './resources/linkedin-night-hover.png'

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	justify-content: center;
	margin: 1rem;
`;

const Images = styled.div`
	display: flex;
	height: 4.25rem;
`;

const StyledImage = styled.a`
	display: flex;
	position: relative;
	width: 4.25rem;
	margin-left: 1rem;
	margin-right: 1rem;

	& img{
		height: 100%;
		object-fit: cover;
		position: absolute;
		transition: opacity 0.3s ease-in-out;
	}
`;

const Top = styled.img`
	transition: 0.3s; 

	&:hover{
		opacity: 0%;
	}
`;

const Break = styled.div`
	flex-basis: 100%;
	height: 0;
`;

const Credits = styled.div`
	padding-top: 1rem;
	color: #6C6C6C;
`;

function Image(props){
	let image;
	if (props.isNight && props.imgNightHover){
		image =  <img src={props.imgNightHover} alt="gitHover"/>
	}
	else{
		image = <img src={props.imgHover} alt="gitHover"/>
	}
	return(
		<StyledImage href={props.link}>
			{image}
			<Top src={props.imgSrc} alt="github"/>
		</StyledImage>
	);
}

const Footnote = ({isNight}) => {

	return(
		<Container>
			<Images>
				<Image isNight={isNight} imgSrc={git}
					imgHover={gitHover} imgNightHover={gitNight} 
					link="https://github.com/16lim21"/>
				<Image isNight={isNight} imgSrc={linkedin} 
					imgHover={linkedinHover} imgNightHover={linkedinNight}
					link="https://www.linkedin.com/in/michael-li-2b6aba156/"/>
			</Images>
			<Break></Break>
			<Credits>
				Designed and Created by Michael Li 2020
			</Credits>
		</Container>
	);
}

export default Footnote