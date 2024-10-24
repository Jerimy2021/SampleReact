import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './HomePage';  // Página principal con Sidebar y Header
import Login from './Login';        // Página de login
import Logout from './Logout';      // Página de logout
import MainBoard from './MainBoard';  // Página de "Main Board"
import Campus from './Campus';        // Página de "Campus"
import Market from './Market';        // Página de "Market"
import Profile from './Profile';      // Página de "Profile"
import Settings from './Settings';    // Página de "Settings"
import './css/App.css';

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Comprobar si hay un usuario guardado en localStorage para mantener la sesión iniciada
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('user'); // Borrar los datos del usuario del localStorage
    setIsLoggedIn(false); // Cambiar estado a no logueado
  };

  return (
    <Router>
      <div className="App">
        {!isLoggedIn ? (
          // Si no está logueado, muestra la página de login
          <Login onLogin={handleLogin} />
        ) : (
          // Si está logueado, carga las rutas correspondientes
          <Routes>
            <Route path="/" element={<HomePage onLogout={handleLogout} />}>
              <Route path="mainboard" element={<MainBoard />} />
              <Route path="campus" element={<Campus />} />
              <Route path="market" element={<Market />} />
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<Settings />} />
            </Route>
            <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
            <Route path="*" element={<Navigate to="/" />} />  {/* Redirige a la página principal si la ruta no existe */}
          </Routes>
        )}
      </div>
    </Router>
  );
}
