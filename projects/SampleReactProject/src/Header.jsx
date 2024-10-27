import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import './css/Header.css';

import Logo from './assets/logoGIA.png';

const Header = ({ onLogout }) => {
  const [user, setUser] = useState({ name: '', image: '' });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <header>
      <div className="sideBar">
        <div className="logo-section">
          <img src={ Logo }></img>
          <div className="logo-name">
            <h2>GRIA</h2>
            <h3>UTEC</h3>
          </div>
        </div>
        <ul className="nav-section">
          <li>
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              width="24"  height="24"  viewBox="0 0 24 24"
              fill="white"  class="icon icon-tabler icons-tabler-filled icon-tabler-layout-grid"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M9 3a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
              <path d="M19 3a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
              <path d="M9 13a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
              <path d="M19 13a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
            </svg>
            <Link to="/mainboard">Main Board</Link>  {/* Link a la ruta /mainboard */}
          </li>
          <li>
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              width="24"  height="24"  viewBox="0 0 24 24"
              fill="white"  class="icon icon-tabler icons-tabler-filled icon-tabler-mountain"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M6.18 10.95l2.54 3.175l.084 .093a1 1 0 0 0 1.403 -.01l1.637 -1.638l1.324 1.985a1 1 0 0 0 1.457 .226l3.632 -2.906l3.647 7.697a1 1 0 0 1 -.904 1.428h-18a1 1 0 0 1 -.904 -1.428zm5.82 -7.878a3.3 3.3 0 0 1 2.983 1.888l2.394 5.057l-3.15 2.52l-1.395 -2.092l-.075 -.099a1 1 0 0 0 -1.464 -.053l-1.711 1.709l-1.301 -1.627l-1.151 -1.435l1.888 -3.98a3.3 3.3 0 0 1 2.982 -1.888" />
            </svg>
            <Link to="/campus">Campus</Link>  {/* Link a la ruta /campus */}
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"  height="24"  viewBox="0 0 24 24"
              fill="white"  class="icon icon-tabler icons-tabler-filled icon-tabler-shopping-cart"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M6 2a1 1 0 0 1 .993 .883l.007 .117v1.068l13.071 .935a1 1 0 0 1 .929 1.024l-.01 .114l-1 7a1 1 0 0 1 -.877 .853l-.113 .006h-12v2h10a3 3 0 1 1 -2.995 3.176l-.005 -.176l.005 -.176c.017 -.288 .074 -.564 .166 -.824h-5.342a3 3 0 1 1 -5.824 1.176l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-12.17h-1a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 .883 -.993l.117 -.007h2zm0 16a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm11 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z" />
            </svg>
            <Link to="/market">Market</Link>  {/* Link a la ruta /market */}
          </li>
        </ul>
        <ul className="nav-section lower">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"  height="24"  viewBox="0 0 24 24"
              fill="white"  class="icon icon-tabler icons-tabler-filled icon-tabler-user"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
              <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
            </svg>
            <Link to="/profile">Profile</Link>  {/* Link a la ruta /profile */}
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"  height="24"  viewBox="0 0 24 24"
              fill="white"  class="icon icon-tabler icons-tabler-filled icon-tabler-settings"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M14.647 4.081a.724 .724 0 0 0 1.08 .448c2.439 -1.485 5.23 1.305 3.745 3.744a.724 .724 0 0 0 .447 1.08c2.775 .673 2.775 4.62 0 5.294a.724 .724 0 0 0 -.448 1.08c1.485 2.439 -1.305 5.23 -3.744 3.745a.724 .724 0 0 0 -1.08 .447c-.673 2.775 -4.62 2.775 -5.294 0a.724 .724 0 0 0 -1.08 -.448c-2.439 1.485 -5.23 -1.305 -3.745 -3.744a.724 .724 0 0 0 -.447 -1.08c-2.775 -.673 -2.775 -4.62 0 -5.294a.724 .724 0 0 0 .448 -1.08c-1.485 -2.439 1.305 -5.23 3.744 -3.745a.722 .722 0 0 0 1.08 -.447c.673 -2.775 4.62 -2.775 5.294 0zm-2.647 4.919a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" />
            </svg>
            <Link to="/settings">Settings</Link>  {/* Link a la ruta /settings */}
          </li>
          <li onClick={onLogout}>  {/* Al hacer clic aquí, cerrará sesión */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-logout"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
              <path d="M9 12h12l-3 -3" />
              <path d="M18 15l3 -3" />
            </svg>

            <span>Log Out</span>
          </li>
        </ul>
      </div>

      <div className="mainHeader">
        <div className="title">
          <h3>Hola, {user.name}!</h3>
          <h1>Gamificación Consciente</h1>
        </div>
        <div className="user-info">
          <div className="user-profile">
            <span>{user.name}</span>
            <img src={user.image || './assets/default.png'} alt="Profile" className="profile-pic" />
          </div>
          <div className="notifications">
            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="bell-icon">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z" />
              <path d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004z" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
