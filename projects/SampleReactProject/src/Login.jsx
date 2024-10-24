import React, { useState } from 'react';
import './css/Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch('https://vxjat17qsi.execute-api.us-east-1.amazonaws.com/Disrupton/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const rawData = await response.json();
      const data = JSON.parse(rawData.body);

      if (data.success) {
        localStorage.setItem('user', JSON.stringify({
          name: data.name,
          image: data.image,
        }));
        onLogin();
      } else {
        setError(data.message || 'Credenciales inválidas');
      }
    } catch (error) {
      setError('Hubo un error al intentar iniciar sesión. Inténtalo de nuevo más tarde.');
    }
  };

  return (
    <div className="login-container"> {/* Cambiado a login-container */}
      <div className="login-box"> {/* Cambiado a login-box */}
        <form onSubmit={handleSubmit}>
          <div className="input-group"> {/* Cambiado a input-group */}
            <label htmlFor="username">User name / Email</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group"> {/* Cambiado a input-group */}
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login-button" type="submit"> {/* Cambiado a login-button */}
            Log In Now
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
