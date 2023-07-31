import PropTypes from "prop-types";
import defaultAvatar from "../../assets/avatar.jpg";
import { useState } from "react";
import "./profile.css";
const Profile = ({
  user,
  authUpdateAvatar,
  authUpdateUsernameEmail,
  authUpdatePassword,
}) => {
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [repeatedNewPass, setRepeatedNewPass] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  // Establecemos el avatar del usuario.
  const avatarUrl = user.avatar
    ? `http://localhost:8080/${user.avatar}`
    : defaultAvatar;

  // Función que permite editar el avatar.
  const handleUpdateAvatar = async (e) => {
    try {
      await authUpdateAvatar(e.target.files[0]);

      // Mostrar un mensaje de éxito o redirigir a otra página
      alert("Perfil actualizado exitosamente");
    } catch (err) {
      console.error(err);
      setErrorMessage(err.message);
    }
  };

  // Función que permite editar el nombre de usuario y email.
  const handleUpdateUsernameEmail = async (e) => {
    e.preventDefault();

    try {
      await authUpdateUsernameEmail(username, email);

      // Mostrar un mensaje de éxito o redirigir a otra página
      alert("Perfil actualizado exitosamente");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  // Función que permite editar la contraseña.
  const handleUpdatePassword = async (e) => {
    e.preventDefault();

    try {
      // Si la contraseña nueva no es correcta lanzamos un error.
      if (newPass !== repeatedNewPass) {
        alert("¡La contraseña nueva no coincide!");
        throw new Error("¡La contraseña nueva no coincide!");
      }

      await authUpdatePassword(currentPass, newPass);

      // Mostrar un mensaje de éxito o redirigir a otra página
      alert("Perfil actualizado exitosamente");
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setCurrentPass("");
      setNewPass("");
      setRepeatedNewPass("");
    }
  };

  return (
    <main>
      <div className="avatar-container">
        <img src={avatarUrl} alt={`Avatar de ${user.username}`} />

        <input type="file" onChange={handleUpdateAvatar} />
      </div>
      <form onSubmit={handleUpdateUsernameEmail}>
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          defaultValue={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          defaultValue={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Guardar Cambios</button>
      </form>

      <form onSubmit={handleUpdatePassword}>
        <label htmlFor="pass">Password:</label>
        <input
          type="password"
          id="pass"
          value={currentPass}
          onChange={(e) => setCurrentPass(e.target.value)}
        />
        <label htmlFor="newPass">New Password:</label>
        <input
          type="password"
          id="newPass"
          value={newPass}
          onChange={(e) => setNewPass(e.target.value)}
        />
        <label htmlFor="repeatedNewPass">Repeat New Password:</label>
        <input
          type="password"
          id="repeatedNewPass"
          value={repeatedNewPass}
          onChange={(e) => setRepeatedNewPass(e.target.value)}
        />

        <button type="submit">Guardar Cambios</button>
      </form>
    </main>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  }),
  authUpdateAvatar: PropTypes.func,
  authUpdateUsernameEmail: PropTypes.func,
  authUpdatePassword: PropTypes.func,
};

export default Profile;
