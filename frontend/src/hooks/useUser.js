import { useEffect, useState } from 'react';
import { getUser } from '../utilities/index';

const useUser = (id) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadUser = async () => {
      try {
        setLoading(true);
        const data = await getUser(id);

        setUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [id]);

  return { user, error, loading };
};

export default useUser;
