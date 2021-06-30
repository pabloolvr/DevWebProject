import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

// async function to make a POST request to the server
async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login({ setToken }) {
    // local state to capture Username and Password
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    // form submit handler
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }

    return (
        <div className="login-wrapper">
            Pra poder fazer o login tem que rodar o server expresso usando o cors.<br></br>
            Pra poder rodar o server tem que ter o cors instalado, ele é instalado com o comando: 'npm install --save-dev express cors'<br></br>
            Agora pra rodar o server é só dar o comando: 'node server.js'
            <h1>Por favor faça login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label><br/>
                <div>
                    <button type="submit">Submit</button>
                </div>
                
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}