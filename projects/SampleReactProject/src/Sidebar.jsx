import React from "react";
import { Link } from "react-router-dom";  // Importa Link de react-router-dom
import './css/Sidebar.css';

import MainBoardIcon from './assets/MainBoard.png';
import CampusIcon from './assets/Campus.png';
import MarketIcon from './assets/Market.png';
import ProfileIcon from './assets/Profile.png';
import SettingsIcon from './assets/Settings.png';
import LogoutIcon from './assets/Logout.png';

const Sidebar = ({ onLogout }) => {
  return (
    <div className="sidebar">
      <div className="logo-section">
        <h2>GRIA UTEC</h2>
      </div>
      <ul className="nav-section">
        <li>
          <img src={MainBoardIcon} alt="Main Board" />
          <Link to="/mainboard">Main Board</Link>  {/* Link a la ruta /mainboard */}
        </li>
        <li>
          <img src={CampusIcon} alt="Campus" />
          <Link to="/campus">Campus</Link>  {/* Link a la ruta /campus */}
        </li>
        <li>
          <img src={MarketIcon} alt="Market" />
          <Link to="/market">Market</Link>  {/* Link a la ruta /market */}
        </li>
      </ul>
      <ul className="nav-section lower">
        <li>
          <img src={ProfileIcon} alt="Profile" />
          <Link to="/profile">Profile</Link>  {/* Link a la ruta /profile */}
        </li>
        <li>
          <img src={SettingsIcon} alt="Settings" />
          <Link to="/settings">Settings</Link>  {/* Link a la ruta /settings */}
        </li>
        <li onClick={onLogout}>  {/* Al hacer clic aquí, cerrará sesión */}
          <img src={LogoutIcon} alt="Log Out" />
          <span>Log Out</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
