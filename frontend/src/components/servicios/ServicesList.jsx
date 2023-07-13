import { Service } from './Service';

export const ServiceList = ({ services }) => {
  return services.length ? (
    <ul className='service-list'>
      {services.map((service) => {
        return (
          <li key={service.id}>
            <Service service={service} />
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No hay servicios...</p>
  );
};
