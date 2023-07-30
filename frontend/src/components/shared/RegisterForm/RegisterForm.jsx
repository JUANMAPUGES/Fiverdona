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
  const [passwordV, setPasswordV] = useState('');
  const [errorPopUp, setErrorPopUp] = useState(false);
  const [loading, setLoading] = useState(false);

  // Función que maneja el envío del formulario.
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (password !== passwordV) {
        setErrorPopUp(true)('Las contraseñas no coinciden');
        return;
      }
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
    <main>
      <form className='f-register' onSubmit={handleSubmit}>
        <div className='inputs-register'>
          <input
            className='i-register'
            placeholder='NOMBRE'
            type='text'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            minLength='3'
            autoFocus
            required
          />

          <input
            className='i-register'
            placeholder='EMAIL'
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className='i-register'
            placeholder='CONTRASEÑA'
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength='8'
            maxLength='100'
            required
          />

          <input
            className='i-register'
            placeholder='REPITE CONTRASEÑA'
            type='password'
            id='passwordV'
            value={passwordV}
            onChange={(e) => setPasswordV(e.target.value)}
            minLength='8'
            maxLength='100'
            required
          />
          <button className='b-register'>REGISTRATE</button>
        </div>
        {loading && <Spinner />}

        <ErrorPopUp open={errorPopUp} onClose={() => setErrorPopUp(false)} />
      </form>
    </main>
  );
};

export default RegisterForm;
