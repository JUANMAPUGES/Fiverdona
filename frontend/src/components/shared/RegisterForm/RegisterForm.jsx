import { useState } from 'react';
import registerUtility from '../../../utilities/registerUtility';
import Spinner from '../../shared/Spinner/Spinner';
import ErrorPopUp from '../error-pop-up/ErrorPopUp';

import './registerForm.css';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorPopUp, setErrorPopUp] = useState(false);
  const [loading, setLoading] = useState(false);

  // Función que maneja el envío del formulario.
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      setLoading(true);

      await registerUtility(username, email, password);

      // Redireccionamos a login.
      navigate('/login');
    } catch (err) {
      setErrorPopUp(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro</h2>

      <label htmlFor='username'>Usuario:</label>
      <input
        type='text'
        id='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        minLength='3'
        autoFocus
        required
      />
      <label htmlFor='email'>Email:</label>
      <input
        type='email'
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor='password'>Contraseña:</label>
      <input
        type='password'
        id='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        minLength='8'
        maxLength='100'
        required
      />
      <button>Registrarse</button>

      {loading && <Spinner />}

      <ErrorPopUp open={errorPopUp} onClose={() => setErrorPopUp(false)} />
    </form>
  );
};

export default RegisterForm;
