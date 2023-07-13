import { useEffect, useState } from 'react';
import { listServices, getUserService } from '../utilities/index';

const useServices = (id) => {
  const [services, setservices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadservices = async () => {
      try {
        setLoading(true);
        const data = id ? await getUserService(id) : await listServices();

        setservices(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadservices();
  }, [id]);

  const addService = (data) => {
    setservices([data, ...services]);
  };
  //****************************** */
  const removeService = (id) => {
    setservices(services.filter((tweet) => tweet.id !== id));
  };

  return { services: services, error, loading, addService, removeService };
};

export default useServices;
