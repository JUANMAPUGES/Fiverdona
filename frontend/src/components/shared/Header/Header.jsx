import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

import "./Header.css";

const Header = () => {
  const { token, authLogout, user } = useAuth();

  return (
    <header>
      <h1 className="logo">
        <NavLink to="/">FIVERDONA</NavLink>
      </h1>
      <nav>
        {user && <p>@{user.username}</p>}
        {!token && (
          <>
            <div className="button">
              <NavLink to="/login">Login</NavLink>
            </div>
            <div className="button">
              <NavLink to="/register">Registro</NavLink>
            </div>
          </>
        )}
        {user && (
          <>
            <div className="button">
              <NavLink to={`/users/user/${user.id}`}>Perfil</NavLink>
            </div>
            <div className="button" onClick={() => authLogout()}>
              <NavLink to="/">Cerrar Sesión</NavLink>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
