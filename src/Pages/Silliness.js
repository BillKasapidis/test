import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Infobox from "./Infobox";
import './Metronome.css'

function Silliness (){
    
    const [adjective1,setAdjective1] = useState('')
    const [adjective2,setAdjective2] = useState('')
    const [typeOfBird,setTypeOfBird] = useState('')
    const [roomInHouse,setRoomInHouse] = useState('')
    const [verbPastTense,setVerbPastTense] = useState('')
    const [verb,setVerb] = useState('')
    const [relativeName,setRelativeName] = useState('')
    const [noun1,setNoun1] = useState('')
    const [liquid,setLiquid] = useState('')
    const [gerund1,setGerund1] = useState('')
    const [partOfBodyPlural,setPartOfBodyPlural] = useState('')
    const [pluranNoun,setPluranNoun] = useState('')
    const [gerund2,setGerund2] = useState('')
    const [noun2,setNoun2] = useState('')
        
    const [showMadlib, setShowMadlib] = useState(false)

    const changeValue = (e) => {

        switch(e.target.id){
            case 'adjective1':
                setAdjective1(e.target.value)
                break
            case 'adjective2':
                setAdjective2(e.target.value)
                break
            case 'typeOfBird':
                setTypeOfBird(e.target.value)
                break
            case 'roomInHouse':
                setRoomInHouse(e.target.value)
                break
            case 'verbPastTense':
                setVerbPastTense(e.target.value)
                break
            case 'verb':
                setVerb(e.target.value)
                break
            case 'relativeName':
                setRelativeName(e.target.value)
                break
            case 'noun1':
                setNoun1(e.target.value)
                break
            case 'liquid':
                setLiquid(e.target.value)
                break
            case 'gerund1':
                setGerund1(e.target.value)
                break
            case 'partOfBodyPlural':
                setPartOfBodyPlural(e.target.value)
                break
            case 'pluranNoun':
                setPluranNoun(e.target.value)
                break
            case 'gerund2':
                setGerund2(e.target.value)
                break
            case 'noun2':
                setNoun2(e.target.value)
                break
            default:
                break
            }
    }
    
    return(
        <>
        <Infobox type='Madlib' />
        <div className="madlibInput">
            <h3>Type in the first thing that comes to mind!</h3>
            <p>Give me an adjective: <input type='text' onChange={changeValue} value={adjective1} id='adjective1'/></p> 
            <p>Give me another adjective:  <input type='text' onChange={changeValue} value={adjective2} id='adjective2'/></p>
            <p>What's your favorite bird?  <input type='text' onChange={changeValue} value={typeOfBird} id='typeOfBird' /></p>
            <p>Where do you spend most of your time in the house?  <input type='text' onChange={changeValue} value={roomInHouse} id='roomInHouse' /></p>
            <p>Give me a verb in the past tense:  <input type='text' onChange={changeValue} value={verbPastTense} id='verbPastTense' /></p>
            <p>Give me a verb (not in the past tense): <input type='text' onChange={changeValue} value={verb} id='verb'/></p>
            <p>What's your cousin's name? <input type='text' onChange={changeValue} value={relativeName} id='relativeName'/></p>
            <p>Think of a random noun: <input type='text' onChange={changeValue} value={noun1} id='noun1' /></p>
            <p>Give me the name of something liquid: <input type='text'  onChange={changeValue} value={liquid} id='liquid' /></p>
            <p>Think of a verb ending in -ing:  <input type='text' onChange={changeValue} value={gerund1} id='gerund1' /></p>
            <p>Something your body has 2 or more of: <input type='text'onChange={changeValue}  value={partOfBodyPlural} id='partOfBodyPlural' /></p>
            <p>Something your house has 2 or more of:<input type='text' onChange={changeValue} value={pluranNoun} id='pluranNoun' /></p>
            <p>Think of another verb ending in -ing: <input type='text' onChange={changeValue} value={gerund2} id='gerund2' /></p>
            <p>Lastly, tell me a random noun: <input type='text' onChange={changeValue} value={noun2} id='noun2' /></p>

            <Button variant="danger" onClick={() => setShowMadlib(!showMadlib)}>{showMadlib ? 'Ok, enough!' : 'Show me!'}</Button>
        </div>
    
        { showMadlib && 
        <p className='madlib'>
            It was a {adjective1}, cold November day. I woke up to the {adjective2} smell of {typeOfBird} roasting in the {roomInHouse} downstairs. I {verbPastTense} down the stairs to see if I could help {verb} the dinner. My mom said, "See if {relativeName} needs a fresh {noun1}." So I carried a tray of glasses full of {liquid} into the {gerund1} room. When I got there, I couldn't believe my {partOfBodyPlural}! There were {pluranNoun} {gerund2} on the {noun2}! 
        </p>
        }
        
        </>
    )
}
export default Silliness;