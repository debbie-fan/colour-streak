import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function Navbar() {
    const { currentUser, logout } = useContext(AuthContext);

    return (
        <header>
            <span className="logo">
                <img className="logo-img" src={require("../assets/colour-streak-logo.png")} alt="Colour Streak Logo"/>
            </span>
        <nav>
            <ul>
                <li className="colour-game">
                    <Link to="colour-game">
                        <span>Game</span>
                    </Link>
                </li>
                <li className="leaderboard">
                    <Link to="leaderboard">
                        <span>Leaderboard</span>
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