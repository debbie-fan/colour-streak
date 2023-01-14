function ColourGame() {

    const styles = {
        backgroundColor: "rgb(96, 53, 193)"
    }

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
                <button className="answer-1">turquoise</button>
                <button className="answer-2">purple</button>
                <button className="answer-3">green</button>
            </div>
        </div>
    )
}

export default ColourGame;