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
            <div className='button'>
              <NavLink to='/login'>Login</NavLink>
            </div>
            <div className='button'>
              <NavLink to='/register'>Registro</NavLink>
            </div>
          </>
        )}
        {token && (
          <>
            <div className='button'>
              <NavLink to='/profile'>Perfil</NavLink>
            </div>
            <div className='button' onClick={() => logout()}>
              <NavLink to='/'>Cerrar Sesión</NavLink>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
