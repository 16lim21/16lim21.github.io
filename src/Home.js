import React, { useState} from 'react'
import styled from 'styled-components'
import profile from './resources/profile.JPEG'
import Button from './Button.js'
import NightMode from './NightMode.js'

const Grid = styled.div`
    display:flex;
    position: absolute;
    top: 5%;
    left: 5%;
`;

const Row = styled.div`
    max-width: 60rem;
    /* margin: 5rem; */
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
    width: 25rem;
    font-size: 3.5rem;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
`;

const DetailedIntro = styled.div`
    margin: 2.5rem; 
    text-align: left;
    font-size: 2.75rem;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 200;
`;

const Temp = styled.div`
    position: absolute;
    top: 150%;
`;

const Home = () => {

    const [hovers, setHovers] = useState([])
    const [isNight, setNight] = useState(false)
    return(
        <>
            <NightMode isNight={isNight} setNight={() => setNight(!isNight)}></NightMode>
            <Grid>
                <Row>
                    <Profile src={profile}/>
                    <InitialIntro>
                        <span role='img' aria-label="wave">👋 </span>
                        <b>
                            Hey There! <br/> I’m Michael Li
                        </b>
                    </InitialIntro>
                    <DetailedIntro>
                        An ambitious software developer and full time student studying at Columbia University. I love to tackle problems with software and learn about all things technology! 
                    </DetailedIntro>
                </Row>
                <Button message="About Me" color='#FF6779'/>
                <Temp>temporary</Temp>
            </Grid> 
        </>
    )
}

export default Home