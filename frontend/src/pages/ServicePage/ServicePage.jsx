import useService from "../../hooks/useService";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import ErrorPopUp from "../../components/shared/error-pop-up/ErrorPopUp";

import Service from "../../components/shared/Service/Service";
import Spinner from "../../components/shared/Spinner/Spinner";

import "./ServicePage.css";

const ServicePage = () => {
  const { token } = useAuth();
  //const { id } = useParams();
  const { service, serviceId, errorPopUp, setErrorPopUp, loading } =
    useService();
  // Si la persona NO está logeada la redirigimos a la página principal.
  if (!token) return <Navigate to="/" />;
  {
    loading && <Spinner />;
  }
  {
    errorPopUp && (
      <ErrorPopUp open={errorPopUp} onClose={() => setErrorPopUp(false)} />
    );
  }
  return (
    <section>
      <h1>Servicio</h1>

      <Service key={serviceId} service={service} loading={loading} />
    </section>
  );
};

export default ServicePage;
