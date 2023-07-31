import { useState, useEffect } from "react";

import registerUtility from "../../../utilities/registerUtility";
import updateUserMailUtility from "./../../../utilities/updateUserMailUtility";
import updateUserAvatarUtility from "./../../../utilities/updateUserAvatarUtility";
import updateUserPasswordUtility from "./../../../utilities/updateUserPasswordUtility";
import useProfile from "../../../hooks/useProfile";
import avatar from "../../../assets/avatar.jpg";
import Spinner from "../../shared/Spinner/Spinner";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../shared/ErrorMessage/ErrorMessage";

const ProfileForm = () => {
  const navigate = useNavigate();
  const { avatar, username, email, password } = useProfile(id);
  const [newUsername, setNewUsername] = useState(username);
  const [newEmail, setNewEmail] = useState(email);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newAvatar, setNewAvatar] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setNewUsername(username);
    setNewEmail(email);
    setNewPassword(password);
  }, [username, email, password]);
  // Función que maneja el envío del formulario.
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (newPassword !== confirmPassword) {
        setErrorMessage("Las contraseñas no coinciden");

        // Llamar a las funciones de actualización del backend
        if (username !== newUsername || email !== newEmail) {
          // Actualizar username y email si han cambiado
          await updateUserMailUtility(newEmail);
        }
        if (newAvatar) {
          await updateUserAvatarUtility(newAvatar);
        }
        if (newPassword) {
          await updateUserPasswordUtility(newPassword);
        }

        return;
      }
      setLoading(true);

      await registerUtility(username, email, password);

      // Redireccionamos a login.
      navigate("/login");
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Mi perfil</h2>

      <div className="avatar-container">
        <label htmlFor="avatar">
          <img src={avatar ? avatar : avatar} alt="avatar" />
        </label>
        <input
          type="file"
          id="avatar"
          onChange={(e) => setNewAvatar(e.target.files[0])}
        />
      </div>

      <label htmlFor="username">Usuario:</label>
      <input
        type="text"
        id="username"
        defaultValue={username}
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        defaultValue={email}
        onChange={(e) => setNewEmail(e.target.value)}
      />
      <label htmlFor="newPassword">Nueva Contraseña:</label>
      <input
        type="password"
        id="newPassword"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
      <input
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button type="submit">Guardar Cambios</button>

      {loading && <Spinner />}

      {errorMessage && <ErrorMessage msg={errorMessage} />}
    </form>
  );
};

export default ProfileForm;
