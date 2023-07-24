import { useEffect, useState } from "react";

import { Navigate } from "react-router-dom";
import getServiceUtility from "../../utilities/getServiceUtility";
import Service from "../../components/shared/Service/Service";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import ErrorPopUp from "../../components/shared/error-pop-up/ErrorPopUp";
import Spinner from "../../components/shared/Spinner/Spinner";

const ServicePage = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  const [errorPopUp, setErrorPopUp] = useState("");
  const [loading, setLoading] = useState(true);
  const { token } = useAuth();

  useEffect(() => {
    const loadService = async () => {
      try {
        setLoading(true);
        const data = await getServiceUtility(id);
        setService(data.service);
        setLoading(false);
      } catch (error) {
        setErrorPopUp(error.message);
        setLoading(false);
      }
    };

    loadService();
  }, [id]);

  if (!token) return <Navigate to="/Register" />;
  {
    loading && <Spinner />;
  }
  {
    ErrorPopUp && (
      <ErrorPopUp open={errorPopUp} onClose={() => setErrorPopUp(false)} />
    );
  }
  return <Service service={service} />;
};

export default ServicePage;
