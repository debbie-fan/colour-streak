function About() {
    return (
        <div className="about-page">
            <h1 className='about-title'>About Colour Streak</h1>
            
            <section>
                <span>
                    Colour Streak is my personal project showcasing my love for learning and making art. 
                    I wanted to create this site to make a fun colour game and learn some colour theory.
                </span>
            </section>

            <section>
                <h2>The Process</h2>
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
                    I decided to have a darker grey theme for the site. Having a neutral colour in the background was important to me because the background 
                    colour can affect how the user sees the colour in the center. I also wanted to make the central colour pop, and I love dark mode, which led 
                    to the darker background.
                </span>
            </section>
        </div>
    )
}

export default About;