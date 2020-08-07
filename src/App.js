import React, {useRef, useState} from 'react'
import Home from './Home'
import About from './About'
import Experience from './Experience'
import NightMode from './NightMode'
import Projects from './Projects'
import styled from 'styled-components'

const Content = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    background-color: ${props => (props.isNight && "#2A3558") || "#FFFFFF"};
    color: ${props => (props.isNight && "#FFFFFF") || "#000000"};
    transition: background-color .2s, color .2s;
`;

const PageHolder = styled.div`
    display: flex;
`;

const App = () => {
    
    const aboutRef = useRef(null)
    const expRef = useRef(null)
    const projRef = useRef(null)
    const [isNight, setNight] = useState(false)

    return (
        <Content isNight={isNight}>
            <NightMode isNight={isNight} setNight={() => setNight(!isNight)}></NightMode>
            <Home aboutRef={aboutRef} expRef={expRef} projRef={projRef}/>
            <About myRef={aboutRef}/>
            <Experience myRef={expRef} isNight={isNight}/>
            <Projects myRef={projRef}/>
        </Content>
    );
}

export default App