import React from 'react';
import { Routes, Route } from "react-router-dom";
import ColourGame from '../components/ColourGame';
import ColourTheory from '../components/ColourTheory';
import About from '../components/About';
import Login from '../components/Login';
import Register from '../components/Register';

function Router() {
    return (
        <Routes>
            <Route 
                path="/" 
                element={ <ColourGame/> } 
            />
            <Route 
                path="colour-theory" 
                element= { <ColourTheory/> } 
            />
            <Route 
                path="colour-game" 
                element= { <ColourGame/> } 
            />
            <Route 
                path="about" 
                element={ <About/> } 
            />
            <Route 
                path="login" 
                element={ <Login/> } 
            />
            <Route 
                path="register" 
                element={ <Register/> } 
            />
        </Routes>
    );
};

export default Router;
