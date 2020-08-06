import React from 'react'
import styled from 'styled-components'

const ProjectsPage = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2.5rem;
    width: 75rem;
    font-family: 'Source Sans Pro', sans-serif;
`;

const Header = styled.div`
    font-size: 3.5rem;
    font-weight: 600;
    color: #67ADFF;
`;

const Body = styled.div`
    margin-top: 1.875rem;
    text-align: left;
    font-size: 1.875rem;
    font-weight: 200;
`;

const B = styled.b`
    font-weight: 600;
`;

const Projects = ({myRef}) => {

    return(
        <>
            <ProjectsPage ref={myRef}>
                <Header>My Projects</Header>
                <Body>
                <B>Airbnb Review Analyzer</B><br/>
                Created a python script to review airbnb data
                <br/><br/>
                <B>HTTP Web Client</B><br/>
                Project created for the Advanced Programming course at Columbia University
                <br/><br/>
                <B>Simple MERN Application</B><br/>
                Project to learn MERN stack
                </Body>
            </ProjectsPage>
        </>
    )
}

export default Projects