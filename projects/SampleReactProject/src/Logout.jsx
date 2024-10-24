import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ onLogout }) => {
  const navigate = useNavigate();

  useEffect(() => {
    onLogout();
    navigate('/login'); // Redirige al login
  }, [onLogout, navigate]);

  return null; // No necesita renderizar nada
};

export default Logout;
