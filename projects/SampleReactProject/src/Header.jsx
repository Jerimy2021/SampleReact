import React, { useEffect, useState } from 'react';
import './css/Header.css';

const Header = () => {
  const [user, setUser] = useState({ name: '', image: '' });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <header className="header">
      <div className="title">
        <h1>Gamificación Consciente</h1>
      </div>
      <div className="user-info">
        <div className="user-profile">
          <span>Hola, {user.name}!</span>
          <img src={user.image || './assets/default.png'} alt="Profile" className="profile-pic" />
        </div>
        <div className="notifications">
          <span className="bell-icon">🔔</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
