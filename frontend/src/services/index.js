export const getAllService = async () => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getSingleService = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/service/${id}`
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const sendService = async ({ data, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}`, {
    method: 'POST',
    body: data,
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const registerUser = async ({ email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user`, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const getMyDataService = async (token) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user`, {
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getUserDataService = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user/${id}`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getUserService = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/user/${id}/service`
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const logInUser = async ({ email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/login`, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};
