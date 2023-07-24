import PropTypes from "prop-types";
import useAuth from "../../../../hooks/useAuth";
import { NavLink } from "react-router-dom";
import resolvedServiceUtility from "./../../../../utilities/resolvedServiceUtility"; // Importamos el componente.

const ServiceFooter = ({ serviceId, owner, resolved }) => {
  const { token } = useAuth();

  const handleResolvedService = async () => {
    try {
      if (resolved) {
        // Si la tarea ya está resuelta, no hacemos nada.
        return;
      }

      if (confirm("¿Deseas finalizar el servicio?")) {
        await resolvedServiceUtility(serviceId, token);
        // Bloqueamos el checkbox después de marcar la tarea como resuelta.
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <footer>
      <>
        <div className="button">
          {token && <NavLink to="/comment">Comentar</NavLink>}
        </div>
        {token && owner === 1 && (
          <input
            type="checkbox"
            onChange={handleResolvedService}
            checked={resolved} // Marcamos el checkbox cuando la tarea está resuelta.
            disabled={resolved} // Bloqueamos el checkbox cuando la tarea está resuelta.
          />
        )}
      </>
    </footer>
  );
};

ServiceFooter.propTypes = {
  serviceId: PropTypes.number,
  owner: PropTypes.any,
  resolved: PropTypes.bool,
};

export default ServiceFooter;
