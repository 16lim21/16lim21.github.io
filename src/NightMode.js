import React, { useState} from 'react'
import styled from 'styled-components'
import sun from './resources/light-on.png'
import moon from './resources/dark-on.png'

const Toggle = styled.div`
    padding-left: 2rem;
    position: relative;
    z-index: 999;
    align-self: flex-start;
`;

const Checkbox = styled.input`
    height: 0;
    width: 0;
    visibility: hidden;
`;

const SwitchLabel = styled.label`
    display: flex;
    cursor: pointer;
    width: 7.25rem;
    height: 3.1875rem;
    background: ${props => (props.isNight && "#67A7FF") || "#CCCCCC"};
    border-radius: 1.625rem;
    position: relative;
    transition: background-color .2s;
    align-items: center;
`;

const SwitchBall = styled.span`
    position: absolute;
    top: 0.4375rem;
    left: 0.625rem;
    width: 2.3125rem;
    height: 2.3125rem;
    border-radius: 50%;
    transition: 0.3s;
    background: #FFFFFF;

    ${Checkbox}:checked + ${SwitchLabel} &{
        left: calc(100% - 0.625rem);
        transform: translateX(-100%);
    }
`;

const Sun = styled.img`
    position: absolute;
    width: 2rem;
    height: width;
    right: 1rem; 
    transition: 0.3s;

    ${Checkbox}:checked + ${SwitchLabel} &{
        transform: translateX(150%);
        opacity: 0%;
    }
`;

const Moon = styled.img`
    position: absolute;
    width: 2rem;
    height: width;
    left: -2rem; 
    transition: 0.3s;
    opacity: 0%;

    ${Checkbox}:checked + ${SwitchLabel} &{
        transform: translateX(150%);
        opacity: 100%;
    }
`;

const NightMode = ({isNight, setNight}) => {
    return(
        <Toggle>
            <Checkbox id="checkbox" type="checkbox" 
            checked={isNight} onChange={setNight}/>
            <SwitchLabel htmlFor="checkbox" isNight={isNight}>
                <SwitchBall/>
                <Sun src={sun}/>
                <Moon src={moon}/>
            </SwitchLabel>
        </Toggle>
    )
}

export default NightMode