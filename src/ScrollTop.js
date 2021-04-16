import React, { Component } from 'react'
import styled from 'styled-components'

const Button = styled.div`
	position: fixed;
	bottom: ${props => props.bottom};
	right: 5%;
	transition: 0.5s;
`;

const Circle = styled.div`
	position: absolute;
	height: 3rem;
	width: 3rem;
	border: 0.25rem solid black;
	border-radius: 50%;
	border-color: ${props => (props.isNight && "#FFFFFF") || "#000000"};
	cursor: pointer;
	transition: 0.3s;

	&:hover{
		transform: translateY(-5%);
	}
`;

const Arrow = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	display: inline-block;

	&:before,
	&:after {
		content: "";
		position: absolute;
		border-radius: 0.2rem;
		display: block;
		top: 22.5%;
		height: 1.5rem;
		width: 0.375rem;
		background: ${props => (props.isNight && "#FFFFFF") || "#000000"};
	}

	&:before {
	  left: 57.5%;
	  transform: rotate(-45deg);
	}
	&:after {
	  right: 57.5%;
	  transform: rotate(45deg);
	}

`;

export default class ScrollTop extends Component{
	
	constructor(props){
		super(props)
		this.state = {
			hasButton : false,
			bottom: "-10%"
		}
	}
	componentDidMount(){
		document.addEventListener("scroll", () => {
			if(window.scrollY > 500){
				this.setState({hasButton: true, bottom: "10%"})
			}
			else{
				this.setState({hasButton: false, bottom:"-10%"})
			}
		});
	}
	scrollToTop(){
		window.scrollTo({top: 0, behavior: "smooth"});
	}
	render(){
		return(
			<Button onClick={() => this.scrollToTop()} bottom={this.state.bottom}>
				<Circle isNight={this.props.isNight}>
					<Arrow isNight={this.props.isNight}></Arrow>
				</Circle>
			</Button>
		);
	}
}