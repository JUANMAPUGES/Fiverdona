const getServiceUtility = async (serviceId, token) => {
  const res = await fetch(`http://localhost:8080/services/${serviceId} `, {
    headers: {
      Authorization: token,
    },
  });

  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export default getServiceUtility;
