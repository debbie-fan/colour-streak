import React from 'react';
import { Routes, Route } from "react-router-dom";
import ColourGame from '../components/ColourGame';
import Leaderboard from '../components/Leaderboard';
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
                path="colour-game" 
                element= { <ColourGame/> } 
            />
            <Route 
                path="leaderboard" 
                element= { <Leaderboard/> } 
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
