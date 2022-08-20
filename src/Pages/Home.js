import React from "react";
import './Metronome.css';


export class Home extends React.Component{
    render(){
        return (
            <>
                <div className="metronome" >
                    <h1>Hello from Home!</h1>
                    <p>This is a simple landing page. All the cool stuff are in the little <strong style={{color:'#33cc33'}}>green</strong> box containing the pages I created!</p>
                    <p>Also make sure to press the <strong style={{color:'#0000ff'}}>blue</strong> box to read some nerdy info about each page.</p>
                </div>
                    
            </>
        )
    }
}