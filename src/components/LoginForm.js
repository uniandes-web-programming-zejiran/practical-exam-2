import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const credentials = {
            login: username,
            password: password
        };

        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then(response => {
                if (response.status === 200) {
                    // Successful authentication
                    console.log('Authentication successful');
                    // Redirect to the list of cafes
                    navigate("/cafes");
                } else if (response.status === 401) {
                    // Incorrect credentials
                    setError('Please review your credentials');
                } else {
                    // Other error occurred
                    setError('An error occurred. Please try again later.');
                }
            })
            .catch(error => {
                // Error in the request
                setError('An error occurred. Please try again later.');
                console.error(error);
            });
    };

    const handleCancel = () => {
        // Handle cancel action
    };

    return (
        <div className="login-container">
            <p className="mt-4 bold-text">Inicio de sesión</p>
            <div className="inner-login-container">
                <div className="form-group">
                    <p className="bold-text">Nombre de usuario</p>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre de usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <p className="bold-text mt-4">Contraseña</p>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mt-4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
                    <button
                        style={{ backgroundColor: '#8FA98F', fontWeight: 'bold', marginBottom: '10px' }}
                        onClick={handleLogin}
                    >
                        Ingresar
                    </button>
                    <button
                        style={{ backgroundColor: '#E75D5D', fontWeight: 'bold' }}
                        onClick={handleCancel}
                    >
                        Cancelar
                    </button>
                </div>
                {error && <p className="mt-3 text-danger">Authentication error. {error}</p>}
            </div>
        </div>
    );
};

export default LoginForm;
