import useServices from '../../hooks/useServices';
import ErrorPopUp from '../../components/shared/error-pop-up/ErrorPopUp';
import SearchForm from '../../components/shared/SearchForm/SearchForm';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Service from '../../components/shared/Service/Service';
import Spinner from '../../components/shared/Spinner/Spinner';

import './home.css';

const ServiceSearch = () => {
  const {
    services,
    changeStateService,
    searchParams,
    setSearchParams,
    errorPopUp,
    setErrorPopUp,
    loading,
  } = useServices();
  const { token } = useAuth();

  return (
    <main className='serviceSearch'>
      <h2> Lista de servicios</h2>
      <article>
        {!token && (
          <>
            <SearchForm
              searchParams={searchParams}
              setSearchParams={setSearchParams}
              loading={loading}
            />

            {loading && <Spinner />}
            {errorPopUp && (
              <ErrorPopUp
                open={errorPopUp}
                onClose={() => setErrorPopUp(false)}
              />
            )}

            <ul className='serviceList'>
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
            {errorPopUp && (
              <ErrorPopUp
                open={errorPopUp}
                onClose={() => setErrorPopUp(false)}
              />
            )}

            <ul className='serviceList'>
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
              <div className='button'>
                <NavLink to='/services'>Añadir un servicio</NavLink>
              </div>
            </nav>
          </>
        )}
      </article>
    </main>
  );
};
export default ServiceSearch;
