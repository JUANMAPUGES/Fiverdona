const getCommentServiceUtility = async (serviceId, token) => {
  try {
    const response = await fetch(
      `http://localhost:8080/services/${serviceId}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Error al obtener los datos del servicio y comentarios.");
    }

    const data = await response.json();
    return data.comments;
  } catch (error) {
    console.error("Error loading service:", error.message);
    throw error;
  }
};

export default getCommentServiceUtility;
