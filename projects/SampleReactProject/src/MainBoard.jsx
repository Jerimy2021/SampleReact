import React from 'react';
import './css/MainBoard.css';
const MainBoard = () => {
  return (
    <div className="main-board-container">
      <div className="eco-contribution">
        <h2>Aporte Ecológico</h2>
        <img src="https://www.floristeriamorris.com/wp-content/uploads/etapas-de-crecimiento-de-las-plantas.jpg" alt="Planting Tree" className="eco-image" />
        <p><strong>132 kg Reciclados</strong></p>
        <p><strong>1,848 árboles plantados</strong></p>
        <p>316.8 kWh = <strong>1262 💡</strong></p>
      </div>

      <div className="leaderboard-section">
        <h2>Leaderboard</h2>
        <ul>
          <li><strong>Jose Paredes</strong> - 6750 💡</li>
          <li><strong>Carla Osorio</strong> - 6748 💡</li>
          <li><strong>Miguel Guerrero</strong> - 6744 💡</li>
        </ul>
      </div>

      <div className="user-search">
        <h2>Buscador</h2>
        <input type="text" placeholder="Escribe tu nombre" />
        <div className="user-stats">
          <h3>Maria Portales</h3>
          <p>Tacho 1: 20 💡</p>
          <p>Tacho 2: 40 💡</p>
          <p>Tacho 3: 10 💡</p>
        </div>
      </div>
    </div>
  );
};

export default MainBoard;
