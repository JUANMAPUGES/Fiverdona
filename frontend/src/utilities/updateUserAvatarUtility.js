const updateUserAvatarUtility = async (newAvatar, token) => {
  const url = "http://localhost:8080/users/avatar";

  try {
    const formData = new FormData();
    formData.append("avatar", newAvatar);

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: token,
      },
      body: formData,
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message);
    }

    return responseData.message;
  } catch (error) {
    throw new Error("Error al actualizar el avatar: " + error.message);
  }
};

export default updateUserAvatarUtility;
