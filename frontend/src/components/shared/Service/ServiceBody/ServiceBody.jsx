import PropTypes from 'prop-types';
import React from 'react';

const ServiceBody = ({ description }) => {
  /* const fileDownload = async () => {
    const fileUrl = `http://localhost:8080/${fileName}`;

    //obtenemos el archivo con fetch
    const res = await fetch(fileUrl);
    const blob = await res.blob();

    //creamos un objeto URL para el blob
    const url = window.URL.createObjectURL(blob);

    //creamos un enlace temporal
    const link = document.createElement('a');
    link.href = url;

    // asignamos un nombre al enlace de descarga anterior
    link.download = fileName;

    //simulamos un click en el enlace para iniciar la descarga
    document.body.append(link);
    link.click();

    //eliminamos el enlace temporal
    link.remove();
    window.URL.revokeObjectURL(url);
  }; */

  return (
    <div>
      <p>{description}</p>
    </div>
  );
};

ServiceBody.propTypes = {
  description: PropTypes.string,
  fileName: PropTypes.string,
};

export default ServiceBody;
