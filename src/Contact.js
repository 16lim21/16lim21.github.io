import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    border-radius: 4rem;
    width: 85%;
    padding: 2rem;
    padding-left: 3.25rem;
    padding-right: 3.25rem;
    margin: 2.5rem;
    background-color: #67A7FF;
    font-family: 'Source Sans Pro', sans-serif;
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
    width: 45%;
    overflow: visible;
    padding: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: none;
    border-radius: 1.5rem;
    font-size: 1.5rem;
`;

const Description = styled.textarea`
    overflow-y: auto;
    resize: both;
    width: 100%;
    padding: 1rem;
    padding-bottom: 3rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: none;
    border-radius: 1.5rem;
    font-size: 1.5rem;
    font-family: inherit;
`;

const Submit = styled.input`
    padding: 0.875rem;
    padding-left: 3rem;
    padding-right: 3rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: auto;
    border: 0.125rem solid #FFFFFF;
    border-radius: 1.5rem;
    font-size: 1.5rem;
    font-weight: 600;
    color: #67A7FF;
    background-color: #FFFFFF;
    transition: 0.3s;

    &:hover{
        background-color: #67A7FF;
        color: #FFFFFF;
        border-color: #FFFFFF;
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
                            there are any questions about my experiences! If you’d
                            like to collaborate on a project, I would love to hear
                            about it as well!"/>
                <Submit type="submit" value="Submit"/>
            </StyledForm>
        </Container>
    )
}

export default Contact