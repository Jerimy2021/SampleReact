import React, { useState } from 'react';
import './css/MainBoard.css';
const MainBoard = () => {
  const [user_cod, setUsercode] = useState('');
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    if (!user_cod) {
      setError('Debes ingresar un código de usuario');
      setIsLoading(false);
      return;
    }
    
    try {
      const response = await fetch(`https://2187c3ilo6.execute-api.us-east-1.amazonaws.com/APIusuarios/usuario`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "user_cod": user_cod,
        }),
      });

      // Verifica si la respuesta es OK
      if (!response.ok) {
        const errorMessage = await response.text(); // Captura el texto de la respuesta
        throw new Error(`Error: ${response.status} ${errorMessage}`); // Lanza un error con el estado y mensaje
      }

      const rawData = await response.json();
      const data = rawData.body;
      console.log("Raw Data: ", rawData);
      console.log(data);

      // Verifica si hay un cuerpo válido
      if (rawData.statusCode === 200) {
        setUserData(data);
        setError(null);
      } else {
        setError('Usuario con el código "{}" no encontrado'.replace('{}', user_cod));
      }
      setIsLoading(false);
    } catch (error) {
      setError('Hubo un error al intentar obtener los datos del usuario. Inténtalo de nuevo más tarde.');
      setIsLoading(false);
    }
  }

  return (
    <div className="main-board-container">
      <div className="eco-contribution">
        <fr className="fr1">
          <h2>Aporte Ecológico</h2>
          <img src="https://www.floristeriamorris.com/wp-content/uploads/etapas-de-crecimiento-de-las-plantas.jpg" alt="Planting Tree" className="eco-image" />
        </fr>
        
        <fr className="fr2">
          <p><strong>132 kg Reciclados</strong></p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"  height="24"  viewBox="0 0 24 24"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M10 2l-.15 .005a2 2 0 0 0 -1.85 1.995v6.999l-2.586 .001a2 2 0 0 0 -1.414 3.414l6.586 6.586a2 2 0 0 0 2.828 0l6.586 -6.586a2 2 0 0 0 .434 -2.18l-.068 -.145a2 2 0 0 0 -1.78 -1.089l-2.586 -.001v-6.999a2 2 0 0 0 -2 -2h-4z" />
          </svg>

          <p><strong>1,848 árboles plantados</strong></p>
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"  height="24"  viewBox="0 0 24 24"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M10 2l-.15 .005a2 2 0 0 0 -1.85 1.995v6.999l-2.586 .001a2 2 0 0 0 -1.414 3.414l6.586 6.586a2 2 0 0 0 2.828 0l6.586 -6.586a2 2 0 0 0 .434 -2.18l-.068 -.145a2 2 0 0 0 -1.78 -1.089l-2.586 -.001v-6.999a2 2 0 0 0 -2 -2h-4z" />
          </svg>

          <p className="point-convertion">316.8 kWh = <strong>1262 💡</strong></p>
        </fr>
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
        
        <div className="input-container">
          <input
            type="text"
            placeholder="Escribe el código del usuario"
            value={user_cod}
            onChange={(e) => setUsercode(e.target.value)}
          />
          
          <button
            onClick={handleSearch}
            disabled={isLoading}
          >
            Buscar
          </button>
        </div>

        {isLoading && (
          <div className="spinner"></div>
        )}

        {error && <p className="error">{error}</p>}
        
        {userData && !isLoading && !error && (
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
