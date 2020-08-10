import React from 'react'
import styled from 'styled-components'
import git from './resources/github.png'
import gitHover from './resources/github-hover.png'
import gitNight from './resources/github-night-hover.png'

const Container = styled.div`
    display: flex;
`;

const Image = styled.img`
    height: 6.25rem; 
`;

// function hover(element, imgHover){
//     element.setAttribute('src', imgHover);
// }

// function unhover(element, imgSrc){
//     element.setAttribute('src', imgSrc);
// }

function Icon(props){
    let image;
    if (props.isNight){
        image = <Image src={props.imgSrc} alt={props.imgAlt}
                onmouseover={this.src=props.imgNight} 
                onmouseout={this.src=props.imgSrc}/>
    }
    else{
        image = <Image src={props.imgSrc} alt={props.imgAlt}
                onmouseover={this.src=props.imgHover} 
                onmouseout={this.src=props.imgSrc}/>
    }
    return(
        {image}
    )
}


const Footnote = ({isNight}) => {
    return(
        <Container>
            <Icon isNight={isNight} imgSrc={git} imgNight={gitNight} imgHover={gitHover}
                imgAlt="github"/>
        </Container>
    )
}

export default Footnote