import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    border-radius: 4rem;
    width: 90%;
    padding: 2rem;
    padding-left: 3.25rem;
    padding-right: 3.25rem;
    background-color: #67A7FF;
`;

const Header = styled.div`
    display: flex;
    font-size: 3.5rem;
    font-weight: 600;
    color: #FFFFFF;
`;

const StyledForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const StyledInput = styled.input`
    display: flex;
    width: 45%;
    overflow: visible;
    padding: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: none;
    border-radius: 1.5rem;
    font-size: 1.5rem;
`;

const Description = styled.input`
    display: inline-block;
    width: 100%;
    height: 10rem;
    padding: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: none;
    border-radius: 1.5rem;
    font-size: 1.5rem;

    &::placeholder{
        white-space: normal;
    }
`;

const Contact = ({myRef}) => {
    return(
        <Container ref={myRef}>
            <Header>
                Contact Me
            </Header>
            <StyledForm>
                <StyledInput type="text" placeholder="Your Name"/>
                <StyledInput type="email" placeholder="Your Email"/>
                <Description type="email" 
                placeholder="Send me a message if you’d like to connect or if 
                            there are any questions about my experiences. 
                            If you’d like to collaborate on a project, I would 
                            love to hear about it as well!"/>
            </StyledForm>
        </Container>
    )
}

export default Contact