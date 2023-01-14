function Navbar() {
    return (
        <header>
            <span>Colour Streak Logo Image</span>
        <nav>
            <ul>
                <li className="colour-theory">
                    <a href="">
                        <span>Colour Theory</span>
                    </a>
                </li>
                <li className="games">
                    <a href="">
                        <span>Games</span>
                    </a>
                </li>
                <li className="about">
                    <a href="">
                        <span>About</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span>Sign In</span>
                    </a>
                </li>
            </ul>
        </nav>
        </header>
    )
}

export default Navbar;