import PropTypes from 'prop-types';
import React from 'react';
const ServiceBody = ({ description, fileName }) => {
  return (
    <div>
      <p>{description}</p>
      <a>{fileName}</a>
      {/* <div key={fileName}>
        {fileName.endsWith('.webp') && (
          <img
            src={`/services/service/service/${fileName}`}
            alt={`Archivo: ${fileName}`}
          />
        )}
        {fileName.endsWith('.jpg') && (
          <img
            src={`/services/service/service/${fileName}`}
            alt={`Archivo: ${fileName}`}
          />
        )}
        {fileName.endsWith('.png') && (
          <img
            src={`/services/service/service/${fileName}`}
            alt={`Archivo: ${fileName}`}
          />
        )}

        {fileName.endsWith('.pdf') && (
          <embed
            src={`/services/service/service/${fileName}`}
            type='application/pdf'
            width='600'
            height='400'
          />
        )}

        {fileName.endsWith('.doc') && (
          <a
            href={`/services/service/service/${fileName}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            Ver archivo de texto
          </a>
        )} 
      </div>*/}
    </div>
  );
};

ServiceBody.propTypes = {
  description: PropTypes.string,
  fileName: PropTypes.string,
};

export default ServiceBody;
