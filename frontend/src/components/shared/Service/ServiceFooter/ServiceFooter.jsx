import PropTypes from 'prop-types';
import useAuth from '../../../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import resolvedServiceUtility from './../../../../utilities/resolvedServiceUtility'; // Importamos el componente.
import CommentService from '../../Comment/CommentService';

const ServiceFooter = ({ service, serviceId, owner, resolved, fileName }) => {
  const { token } = useAuth();
  const fileDownload = async () => {
    const fileUrl = `http://localhost:8080/${fileName}`;

    //Obtenemos el archivo con fetch.
    const res = await fetch(fileUrl);
    const blob = await res.blob();

    //Creamos un objeto URL para el blob.
    const url = window.URL.createObjectURL(blob);

    //Creamos un enlace temporal.
    const link = document.createElement('a');
    link.href = url;

    //Asignamos un nombre al enlace de descarga anterior.
    link.download = fileName;

    //Simulamos un click en el enlace para iniciar la descarga.
    document.body.append(link);
    link.click();

    //Eliminamos el enlace temporal.
    link.remove();
    window.URL.revokeObjectURL(url);
  };

  const handleResolvedService = async () => {
    try {
      if (token && owner === 1) {
        if (resolved) {
          // Si la tarea ya está resuelta, no hacemos nada.
          return;
        }

        if (confirm('¿Deseas finalizar el servicio?')) {
          await resolvedServiceUtility(serviceId, token);
          // Bloqueamos el checkbox después de marcar la tarea como resuelta.
        }
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <footer>
      <>
        <button onClick={fileDownload}>descargar archivo</button>
        <div className='button'>
          {token && (
            <NavLink to={`/services/${serviceId}/comment`}>Comentar</NavLink>
          )}
        </div>

        <input
          type='checkbox'
          onChange={handleResolvedService}
          checked={resolved} // Marcamos el checkbox cuando la tarea está resuelta.
          disabled={resolved} // Bloqueamos el checkbox cuando la tarea está resuelta.
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
      </>
    </footer>
  );
};

ServiceFooter.propTypes = {
  serviceId: PropTypes.number,
  owner: PropTypes.number,
  resolved: PropTypes.number,
  comment: PropTypes.string,
  service: PropTypes.string,
  fileName: PropTypes.any,
};

export default ServiceFooter;
