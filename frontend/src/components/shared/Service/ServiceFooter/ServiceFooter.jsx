import PropTypes from 'prop-types';
import useAuth from '../../../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import resolvedServiceUtility from '../../../../utilities/servicesUtilities/resolvedServiceUtility';
import CommentService from '../../Comment/CommentService';
import './serviceFooter.css';

const ServiceFooter = ({ service, markServiceAsResolved, loading }) => {
  const { token } = useAuth();

  const fileDownload = async () => {
    const fileUrl = `http://localhost:8080/${service.fileName}`;

    //Obtenemos el archivo con fetch.
    const res = await fetch(fileUrl);
    const blob = await res.blob();

    //Creamos un objeto URL para el blob.
    const url = window.URL.createObjectURL(blob);

    //Creamos un enlace temporal.
    const link = document.createElement('a');
    link.href = url;

    //Asignamos un nombre al enlace de descarga anterior.
    link.download = service.fileName;

    //Simulamos un click en el enlace para iniciar la descarga.
    document.body.append(link);
    link.click();

    //Eliminamos el enlace temporal.
    link.remove();
    window.URL.revokeObjectURL(url);
  };

  const handleResolvedService = () => {
    if (token && service.owner === 1) {
      if (service.resolved) {
        // Si la tarea ya está resuelta, no hacemos nada.
        return;
      }

      if (confirm('¿Deseas finalizar el servicio?')) {
        markServiceAsResolved(service.id, token);
        // Bloqueamos el checkbox después de marcar la tarea como resuelta.
      }
    }
  };

  return (
    <div className='div-sf'>
      {service.fileName && (
        <button onClick={fileDownload} disabled={loading}>
          Descargar archivo
        </button>
      )}
      <div className='button'>
        -
        {token && (
          <NavLink to={`/services/${service.id}/comment`}>Comentar</NavLink>
        )}
      </div>

      <input
        type='checkbox'
        onChange={handleResolvedService}
        checked={service.resolved} // Marcamos el checkbox cuando la tarea está resuelta.
        disabled={service.resolved || !service.owner || loading} // Bloqueamos el checkbox cuando la tarea está resuelta o si no somos los dueños.
      />

      <ul className='commentList'>
        {service.comments?.length > 0 ? (
          service.comments.map((comment) => {
            return (
              <CommentService
                key={comment.id}
                username={comment.username}
                comment={comment}
                createdAt={comment.createdAt}
                text={comment.text}
                filename={comment.fileName}
              />
            );
          })
        ) : (
          <li>¡De momento no hay comentarios asociados a este servicio!</li>
        )}
      </ul>
    </div>
  );
};

ServiceFooter.propTypes = {
  service: PropTypes.object,
};

export default ServiceFooter;
