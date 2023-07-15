import useServices from "../../hooks/useServices";
import "./home.css";

const ServiceSearch = () => {
  const { services } = useServices();
  return (
    <main className="serviceSearch">
      <h2> Lista de servicios</h2>
      <ul>
        {services.length > 0 ? (
          services.map((services) => {
            return <li key={services.id}>{services.title}</li>;
          })
        ) : (
          <li>¡No se ha encontrado ningún servicio!</li>
        )}
      </ul>
    </main>
  );
};
export default ServiceSearch;
