/* import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function useProfile() {
  const [passwordError, setPasswordError] = useState(false);
  const [errorPopUp, setErrorPopUp] = useState(false);
  const [avatarImg, setAvatarImg] = useState();
  const { registerUserAvatar } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (data.password !== data['repeat-password']) {
      // IMPORTANTE: Hacemos return porque sino se ejecutaría el siguiente código
      return setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    // Creamos un objeto de formData vacío
    const formData = new FormData();
    // Añadimos uno a uno los campos que necesitamos en backend
    formData.append('file', data.file[0]);
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);

    // Agregamos el header para enviar form-data
    const config = {
      header: {
        'Content-Type': 'multipart/form-data',
      },
    };

    try {
      // Llamamos el servicio del signup con los parámetros esperados
      await registerUserAvatar(formData, config);
      // Navegamos al dashboard
      navigate('/');
    } catch (error) {
      setErrorPopUp(true);
    }
  };
  const handleOnChangeAvatar = (e) => {
    const target = e.target.files[0];
    const url = URL.createObjectURL(target);
    setAvatarImg(url);
  };

  return {
    state: { register, errors, passwordError, errorPopUp, avatarImg },
    actions: { handleSubmit, onSubmit, setErrorPopUp, handleOnChangeAvatar },
  };
}

export default useProfile;
 */
