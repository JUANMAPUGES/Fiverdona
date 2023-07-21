import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useService = () => {
  const { token } = useAuth();
  const [service, setService] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [serviceId] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchService = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:8080/services?${serviceId}`, {
          headers: token ? { Authorization: token } : {},
        });
        const body = await res.json();

        if (!res.ok) {
          throw new Error(body.message);
        }

        setService(body.data.services);
      } catch (err) {
        setErrMsg(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [serviceId, token]);

  return {
    service,
    serviceId,
    errMsg,
    loading,
  };
};
export default useService;
