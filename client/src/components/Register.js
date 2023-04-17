import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {

    // Create form with default empty strings in inputs
    const [formData, setFormData] = React.useState(
        {username: "", password: ""}
    )
    
    // Set variables
    const [err, setError] = React.useState(null);

    const navigate = useNavigate() 

    // Update record of form data every time inputs change
    function handleChange(event) {
        const {name} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: event.target.value
            }
        })
    }

    // Prevent default on submit and check if user logs in
    async function handleSubmit (event) {
        event.preventDefault()
        try{
            await axios.post("auth/register", formData)
            navigate("/login")
        } catch(err) {
            setError(err.response.data)
        }
        console.log(formData)
    }

    return (
        <form className="form-signin" onSubmit={handleSubmit}>
            <p className="form-title">Register</p>
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
            <button type="submit">Submit</button>
            {err && <p>{err}</p>}
            <span>
                Already have an account? <Link to="/login" className="auth-link">Login</Link>
            </span>
        </form>
    )
}

export default Register;