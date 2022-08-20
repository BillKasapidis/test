import React from "react";
import Button from "react-bootstrap/esm/Button";
import Infobox from "./Infobox";

export class Greetings extends React.Component{

    constructor (props){
        super(props)
        this.state= {
            name:''
        }
    }

    changeName = (e) => {
        this.setState({
            name:e.target.value
        })
    }

    clearName = () => {
        this.setState({
            name: ''
        })
    }

    render(){
        return(
            <>
                <Infobox type='Greetings'/> 
                <div className="game-board">
                    <h3>Hello, my name is {this.state.name}</h3>

                    <input type='text' onChange={this.changeName} value={this.state.name}/>
                    <Button variant='danger' onClick={this.clearName}>Clear</Button>
                </div>
            </>
        )
    }
}