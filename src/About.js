import React from 'react'
import styled from 'styled-components'

const AboutPage = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2.5rem;
    max-width: 83.25%;
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

const About = ({myRef}) => {

    return(
        <>
            <AboutPage ref={myRef}>
                <Header>About Me</Header>
                <Body>
                    I am currently a <B>technology summer analyst at BNY Mellon</B>,working alongside 
                    a great group of people in the master data management team. I am also a 
                    <B> rising junior at Columbia University</B> where I have worked as a summer 
                    researcher at the DVMM lab and as a product engineer at The Daily Spectator. 
                    <br/><br/>
                    As an engineer, <B>I enjoy tackling all problems</B>, big or small, through the 
                    use of software. I love the process of thinking up answers and building 
                    them out, all while picking up new skills and technologies. Through my 
                    knowledge and experiences, I hope to continuosly create impactful and 
                    innovative technical solutions to people’s problems. 
                    <br/><br/>
                    Away from the keyboard, I love to spend my free time cooking up new 
                    recipes, exploring the city, and playing video games.
                </Body>
            </AboutPage>
        </>
    )
}

export default About