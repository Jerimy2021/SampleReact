import React, { useState, useEffect } from 'react';
import './css/MainBoard.css';

var userInfo;

const MainBoard = () => {
  const [userCode, setUsercode] = useState('');
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch('https://67jqdfbede.execute-api.us-east-1.amazonaws.com/APIusuarios/usuarios');
        const rawData = await response.json();
        
        if (rawData.statusCode === 200) {
          const users = rawData.body;
          const sortedUsers = users
            .sort((a, b) => b.user_puntaje - a.user_puntaje)
            .slice(0, 3);
          setLeaderboard(sortedUsers);
          // console.log("Leaderboard: ", leaderboard);
        } else {
          setError('Error al cargar el leaderboard');
        }
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
        setError('Error al cargar el leaderboard');
      }
    };
    
    fetchLeaderboard();
  }, []);

  async function getUserInfo(uC) {
    userInfo = {};
    try {
      const response1 = await fetch('https://rx2x9fk9tj.execute-api.us-east-1.amazonaws.com/APItachos/tachos', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      const rawData1 = await response1.json();
      const data1 = rawData1.body;

      const response2 = await fetch('https://gfp0pc7l83.execute-api.us-east-1.amazonaws.com/APIoperaciones/operaciones', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const rawData2 = await response2.json();
      const data2 = rawData2.body;

      var combinedData = data1.map(item1 => {
        const item2 = data2.find(item => item.num_ope == item1.num_ope);
        return {
          ...item1,
          ...(item2 ? item2 : {}),
        };
      });

      combinedData = (combinedData.filter(item => item.user_cod == uC));

      for (let i = 0; i < combinedData.length; i++) {
        const { piso, tacho_id, peso_residuo } = combinedData[i];
        
        const keyPiso = "Piso " + piso.toString();
        const keyTacho = tacho_id.charAt(0).toUpperCase() + tacho_id.slice(1);

        if (!userInfo[keyPiso]) {
          userInfo[keyPiso] = {};
        }

        if (!userInfo[keyPiso][keyTacho]) {
          userInfo[keyPiso][keyTacho] = 0;
        }

        userInfo[keyPiso][keyTacho] += peso_residuo;
      }

      console.log("User Info: ", userInfo);
      setIsLoading(false);
    } catch(error) {
      console.error('Error:', error);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null);
    userInfo = null;
    setIsLoading(true);

    if (!userCode) {
      setError('Debes ingresar un código de usuario');
      setIsLoading(false);
      return;
    }
    
    try {
      const response = await fetch('https://67jqdfbede.execute-api.us-east-1.amazonaws.com/APIusuarios/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "user_cod": userCode.toString(),
        }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Error: ${response.status} ${errorMessage}`);
      }

      const rawData = await response.json();
      const data = rawData.body;
      // console.log("Raw Data: ", rawData);
      // console.log(data);

      if (rawData.statusCode == 200) {
        setUserData(data);
        // console.log("User Data: ", userData);
        setError(null);
        // console.log("Get User Code");
        getUserInfo(userCode);
      } else {
        setError('Usuario con el código "{}" no encontrado'.replace('{}', userCode));
        setIsLoading(false);
      }
    } catch (error) {
      setError('Hubo un error al intentar obtener los datos del usuario. Inténtalo de nuevo más tarde.');
      setIsLoading(false);
    }
  };

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

          <p className="point-convertion">316.8 kWh =&nbsp;<strong> 1262 💡</strong></p>
        </fr>
      </div>

      <div className="leaderboard-section">
        <h2>Leaderboard</h2>
        <ul>
          {leaderboard.map((user, index) => (
            <li key={index} className="leaderboard-item">
              <span className="leaderboard-name">
                {user.user_name}
              </span>
              <span className="leaderboard-points">
                {user.user_puntaje} 💡
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="user-search">
        <h2>Buscador</h2>
        
        <div className="input-container">
          <input
            type="text"
            placeholder="Escribe el código del usuario"
            value={userCode}
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
              <h3>{userData.user_name}</h3>
              {Object.keys(userInfo).length > 0 ? (
                <div>
                  {Object.entries(userInfo).map(([piso, tachoData]) => (
                    <div key={piso}>
                      <h4>{piso}</h4>
                      <ul>
                        {Object.entries(tachoData).map(([tacho, peso]) => (
                          <li key={tacho}>
                            {tacho}: {peso}g
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No se encontraron datos para este usuario.</p>
              )}
            </div>
        )}
      </div>
    </div>
  );
};

export default MainBoard;
