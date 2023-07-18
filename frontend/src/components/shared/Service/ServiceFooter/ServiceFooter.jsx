import PropTypes from 'prop-types';

import useAuth from '../../../../hooks/useAuth';

const ServiceFooter = ({
    serviceId,
    owner,
    resolvedService,
    updateState,
    loading,
}) => {
    const { token } = useAuth();


    // Finalizar un servicio.
   /* const handleResolvedService = async () => {
        try {
            if (confirm('¿Deseas finalizar el servicio?')) {
               
                resolvedService(serviceId);
            }
        } catch (err) {
            alert(err.message);
        }
    };*/
    const changeStateService = async (checked, id) => {
        try {
          const newState = checked ? "done" : "undone";
          await updateState(id, newState);
        } catch (error) {
            alert(err.message);
        }
      };

    return (
        <footer>
            
            {token && owner === 1 && (
                /*<button onClick={() => handleResolvedService()} disabled={loading}>
                    Finalizar
                </button>*/
                <input
                    type="checkbox"
                    onChange={(e) => changeStateService(e.target.checked, item.id)}
                    checked={item.state === "done"}
                />
            )}
        </footer>
    );
};

ServiceFooter.propTypes = {
    serviceId: PropTypes.number,
    owner: PropTypes.any,
    resolvedService: PropTypes.func,
    changeStateService: PropTypes.func,
    loading: PropTypes.bool,
};

export default ServiceFooter;
