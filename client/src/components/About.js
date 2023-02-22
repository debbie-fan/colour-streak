function About() {
    return (
        <div className="about-page">
            <h1 className='about-title'>About Colour Streak</h1>
            
            <section>
                <h2>My Personal Project</h2>
                <span>
                    Colour Streak is my personal project showcasing my love for learning and making art. 
                    I wanted to create this site to make a fun colour game and learn some colour theory.
                </span>
            </section>

            <section>
                <h2>The Process</h2>
                <span>
                    I started off designing the layout of the site using figma and focused on the game component, which is a simple colour guessing game. 
                    This helped me decide on the colour scheme, think about the different pages I'll have on the site, and how the game will work. 
                    The game uses an API called the colorAPI, which has a database of colours and the names.
                </span>
                <br/>
                <img src={require('../assets/figma-colour-streak.PNG')} alt="Website layout design in figma" className='figma-img'/>
            </section>
        </div>
    )
}

export default About;