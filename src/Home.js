import React from 'react'
import styled from 'styled-components'
import profile from './resources/profile.JPEG'
import Button from './Button.js'

const Grid = styled.div`
    display: flex;
    padding-bottom: 10rem;
    margin-top: 2rem;
    font-family: "Source Sans Pro", sans-serif;
`;

const Row = styled.div`
    max-width: 60rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

const Profile = styled.img`
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    overflow: hidden;
`;

const InitialIntro = styled.div`
    margin-left: 5rem;
    font-size: 3.5rem;
    font-weight: 600;
`;

const DetailedIntro = styled.div`
    margin: 2.5rem; 
    text-align: left;
    font-size: 2.75rem;
    font-weight: 200;
`;

const ButtonCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Home = ({aboutRef, expRef, projRef, contRef}) => {

    return(
        <Grid>
            <Row>
                <Profile src={profile}/>
                <InitialIntro>
                    <span role="img" aria-label="wave">👋 </span>
                    <b>
                        Hey There! <br/> I’m Michael Li
                    </b>
                </InitialIntro>
                <DetailedIntro>
                    An ambitious software developer and full time student studying at Columbia University. I love to tackle problems with software and learn about all things technology! 
                </DetailedIntro>
            </Row>
            <ButtonCol>
                <Button message="About Me" color="#FF6779" myRef={aboutRef}/>
                <Button message="Experience" color="#DC67FF" myRef={expRef}/>
                <Button message="Projects" color="#67ADFF" myRef={projRef}/>
                <Button message="Contact" color="#FFCA67" myRef={contRef}/>
            </ButtonCol>
        </Grid> 
    )
}

export default Home