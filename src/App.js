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
        <Content>
            <NightMode isNight={isNight} setNight={() => setNight(!isNight)}></NightMode>
            <Home aboutRef={aboutRef} expRef={expRef} projRef={projRef}/>
            <About myRef={aboutRef}/>
            <Experience myRef={expRef}/>
            <Projects myRef={projRef}/>
        </Content>
    );
}

export default App