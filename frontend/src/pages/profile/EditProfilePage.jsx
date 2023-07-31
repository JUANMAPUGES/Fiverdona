import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProfile from "../../hooks/useProfile";
import Spinner from "./../../components/shared/Spinner/Spinner";
import ErrorMessage from "../../components/shared/ErrorMessage/ErrorMessage";
import "./editProfilePage.css";
import updateUserMailUtility from "../../utilities/updateUserMailUtility";
import updateUserAvatarUtility from "../../utilities/updateUserAvatarUtility";
import updateUserPasswordUtility from "../../utilities/updateUserPasswordUtility";
const EditProfilePage = () => {
  const { id } = useParams();
  const { user, loading, errMsg } = useProfile(id);

  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newAvatar, setNewAvatar] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const onUpdate = async (username, email, avatar, password) => {
    try {
      // Validar que las contraseñas coincidan
      if (password !== confirmPassword) {
        throw new Error("Las contraseñas no coinciden");
      }

      // Llamar a las funciones de actualización del backend

      if (username !== user.username || email !== user.email) {
        // Actualizar username y email si han cambiado
        await updateUserMailUtility(email, username);
      }

      if (avatar) {
        // Actualizar el avatar si se seleccionó uno nuevo
        await updateUserAvatarUtility(avatar);
      }

      if (password) {
        // Actualizar la contraseña si se proporcionó una nueva
        await updateUserPasswordUtility(password);
      }

      // Mostrar un mensaje de éxito o redirigir a otra página
      alert("Perfil actualizado exitosamente");
    } catch (error) {
      setErrorMessage("Error al actualizar el perfil: " + error.message);
    }
  };

  useEffect(() => {
    if (user) {
      setNewUsername(user.username);
      setNewEmail(user.email);
    }
  }, [user]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      // Llamar a la función onUpdate para actualizar el perfil
      onUpdate(newUsername, newEmail, newAvatar, newPassword);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  if (errMsg) {
    return <ErrorMessage msg={errMsg} />;
  }

  if (!user) {
    return <ErrorMessage msg="Usuario no encontrado" />;
  }

  const { avatar } = user;

  return (
    <main className="editProfilePage">
      <h2>Editar Perfil</h2>
      <form onSubmit={handleUpdateProfile}>
        <div className="avatar-container">
          <img
            src={newAvatar ? URL.createObjectURL(newAvatar) : avatar}
            alt="avatar"
          />
          <label htmlFor="avatar">Avatar:</label>
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
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={newEmail}
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
      {errorMessage && <ErrorMessage msg={errorMessage} />}
    </main>
  );
};

export default EditProfilePage;
