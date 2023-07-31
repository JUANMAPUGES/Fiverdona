import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import './Header.css';

const Header = () => {
  const { token, logout, user } = useAuth();

  return (
    <header>
      <h1 className='logo'>
        <NavLink to='/'>FIVERDONA</NavLink>
      </h1>

      <nav>
        {user && <p className='p-header'>@{user.username}</p>}
        {!token && (
          <>
            <div className='he-login'>
              <NavLink to='/login'>Login</NavLink>
            </div>
            <div className='he-regis'>
              <NavLink to='/register'>Registro</NavLink>
            </div>
          </>
        )}
        {token && (
          <>
            <div className='he-profile'>
              <NavLink to='/profile'>Inicio</NavLink>
            </div>
            <div className='he-close' onClick={() => logout()}>
              <NavLink to='/'>Cerrar Sesión</NavLink>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
