import { useEffect, useState } from "react";
/* import { useForm } from "react-hook-form"; */
import useAuth from "../../hooks/useAuth";

function useSignUpAvatar() {
  const { updateProfile, user } = useAuth();
  const [errorPopUp, setErrorPopUp] = useState(false);
  // Variable de estado para previsualizar la foto seleccionada
  const [avatarImg, setAvatarImg] = useState(user?.avatar_url);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useState();

  useEffect(() => {
    setValue("username", user?.username);
    setValue("email", user?.email);
    setValue("password", user?.password);
  }, []);

  const onSubmit = async (data) => {
    // Creamos un objeto de formData vacío
    const formData = new FormData();
    // Añadimos uno a uno los campos que necesitamos en backend
    formData.append("file", data.file[0]);
    formData.append("username", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);

    // Agregamos el header para enviar form-data
    const config = {
      header: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      // Llamamos el servicio del signup con los parámetros esperados
      await updateProfile(formData, config);
    } catch (error) {
      // Mostraremos nuestro pop up genérico de error
      setErrorPopUp(true);
    }
  };

  const handleOnChangeAvatar = (e) => {
    const target = e.target.files[0];
    const url = URL.createObjectURL(target);
    setAvatarImg(url);
  };

  return {
    state: { register, errors, errorPopUp, avatarImg },
    actions: { handleSubmit, onSubmit, setErrorPopUp, handleOnChangeAvatar },
  };
}

export default useSignUpAvatar;
