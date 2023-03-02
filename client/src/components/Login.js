import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

function Login() {

    const [formData, setFormData] = React.useState(
        {username: "", password: ""}
    )
    
    const [err, setError] = React.useState(null);

    const navigate = useNavigate();
    
    const { login } = useContext(AuthContext);

    function handleChange(event) {
        const {name} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: event.target.value
            }
        })
    }

    async function handleSubmit (event) {
        event.preventDefault()
        try{
            await login(formData)
            await axios.post("auth/login", formData)
            navigate("/")
        } catch(err) {
            setError(err.response.data)
        }
        console.log("login succeeded")
        console.log(formData)
    }

    return (
        <form className="form-signin" onSubmit={handleSubmit}>
            <p className="form-title">Login</p>
            <input 
                autoComplete="off" 
                autoFocus 
                className="username" 
                id="username" 
                placeholder="Username"
                type="text"
                onChange={handleChange}
                name="username"
                value={formData.username}
            />
            <input 
                autoComplete="off"  
                className="password" 
                id="password" 
                placeholder="Password"
                type="text"
                onChange={handleChange}
                name="password"
                value={formData.password}
            />
            <button type="submit">Login</button>
            {err && <p>{err}</p>}
            <span>
                Don't have an account? <Link to="/register" className="auth-link">Register</Link>
            </span>
        </form>
    )
}

export default Login;