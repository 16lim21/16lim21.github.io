import React from 'react'
import styled from 'styled-components'
import bny from './resources/BNY.png'
import columbia from './resources/Columbia.png'
import spectator from './resources/Spectator.png'
import spectatorNight from './resources/Spectator-Night.png'
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
    font-weight: 600;
    color: #67ADFF;
`;

const Content = styled.div`
    display: flex;
    margin-top: 1.875rem;
    flex-direction: column;
`;

const Icon = styled.div`
    display: flex;
    width: 25rem;
    justify-content: center;
`;

const Detail = styled.div`
    position: absolute;
    left: 25rem;
    text-align: left;
    max-width: 22rem;
`;

const Date = styled.div`
    position: absolute;
    left: 47rem;
    text-align: right;
    width: 25rem;
`;

const B = styled.b`
    font-weight: 600;
`;

const StyledRow = styled.div`
    height: 6.25rem;
    position: relative;
    display: flex;
    margin: 1rem;
    align-items: center;
`;

function Row(props){
    let image;
    if (props.isNight && props.imgNightSrc){
        image =  <img src={props.imgNightSrc} alt={props.imgAlt} style={props.imgStyle}/>
    }
    else{
        image = <img src={props.imgSrc} alt={props.imgAlt} style={props.imgStyle}/>
    }
    return(
            <StyledRow>
                <Icon>{image}</Icon>
                <Detail>
                    <B>{props.company}</B><br/>
                    {props.jobTitle}
                </Detail>
                <Date>{props.date}<br/><br/></Date>
            </StyledRow>
    );
}

const Experience = ({myRef, isNight}) => {

    return(
        <>
            <ExperiencePage ref={myRef}>
                <Header>Work Experience</Header>
                <Content>
                    <Row isNight={isNight} imgSrc={bny} imgAlt="bny" imgStyle={{"height": "6.25rem" }}
                        company="BNY Mellon" jobTitle="Summer Technology Analyst"
                        date="Jun 2020 - Aug 2020"
                    />
                    <Row isNight={isNight} imgSrc={spectator} imgNightSrc={spectatorNight} 
                        imgAlt="spectator" imgStyle={{"width": "23.25rem" }}
                        company="Columbia Daily Spectator" jobTitle="Associate Product Engineer"
                        date="Aug 2019 - Feb 2020"
                    />
                    <Row isNight={isNight} imgSrc={columbia} imgAlt="columbia" imgStyle={{"width": "23.25rem" }}
                        company="Columbia DVMM Lab" jobTitle="Research Assistant"
                        date="Jun 2019-Aug 2019"
                    />
                    <Row isNight={isNight} imgSrc={uncubed} imgAlt="uncubed" imgStyle={{"width": "20.75rem" }}
                        company="Uncubed" jobTitle="Technical Recruiting Intern"
                        date="Jan 2019-Apr 2019"
                    />
                </Content>
            </ExperiencePage>
        </>
    )
}

export default Experience