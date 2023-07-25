import { useState } from 'react';
import registerUtility from '../../utilities/registerUtility';
import Spinner from '../../../src/components/shared/Spinner/Spinner';
import ErrorPopUp from '../../components/shared/error-pop-up/ErrorPopUp';
import avatarImg from '../../assets/avatar.jpg';
/*import useProfile from './useProfile';*/
import './profile.css';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const errors = useState('');
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
    <>
      <h2 className='h2-profile'>Perfil</h2>
      <main>
        <form className='form-profile' onSubmit={handleSubmit}>
          <div className='avatar-container'>
            <img src={avatarImg ? avatarImg : avatarImg} alt='avatar' />
            <input
              type='file'
              {...registerUtility('avatar', {
                required: true,
              })}
              /* onChange={handleOnChangeAvatar} */
            />
          </div>
          {errors.file?.type === 'required' && (
            <span className='error'>Campo requerido</span>
          )}
          <div className='inputs-container'>
            <label htmlFor='username'>Nuevo usuario:</label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              minLength='3'
              autoFocus
              required
            />
            <button className='button-profile'>Guardar</button>

            <label htmlFor='email'>Nuevo email:</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className='button-profile'>Guardar</button>

            <label htmlFor='password'>Nueva contraseña:</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength='8'
              maxLength='100'
              required
            />
            <button className='button-profile'>Guardar</button>
          </div>
          {loading && <Spinner />}

          <ErrorPopUp open={errorPopUp} onClose={() => setErrorPopUp(false)} />
        </form>
      </main>
    </>
  );
};

export default Profile;
