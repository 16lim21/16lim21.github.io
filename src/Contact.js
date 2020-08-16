import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Footnote from './Footnote'
import axios from 'axios';

const ContactPage = styled.div`
    width: 92.5%;
`;

const Container = styled.div`
    position: relative;
    border-radius: 4rem;
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
    resize: vertical;
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
    width: 11.25rem;
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
    cursor: pointer;

    &:hover{
        background-color: #67A7FF;
        color: #FFFFFF;
        border-color: #FFFFFF;
    }
`;

const Submitted = styled.div`
    color: #FFFFFF;
    font-weight: 400;
    font-size: 2rem;
`;

const Contact = ({myRef, isNight}) => {

    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')
    const [sent, setSent] = useState(false)
    const [buttonText, setButtonText] = useState('Submit')

    const resetForm = () => {
        setName('')
        setMessage('')
        setEmail('')
        return
    }

    const submit = (event) => {
        event.preventDefault()

        setButtonText('Sending...')
        let data = {
            name: name,
            email: email,
            message: message
        }

        axios.post(process.env.REACT_APP_API_URL, data)
            .then(response => {
                setSent(true)
                console.log('sent')
            })
            .catch(() => {
                console.log('message not sent')
            })
    }

    useEffect(() => resetForm(), [sent])

    let submitted = ''
    if (sent){
        submitted= <Submitted>Your message has been sent!</Submitted>
    }
    else{
        submitted= <StyledForm>
                        <StyledInput type="text" placeholder="Your Name"
                                    onChange={event => setName(event.target.value)}
                                    value={name}
                                    required/>
                        <StyledInput type="email" placeholder="Your Email"
                                    onChange={event => setEmail(event.target.value)}
                                    value={email}
                                    required/>
                        <Description type="text"
                                    placeholder="Send me a message if you’d like to connect or if
                                    there are any questions about my experiences! If you’d
                                    like to collaborate on a project, I would love to hear
                                    about it as well!"
                                    onChange={event => setMessage(event.target.value)}
                                    value={message}
                                    required/>
                        <Submit type="submit" value={buttonText}/>
                    </StyledForm>
    }

    return(
        <ContactPage ref={myRef}>
            <Container onSubmit={event => submit(event)}>
                <Header>
                    Contact Me
                </Header>
                {submitted}
            </Container>
            <Footnote isNight={isNight}/>
        </ContactPage>
    )
}

export default Contact