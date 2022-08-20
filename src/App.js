import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import { Home } from "./Pages/Home";
import { MyMetronome } from "./Pages/Metronome";
import { Greetings } from "./Pages/Greetings";
import Silliness from "./Pages/Silliness";
import TicTacToe from "./Pages/TicTacToe";

export class App extends React.Component{
    render(){
        return(
            <>
                <h1>Hello!</h1>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="metronome" element={<MyMetronome />} />
                        <Route path="greetings" element={<Greetings />} />
                        <Route path="silliness" element={<Silliness />} />
                        <Route path="tictactoe" element={<TicTacToe />} />
                        </Route>
                    </Routes>
                </BrowserRouter>

            </>
            
        );
    }
}