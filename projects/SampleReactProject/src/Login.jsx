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
      const response = await fetch('https://ee24bgc8p3.execute-api.us-east-1.amazonaws.com/APIdisrupton/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "user_mail": username,
          "user_password": password,
        }),
      });

      const rawData = await response.json();
      
      if (rawData.statusCode == 200) {
        localStorage.setItem('user', JSON.stringify({
          name: rawData.user_name,
          image: rawData.image,
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
    <div className="login-container">
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">User name / Email</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login-button" type="submit">
            Log In Now
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
