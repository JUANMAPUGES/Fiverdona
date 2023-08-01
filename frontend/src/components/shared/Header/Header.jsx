import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import defaultAvatar from '../../../assets/avatar.jpg';
import './header.css';

const Header = () => {
  const { token, authLogout, user } = useAuth();
  /*  const avatarUrl = user.avatar
    ? `http://localhost:8080/${user.avatar}`
    : defaultAvatar; */
  return (
    <header>
      <h1 className='logo'>
        <NavLink to='/'>FIVERDONA</NavLink>
      </h1>

      <nav>
        {/* {user && <img src={avatarUrl} alt={`Avatar de ${user.username}`} />} */}
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
        {user && (
          <>
            <div className='he-profile'>
              <NavLink to={'/profile'}>Perfil</NavLink>
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
