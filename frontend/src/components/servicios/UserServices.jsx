import useservices from '../../hooks/useservices';
import { ErrorMessage } from './ErrorMessage';
import { ServicioList } from './ServicioList';

export const Userservices = ({ id }) => {
  const { services, loading, error } = useservices(id);

  if (loading) return <p>Cargando services...</p>;
  if (error) return <ErrorMessage message={error} />;

  return <ServicioList services={services} />;
};
