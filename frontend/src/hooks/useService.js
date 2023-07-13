import { useEffect, useState } from 'react';
import { getService } from '../utilities/index';

const useService = (id) => {
  const [service, setservice] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadservice = async () => {
      try {
        setLoading(true);
        const data = await getService(id);

        setservice(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadservice();
  }, [id]);

  return { service: service, error, loading };
};

export default useService;
