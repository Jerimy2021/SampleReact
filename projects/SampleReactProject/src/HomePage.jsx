import React from 'react';
import Header from './Header';  // Importa el encabezado
import { Outlet } from 'react-router-dom';  // Outlet para renderizar las rutas internas como MainBoard
import './css/HomePage.css';  // Archivo CSS para los estilos de la página principal

const HomePage = ({ onLogout }) => {
  return (
    <div className="homepage">
      {/* Header fijo en la parte superior */}
      <Header onLogout={onLogout}/>

      <div className="homepage-container">
        {/* Contenedor del contenido principal */}
        <div className="main-content">
          {/* Aquí se renderizarán las rutas internas como MainBoard, Campus, etc */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
