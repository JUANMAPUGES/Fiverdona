const getServiceUtility = async (serviceId, token) => {
  const res = await fetch(`http://localhost:8080/services/${serviceId} `, {
    headers: {
      Authorization: token,
    },
  });

  const json = await res.json();

  if (!res.ok) {
    throw new Error("Error al obtener los datos del servicio y comentarios.");
  }

  return { service: json.data.service, comments: json.data.comments };
};

export default getServiceUtility;
