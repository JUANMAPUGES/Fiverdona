
import useServices from "../../hooks/useServices";
import SearchForm from "../../components/shared/SearchForm/SearchForm";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./home.css";

const ServiceSearch = () => {
  const { services, searchParams, setSearchParams } = useServices();
  const { token } = useAuth();

  return (
    <main className='serviceSearch'>
      <h2> Lista de servicios</h2>
      {!token && (
        <>
          <SearchForm
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
          <ul>
            {services.length > 0 ? (
              services.map((services) => {
                return <li key={services.id}>{services.title}</li>;
              })
            ) : (
              <li>¡No se ha encontrado ningún servicio!</li>
            )}
          </ul>
        </>
      )}

      {token && (
        <>

          <SearchForm
            searchParams={searchParams}
            setSearchParams={setSearchParams} />
          <ul>
            {services.length > 0 ? (
              services.map((services) => {
                return <li key={services.id}>{services.title}</li>;
              })
            ) : (
              <li>¡No se ha encontrado ningún servicio!</li>
            )}
          </ul>
          <nav>
            <div className="button">
              <NavLink to="/profile">Añadir un servicio</NavLink>
              ******** CAMBIAR RUTA ********
            </div>

          </nav>
        </>
        

      )}
    </main>
  );
};
export default ServiceSearch;
