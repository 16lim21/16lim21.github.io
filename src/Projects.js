import React from 'react'
import styled from 'styled-components'

const ProjectsPage = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2.5rem;
    width: 75rem;
    font-size: 1.875rem;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 200;
`;

const Header = styled.div`
    font-size: 3.5rem;
    font-weight: 600;
    color: #67ADFF;
`;

const Content = styled.div`
    display: flex;
    margin-top: 1.875rem;
    flex-direction: column;
`;

const B = styled.b`
    font-weight: 600;
    display: flex;
`;

const StyledRow = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 1rem;
`;

const StyledArrow = styled.a`
    display: block;
    height: 10px; 
    width: 10px;
	border: 1px solid #000000;
    border-color: ${props => (props.isNight && "#FFFFFF") || "#000000"};
	border-width: 2px 2px 0 0;
	transform: rotate(45deg);

    &:after{
        content: '';
        display: block;
        height: 10px; 
        width: 10px;
        border: 1px solid #000000;
        border-color: ${props => (props.isNight && "#FFFFFF") || "#000000"};
        border-width: 2px 2px 0 0;
        transform: translate(7px, -9px);
    }

    &:hover{
        transform: rotate(45deg) translate(5px, -7px);
        cursor: pointer;
        transition: 0.3s;
    }
`;

const Break = styled.div`
    flex-basis: 100%;
    height: 0;
`;

const ArrowContainer = styled.div`
    padding-top: 0.25rem;
    margin-left: 0.5rem;
`;

function Row(props){
    return(
            <StyledRow>
                <B>{props.header}</B>
                <ArrowContainer>
                    <StyledArrow href={props.link} isNight={props.isNight}/>
                </ArrowContainer>
                <Break></Break>
                {props.description}
            </StyledRow>
    );
}

const Projects = ({myRef, isNight}) => {

    return(
        <>
            <ProjectsPage ref={myRef}>
                <Header>My Projects</Header>
                <Content>
                    <Row header="Airbnb Review Analyzer"
                        description="Created a python script to review airbnb data"
                        isNight={isNight}
                        link="https://github.com/16lim21/Airbnb-Case-Study"/>
                    <Row header="Detecting Hate Symbols"
                        description="Project created for Columbia University's DVMM lab in order to test model
                        accuracy and precision in detecting hate symbols from pictures"
                        isNight={isNight}
                        link="https://github.com/16lim21/visual-literacy-object-detection"/>
                    <Row header="This Website!"
                        description="Created using ReactJS and styled components."
                        isNight={isNight}
                        link="https://github.com/16lim21/Personal-Website"/>
                </Content>
            </ProjectsPage>
        </>
    )
}

export default Projects