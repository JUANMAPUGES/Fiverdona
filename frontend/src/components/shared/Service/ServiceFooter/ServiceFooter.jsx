import PropTypes from 'prop-types';
import useAuth from '../../../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import resolvedServiceUtility from './../../../../utilities/resolvedServiceUtility'; // Importamos el componente.

const ServiceFooter = ({ serviceId, owner, resolved, fileName }) => {
  const { token } = useAuth();
  const fileDownload = async () => {
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
            <NavLink to={`/services/${serviceId}/comments`}>Comentar</NavLink>
          )}
        </div>

        <input
          type='checkbox'
          onChange={handleResolvedService}
          checked={resolved} // Marcamos el checkbox cuando la tarea está resuelta.
          disabled={resolved} // Bloqueamos el checkbox cuando la tarea está resuelta.
        />

      </>
    </footer>
  );
};

ServiceFooter.propTypes = {
  serviceId: PropTypes.number,
  owner: PropTypes.number,
  resolved: PropTypes.number,
};

export default ServiceFooter;
