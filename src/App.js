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
                <h2>Bill Kasapidis</h2>
                <BrowserRouter>
                    <Routes>
                        <Route path="/test" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/test/metronome" element={<MyMetronome />} />
                        <Route path="/test/greetings" element={<Greetings />} />
                        <Route path="/test/madlib" element={<Silliness />} />
                        <Route path="/test/tictactoe" element={<TicTacToe />} />
                        </Route>
                    </Routes>
                </BrowserRouter>

            </>
            
        );
    }
}