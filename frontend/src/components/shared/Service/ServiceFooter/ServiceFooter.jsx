import PropTypes from 'prop-types';

import useAuth from '../../../../hooks/useAuth';
import { NavLink } from 'react-router-dom';

const ServiceFooter = ({ serviceId, owner, resolvedService, loading }) => {
  const { token } = useAuth();

  // Finalizar un servicio.
  /*const handleResolvedService = async () => {
        try {
            if (confirm('¿Deseas finalizar el servicio?')) {
               
                resolvedService(serviceId);
            }
        } catch (err) {
            alert(err.message);
        }
    };*/
  const handleResolvedService = async () => {
    try {
      if (confirm('¿Deseas finalizar el servicio?')) {
        resolvedService(serviceId);
      }
    } catch (error) {
      alert(err.message);
    }
  };

  return (
    <footer>
      <>
        <div className='button'>
          <NavLink to='/profile'>Comentar</NavLink>
        </div>
        <input
          type='checkbox'
          onChange={(e) =>
            handleResolvedService(e.target.checked, serviceId.id)
          }
          checked={serviceId.resolved === 'true'}
        />
      </>
    </footer>
  );
};

ServiceFooter.propTypes = {
  serviceId: PropTypes.number,
  owner: PropTypes.any,
  resolvedService: PropTypes.bool,
  loading: PropTypes.bool,
};

export default ServiceFooter;
