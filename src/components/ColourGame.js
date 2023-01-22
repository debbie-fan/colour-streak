import React from "react";
import getColourData from "../api/ColourAPI";

function ColourGame() {
    
    // Create state for rgb colour value
    const [colourRgb, setColourRgb] = React.useState('255,255,255')
    const [colourName, setColourName] = React.useState({colour1: '', colour2: '', colour3: ''})
    
    // Styles
    let styles = {
        // Set colour of dot
        backgroundColor: `rgb(${colourRgb})`
    };

    // Generate random value, min and max inclusive
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // Generate a random rgb colour and return a string of the three values e.g. 255, 255, 255
    function generateRgbValues() {
        let red = randomNumber(0, 255);
        let green = randomNumber(0, 255);
        let blue = randomNumber(0, 255);
        return `${red}, ${green}, ${blue}`;
    }

    // Update colour rgb value of answer to set style of the colour shown to user
    function newColour() {
        setColourRgb(generateRgbValues());
    }

    function shuffleOrder(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }

    // Create effect to call API for colour name after colour changes
    React.useEffect(() => {
        // Create array to order number answers and randomize the order sequence
        // to display in the buttons
        let colourOrder = [1, 2, 3];
        shuffleOrder(colourOrder);

        // call ColorAPI
        for (let i = 0; i < 3; i++) {
            if (i == 0) {
                // get json data as a promise from Color API for the colour
                const colourDataPromise = getColourData(colourRgb)
                // get name of colour from json data
                colourDataPromise.then(res => {
                    setColourName(prevColourName => {
                        return {
                            ...prevColourName,
                            ['colour' + colourOrder[i]]: res.name.value  + ' is answer'}
                    });             
                })
            } else {
                // call API (for fake answers), get json data as a promise from Color API for random colour, for fake answer
                const colourDataPromise2 = getColourData(generateRgbValues())
                // get name of fake answer from json data
                colourDataPromise2.then(res => {
                    setColourName(prevColourName => {
                        return {
                            ...prevColourName,
                            ['colour' + colourOrder[i]]: res.name.value}
                    });
                })
            }
        }

    }, [colourRgb]);
    

    return (
        <div>
            <div className="game-info">
                <h2 className="game-title">WHAT'S THAT COLOUR?</h2>
                <p className="game-description">
                    What is the name of the colour below? 
                    Take a guess and try your luck! 
                    <br /> Get multiple colours right consecutively to start a streak!
                </p>
            </div>
            <div className="colours-container">
                <span className="colour-dot" style={styles}></span>
            </div>
            <div className="game-answers">
                <button 
                    className="answer-1"
                    onClick={newColour}
                >
                    {colourName.colour1}
                </button>
                <button className="answer-2">{colourName.colour2}</button>
                <button className="answer-3">{colourName.colour3}</button>
            </div>
        </div>
    )
}

export default ColourGame;