import React from 'react';
import Sidebar from './Sidebar';  // Importa la barra lateral
import Header from './Header';  // Importa el encabezado
import { Outlet } from 'react-router-dom';  // Outlet para renderizar las rutas internas como MainBoard
import './css/HomePage.css';  // Archivo CSS para los estilos de la página principal

const HomePage = ({ onLogout }) => {
  return (
    <div className="homepage">
      {/* Header fijo en la parte superior */}
      <Header />

      <div className="homepage-container">
        {/* Sidebar a la izquierda */}
        <Sidebar onLogout={onLogout} />

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
