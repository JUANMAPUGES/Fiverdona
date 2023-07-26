import useServices from "../../hooks/useServices";
import ErrorPopUp from "../../components/shared/error-pop-up/ErrorPopUp";
import SearchForm from "../../components/shared/SearchForm/SearchForm";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Service from "../../components/shared/Service/Service";
import Spinner from "../../components/shared/Spinner/Spinner";

import "./home.css";

const ServiceSearch = () => {
  const {
    services,
    resolved,
    searchParams,
    setSearchParams,
    errorPopUp,
    setErrorPopUp,
    loading,
  } = useServices();
  const { token } = useAuth();

  return (
    <main className="serviceSearch">
      <h2> Lista de servicios</h2>

      <SearchForm
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        loading={loading}
      />

      {loading && <Spinner />}
      {errorPopUp && (
        <ErrorPopUp open={errorPopUp} onClose={() => setErrorPopUp(false)} />
      )}
      <ul className="serviceList">
        {services && services.length > 0 ? (
          services.map((service) => {
            return (
              <Service
                key={service.id}
                service={service}
                resolved={resolved}
                loading={loading}
              />
            );
          })
        ) : (
          <li>¡No se ha encontrado ningún servicio!</li>
        )}
      </ul>
      {token && (
        <nav>
          <div className="button">
            <NavLink to="/services">Añadir un servicio</NavLink>
          </div>
        </nav>
      )}
    </main>
  );
};
export default ServiceSearch;

/* import useServices from "../../hooks/useServices";
import SearchForm from "../../components/shared/SearchForm/SearchForm";
import "./home.css";

const ServiceSearch = () => {
  const { services, searchParams, setSearchParams } = useServices();
  return (
    <main className="serviceSearch">
      <h2> Lista de servicios</h2>
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
    </main>
  );
};
export default ServiceSearch; */
