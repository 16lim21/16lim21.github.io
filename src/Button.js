import React, { useRef } from 'react'
import styled from 'styled-components'

const StyledButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3.75rem;
    height: 5.625rem;
    width: 18.75rem;
    background-color: ${props => props.color};
    transition: margin-top 0.2s;
    transition-timing-function: ease-out;
    font-size: 3.0625rem;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 300;
    text-align: center;
    &:hover{
        margin-top: -0.3125rem;
        box-shadow: 0rem 0.625rem 1.25rem ${props => props.color.concat('1E')};
    }
`;

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

const Button = ({message, color, ref}) => {

    const executeScroll = () => scrollToRef(ref)

    return (
        <StyledButton color={color}>{message}</StyledButton>
    )
}

export default Button