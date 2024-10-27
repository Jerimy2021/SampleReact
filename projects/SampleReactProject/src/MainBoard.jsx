import React, { useState } from 'react';
import './css/MainBoard.css';
const MainBoard = () => {
  const [user_cod, setUsercode] = useState('');
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null);

    if (!user_cod) {
      setError('Debes ingresar un código de usuario');
      return;
    }

    console.log("User code: ", user_cod);
    
    try {
      const response = await fetch(`https://2187c3ilo6.execute-api.us-east-1.amazonaws.com/APIusuarios/usuario/user_cod=${encodeURIComponent(user_cod)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Verifica si la respuesta es OK
      if (!response.ok) {
        const errorMessage = await response.text(); // Captura el texto de la respuesta
        throw new Error(`Error: ${response.status} ${errorMessage}`); // Lanza un error con el estado y mensaje
      }

      const rawData = await response.json(); // Analiza como JSON directamente
      console.log("Raw data: ", rawData);
      // Verifica si hay un cuerpo válido
      if (rawData && typeof rawData === 'object') {
        if (rawData.success) {
          setUserData(rawData);
        } else {
          setError(rawData.message || 'No se encontraron datos para el usuario ingresado');
        }
      } else {
        setError('Respuesta no válida de la API');
      }
    } catch (error) {
      setError('Hubo un error al intentar obtener los datos del usuario. Inténtalo de nuevo más tarde.');
      console.log("Error: ", error);
      console.log("Data: ", userData);
    }
  }

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
        <input
          type="text"
          placeholder="Escribe el código del usuario"
          value={user_cod}
          onChange={(e) => setUsercode(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
        {error && <p className="error">{error}</p>}
        {userData && (
          <div className="user-stats">
            <h3>{userData.nombre}</h3>
            <p>Tacho 1: {userData.tacho1} 💡</p>
            <p>Tacho 2: {userData.tacho2} 💡</p>
            <p>Tacho 3: {userData.tacho3} 💡</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainBoard;
