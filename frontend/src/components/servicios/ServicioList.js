import { Servicio } from './Servicio';

export const ServicioList = ({ servicios }) => {
  return servicios.length ? (
    <ul className='servicio-list'>
      {servicios.map((servicio) => {
        return (
          <li key={servicio.id}>
            <Servicio servicio={servicio} />
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No hay servicios...</p>
  );
};
