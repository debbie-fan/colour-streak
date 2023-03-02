import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function Navbar() {
    const { currentUser, logout } = useContext(AuthContext);

    return (
        <header>
            <span>Colour Streak Logo Image</span>
        <nav>
            <ul>
                <li className="colour-theory">
                    <Link to="colour-theory">
                        <span>Colour Theory</span>
                    </Link>
                </li>
                <li className="colour-game">
                    <Link to="colour-game">
                        <span>Games</span>
                    </Link>
                </li>
                <li className="about">
                    <Link to="about">
                        <span>About</span>
                    </Link>
                </li>
                { currentUser ? (
                    <li className="logout">
                        <Link to="/">
                            <span onClick={logout}>Logout</span>
                        </Link>
                    </li>
                ) : (
                    <li className="login">
                        <Link to="login">
                            <span>Login</span>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
        </header>
    )
}

export default Navbar;