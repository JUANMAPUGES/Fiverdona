const updateUserUtility = async (formData, config) => {
  const res = await fetch(`http://localhost:8080/users`, {
    method: 'put',
    headers: {
      Authorization: token,
    },
  });

  const body = await res.json();

  if (!res.ok) {
    throw new Error(body.message);
  }
  return body; // Devolvemos el cuerpo de la respuesta (el estado actualizado).
};

export default updateUserUtility;
