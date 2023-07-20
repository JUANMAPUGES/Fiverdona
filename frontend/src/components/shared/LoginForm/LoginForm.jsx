import { useState } from "react";
import PropTypes from "prop-types";
import loginUtility from "../../../utilities/loginUtility";
import Spinner from "../../shared/Spinner/Spinner";
import ErrorPopUp from "../error-pop-up/ErrorPopUp";

import "./loginForm.css";

const LoginForm = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorPopUp, setErrorPopUp] = useState(false);

  // Función que maneja el envío del formulario.
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      setLoading(true);

      const token = await loginUtility(email, password);

      // Guardamos el token en el localStorage.
      login(token);
    } catch (err) {
      setErrorPopUp(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="password">Contraseña:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        minLength="8"
        maxLength="100"
        required
      />
      <button>Iniciar Sesión</button>
      {loading && <Spinner />}
      <ErrorPopUp open={errorPopUp} onClose={() => setErrorPopUp(false)} />
    </form>
  );
};

LoginForm.propTypes = {
  login: PropTypes.func,
};

export default LoginForm;
