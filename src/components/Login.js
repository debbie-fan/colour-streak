import React from "react";

function Login() {

    const [formData, setFormData] = React.useState(
        {username: "", password: ""}
    )

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: event.target.value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }

    return (
        <form className="form-signin" onSubmit={handleSubmit}>
            <p className="form-title">Sign In</p>
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
            <button>Submit</button>                
        </form>
    )
}

export default Login;