import React from 'react'
import styled from 'styled-components'
import bny from './resources/BNY.png'
import columbia from './resources/Columbia.png'
import spectator from './resources/Spectator.png'
import uncubed from './resources/Uncubed.png'

const ExperiencePage = styled.div`
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
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    color: #67ADFF;
`;

const Content = styled.div`
    display: flex;
    margin-top: 1.875rem;
`;

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-right: 2rem;
`;

const Details = styled.div`
    text-align: left;
    padding-top: 1rem;
`;

const Dates = styled.div`
    text-align: right;
    width: 25rem;
`;

const B = styled.b`
    font-weight: 600;
`;


const Experience = ({myRef}) => {

    return(
        <>
            <ExperiencePage ref={myRef}>
                <Header>Work Experience</Header>
                <Content>
                    <Icons>
                        <img src={bny} alt='bny' style={{"width": "13.5rem" }}/>
                        <img src={spectator} alt='spectator' style={{"width": "24.25rem" }}/>
                        <img src={columbia} alt='columbia' style={{"width": "24.25rem" }}/>
                        <img src={uncubed} alt='uncubed' style={{"width": "20.75rem" }}/>
                    </Icons>
                    <Details>
                        <B>BNY Mellon</B><br/>
                        Summer Technology Analyst
                        <br/><br/>
                        <B>Columbia Daily Spectator</B><br/>
                        Associate Product Engineer
                        <br/><br/>
                        <B>Columbia DVMM Lab</B><br/>
                        Research Assistant
                        <br/><br/>
                        <B>Uncubed</B><br/>
                        Technical Recruiting Intern
                    </Details>
                    <Dates>
                        Jun 2020 - Aug 2020
                        <br/><br/><br/>
                        Aug 2019 - Feb 2020
                        <br/><br/><br/>
                        Jun 2019-Aug 2019
                        <br/><br/><br/>
                        Jan 2019-Apr 2019
                    </Dates>
                </Content>
            </ExperiencePage>
        </>
    )
}

export default Experience