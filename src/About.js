import React, {Component} from 'react'

class About extends Component{
    constructor(props){
        super(props)
        this.myRef = React.createRef()
    }

    render(){
        return(
            <div ref={this.myRef}>about me</div>
        );
    }
}