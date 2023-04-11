function About() {
    return (
        <div className="about-page">
            <h1 className='about-title'>About Colour Streak</h1>
            
            <section>
                <span>
                    Colour Streak is my personal project showcasing my love for learning and making art. 
                    I wanted to create this site to make a fun colour game.
                </span>
            </section>

            <section>
                <h2>The Design</h2>
                <span>
                    I started off designing the layout of the site and focused on the game component, which is a simple colour guessing game. 
                    This helped me decide on the colour scheme, think about the different pages I'll have on the site, and how the game will work. 
                    The game uses an API called <a href='https://www.thecolorapi.com/'>TheColorAPI</a>, which has a database of colours and the names. Here's a screenshot of my initial idea, 
                    which you can also view on <a href='https://www.figma.com/file/bW5NwmY5FtWARmqEsNBHUp/The-Colour-Game?node-id=0%3A1'>Figma</a>:
                </span>
                <br/>
                <img src={require('../assets/figma-colour-streak.PNG')} alt="Website layout design in figma" className='figma-img'/>
                <br/>
                <span>
                    I decided to have a darker grey theme for the site. Having a neutral colour in the background was important because the background 
                    colour can affect how the user sees the colour in the center. I also wanted to make the central colour pop, and I love dark mode, which led 
                    to the darker background. I added some finishing touches with the logo and the center colour by creating visual assets using Photoshop.
                </span>
            </section>

            <section>
                <h2>The Code</h2>
                <span>
                    This project was created using React, Node.js with Express, and MySQL. React is used to create the core application pages including the game user interface 
                    and the leaderboard page, which ranks user scores from highest to lowest. Authentication is implemented and is primarily used to track highscores among users. 
                    The colour API (https://www.thecolorapi.com/) is used to obtain all of the relevant colour data for the game. For the backend, Node.js with Express is 
                    primarily utilized to make REST API calls to mySQL data tables.
                </span>
            </section>

            <section>
                <h2>Potential Future Enhancements</h2>
                <span>
                    Currently, the main colour game shows the user a colour and provides three buttons with one containing the correct name of the colour. The other two options are
                    randomly chosen colours. In the future, I plan to implement increasing difficulty levels, by increasing the association of the wrong answers with the correct one 
                    to make it more of a consistent challenge.
                </span>
                <br/>
                <span>
                    Eventually I would like to add another game mode, one that helps users learn colour theory and be able to recognize the different colour schemes that exist, such as 
                    monochromatic, analogous, triad, complementary and more. I personally have had trouble learning colour theory and this addition is my ultimate vision for this project. 
                    It is more complicated than the current game because it will require showing multiple colours at once and a more advanced handling of the responses from the API calls 
                    to the colour API.
                </span>
                <br/>
                <span>
                    Lastly, this project only runs locally and requires all dependencies to be installed locally. I'm looking towards hosting this on the cloud!
                </span>
            </section>
        </div>
    )
}

export default About;