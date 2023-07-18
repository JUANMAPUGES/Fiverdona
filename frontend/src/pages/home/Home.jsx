import { NavLink } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import SearchForm from '../../components/shared/SearchForm/SearchForm';
import './home.css';

const ServiceSearch = () => {
  const { token, services, searchParams, setSearchParams } = useServices();
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
          <div className='button'>
            <NavLink to='/profile'>Añadir un servicio</NavLink>
            ******** CAMBIAR RUTA ********
          </div>
        </>
      )}
    </main>
  );
};
export default ServiceSearch;
