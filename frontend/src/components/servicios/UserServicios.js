import useServicios from '../../hooks/useServicios';
import { ErrorMessage } from './ErrorMessage';
import { ServicioList } from './ServicioList';

export const UserServicios = ({ id }) => {
  const { servicios, loading, error } = useServicios(id);

  if (loading) return <p>Cargando servicios...</p>;
  if (error) return <ErrorMessage message={error} />;

  return <ServicioList servicios={servicios} />;
};
