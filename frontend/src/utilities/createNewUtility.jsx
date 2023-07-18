const serviceCreateUtility = async (title, description, file, text, token) => {
  // Si queremos enviar un body en formato "form-data" es necesario crear un objeto de este
  // mismo tipo y "pushear" en él los elementos que queremos enviar.
  const formData = new FormData();

  // Pusheamos las propiedades con "append".

  formData.append('title', title);
  formData.append('description', description);

  // Si existe imagen la agregamos.
  if (file) formData.append('file', file);

  const res = await fetch('http://localhost:8080/services', {
    method: 'post',
    headers: {
      Authorization: token,
    },
    body: formData,
  });

  const body = await res.json();

  if (!res.ok) {
    throw new Error(body.message);
  }
};

export default serviceCreateUtility;
