import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Infobox(props) {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);
    
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Info about this page
        </Button>
  
        <Offcanvas show={show} onHide={handleShow}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Info</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {props.type === 'Metronome' && 
            <p>
                This metronome app is built using classes. Both the BPM and the Play/Stop button are handled by 
                state. This isn't very modern, as developers nowadays prefer using functions and handling their state via Hooks.
            </p>
            }
            {props.type === 'Madlib' && 
            <p>
                Each field in this Madlib game handles its own state. The input sends the field's id to a changeValue function and invokes the proper 
                set function to alter the state.  
            </p>
            }
            {props.type === 'TicTacToe' && 
            <p>
                The game board consists of 9 empty buttons that are part of the same array. When you click on a box, as long as it's empty, it alters its state to hold
                the current player's symbol. The game checks for a winner with every click. 
            </p>
            }
            
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  
export default Infobox;