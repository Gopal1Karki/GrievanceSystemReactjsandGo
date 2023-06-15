import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [username , setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message , setMessage] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/api/login" , {
                username,
                password,
            });

            // setMessage(response.data)
            // navigate("/admin")
            if (response.data === "Success"){
                navigate("/dashboard")
            } else {
                setMessage(response.data)
            }
        } catch(error) {
            console.error(error)
        }
    };

    return (
        <>
        <Header />
        <div className="auth-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
            <u><h2>Login</h2></u>
                <label htmlFor="username"><b>Username</b></label>
                <input value={username} type="username" onChange={(e) => setUsername(e.target.value)}  placeholder="Username" id="username" name="username"/>
                <label htmlFor="password"><b>Password</b></label>
                <input value={password}  onChange={(e) => setPassword(e.target.value)} type="password"  placeholder="**********" id="password" name="password"/>

                <button>Login</button>
                {message && <p>{message}</p>}
            </form>

        </div>
        <Footer />
        </>
    )
}

export default Login;
