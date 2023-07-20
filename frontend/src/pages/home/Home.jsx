import useServices from "../../hooks/useServices";
import ErrorMessage from "../../components/shared/ErrorMessage/ErrorMessage";
import SearchForm from "../../components/shared/SearchForm/SearchForm";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Service from "../../components/shared/Service/Service";
import Spinner from "../../components/shared/Spinner/Spinner";

import "./home.css";

const ServiceSearch = () => {
  const {
    services,
    changeStateService,
    searchParams,
    setSearchParams,
    errMsg,
    loading,
  } = useServices();
  const { token } = useAuth();

  return (
    <main className="serviceSearch">
      <h2> Lista de servicios</h2>

      {!token && (
        <>
          <SearchForm
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            loading={loading}
          />

          {loading && <Spinner />}
          {errMsg && <ErrorMessage msg={errMsg} />}

          <ul className="serviceList">
            {services.length > 0 ? (
              services.map((service) => {
                return (
                  <Service
                    key={service.id}
                    service={service}
                    resolvedService={changeStateService}
                    loading={loading}
                  />
                );
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
            setSearchParams={setSearchParams}
            loading={loading}
          />

          {loading && <Spinner />}
          {errMsg && <ErrorMessage msg={errMsg} />}

          <ul className="serviceList">
            {services.length > 0 ? (
              services.map((service) => {
                return (
                  <Service
                    key={service.id}
                    service={service}
                    resolvedService={changeStateService}
                    loading={loading}
                  />
                );
              })
            ) : (
              <li>¡No se ha encontrado ningún servicio!</li>
            )}
          </ul>
          <nav>
            <div className="button">
              <NavLink to="/services">Añadir un servicio</NavLink>
            </div>
          </nav>
        </>
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
