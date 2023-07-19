import useAuth from './useAuth';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
const useServices = () => {
  const { token } = useAuth();
  const [services, setServices] = useState([]);
  const [errMsg, setErrMsg] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `http://localhost:8080/services?${searchParams.toString()}`,
          {
            headers: token ? { Authorization: token } : {},
          }
        );
        const body = await res.json();

        if (!res.ok) {
          throw new Error(body.message);
        }

        setServices(body.data.services);
      } catch (err) {
        setErrMsg(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, [searchParams, token]);
  return { services, searchParams, setSearchParams, errMsg, loading };
};
export default useServices;
