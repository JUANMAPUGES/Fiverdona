import { useState } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../../shared/Spinner/Spinner';

import ErrorMessage from '../../shared/ErrorMessage/ErrorMessage';
import './registerForm.css';
import { useNavigate } from 'react-router-dom';

const RegisterForm = ({ authRegister }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordV, setPasswordV] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  // Función que maneja el envío del formulario.
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (password !== passwordV) {
        alert('Las contraseñas no coinciden');
        return;
      }
      setLoading(true);

      await authRegister(username, email, password);

      // Redireccionamos a login.
      navigate('/login');
    } catch (err) {
      setErrorMessage(err.message);
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
      <label htmlFor='password'>Repetir contraseña:</label>
      <input
        type='password'
        id='passwordV'
        value={passwordV}
        onChange={(e) => setPasswordV(e.target.value)}
        minLength='8'
        maxLength='100'
        required
      />
      <button>Registrarse</button>

      {loading && <Spinner />}
    </form>
  );
};

RegisterForm.PropTypes = { authRegister: PropTypes.func.isRequired };

export default RegisterForm;
