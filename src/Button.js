import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.25rem;
    border-radius: 3.75rem;
    width: 15rem;
    height: 4.25rem;
    color: #FFFFFF;
    background-color: ${props => props.color};
    transition: 0.2s;
    transition-timing-function: ease-out;
    font-size: 2.5rem;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
    &:hover{
        transform: translateY(-5%);
        box-shadow: 0rem 0.625rem 1.25rem ${props => props.color.concat("1E")};
    }
`;

const Button = ({message, color, myRef, handleClick}) => {

    return (
        <StyledButton color={color} onClick={() => handleClick(myRef)}>
            {message}
        </StyledButton>
    )
}

export default Button