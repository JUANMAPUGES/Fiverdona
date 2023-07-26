import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useService from '../../hooks/useService';
import Service from '../../components/shared/Service/Service';
import ErrorPopUp from '../../components/shared/error-pop-up/ErrorPopUp';
import Spinner from '../../components/shared/Spinner/Spinner';

const ServicePage = () => {
  const { id } = useParams();
  const { token } = useAuth();
  const { service, errMsg, loading } = useService(id);
  const [errorPopUp, setErrorPopUp] = useState(false); // Agregamos el estado del errorPopUp

  useEffect(() => {
    if (errMsg) {
      console.error('Error loading service:', errMsg);
      setErrorPopUp(true); // Mostramos el ErrorPopUp cuando hay un error
    }
  }, [errMsg]);

  if (!token) return <Navigate to='/Register' />;

  return (
    <section>
      {loading ? (
        <Spinner />
      ) : service ? (
        <Service {...service} />
      ) : (
        <p>No se encontró el servicio.</p>
      )}

      {errorPopUp && (
        <ErrorPopUp open={true} onClose={() => setErrorPopUp(false)} />
      )}
    </section>
  );
};

export default ServicePage;
