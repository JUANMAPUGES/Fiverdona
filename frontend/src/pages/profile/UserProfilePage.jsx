import { useState, useEffect } from "react";
import updateUserMailUtility from "./../../utilities/updateUserMailUtility";
import updateUserAvatarUtility from "../../utilities/updateUserAvatarUtility";
import updateUserPasswordUtility from "./../../utilities/updateUserPasswordUtility";
import useProfile from "../../hooks/useProfile";
import Spinner from "./../../components/shared/Spinner/Spinner";
import ErrorMessage from "../../components/shared/ErrorMessage/ErrorMessage";
import "./userProfilePage.css";

const UserProfilePage = () => {
  const { /* avatar */ username, email, loading } = useProfile();
  const [newUsername, setNewUsername] = useState(username);
  const [newEmail, setNewEmail] = useState(email);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newAvatar, setNewAvatar] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setNewUsername(username);
    setNewEmail(email);
  }, [username, email]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      // Validar que las contraseñas coincidan
      if (newPassword !== confirmPassword) {
        throw new Error("Las contraseñas no coinciden");
      }

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

      // Mostrar un mensaje de éxito o redirigir a otra página
      alert("Perfil actualizado exitosamente");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <h2>Mi perfil</h2>
      <form onSubmit={handleUpdateProfile}>
        <label htmlFor="avatar">Avatar:</label>
        <input
          type="file"
          id="avatar"
          onChange={(e) => setNewAvatar(e.target.files[0])}
        />

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
      </form>
      {loading && <Spinner />}
      {errorMessage && <ErrorMessage msg={errorMessage} />}
    </div>
  );
};

export default UserProfilePage;
