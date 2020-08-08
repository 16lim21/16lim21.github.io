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
`;

const StyledRow = styled.div`
    height: 6.25rem;
    position: relative;
    align-items: center;
`;

const StyledArrow = styled.a`
    display: block;
    height: 10px; 
    width: 10px;
	border: 1px solid #000000;
	border-width: 2px 2px 0 0;
	transform: rotate(45deg);

    &:after{
        content: '';
        display: block;
        height: 10px; 
        width: 10px;
        border: 1px solid #000000;
        border-width: 2px 2px 0 0;
        transform: translate(7px, -9px);
    }

    &:hover{
        transform: rotate(45deg) translate(5px, -7px);
        cursor: pointer;
        transition: 0.3s;
    }
`;

function Row(props){
    return(
            <StyledRow>
                <B>{props.header}</B><br/>
                {props.description}
                <StyledArrow href="https://google.com"/>
            </StyledRow>
    );
}

const Projects = ({myRef}) => {

    return(
        <>
            <ProjectsPage ref={myRef}>
                <Header>My Projects</Header>
                <Content>
                    <Row header="Airbnb Review Analyzer"
                        description="Created a python script to review airbnb data"/>
                    <Row header="HTTP Web Client"
                        description="Project created for the Advanced Programming course at Columbia University"/>
                    <Row header="Simple MERN Application"
                        description=" Project to learn MERN stack"/>
                </Content>
            </ProjectsPage>
        </>
    )
}

export default Projects