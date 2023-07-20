const resolvedServiceUtility = async (serviceId, token) => {
  const res = await fetch(
    `http://localhost:8080/services/${serviceId}/resolved `,
    {
      method: "post",
      headers: {
        Authorization: token,
      },
    }
  );

  const body = await res.json();

  if (!res.ok) {
    throw new Error(body.message);
  }
};

export default resolvedServiceUtility;
