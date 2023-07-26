import { useEffect, useState } from 'react';
const useComments = () => {
  const [comments, setComments] = useState([]);
  const [errMsg, setErrMsg] = useState('');
  const [serviceId] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `http://localhost:8080/services/${serviceId}/comments`
        );
        const body = await res.json();
        if (!res.ok) {
          throw new Error(body.message);
        }
        setComments(body.data.services);
      } catch (err) {
        setErrMsg(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchComments();
  }, [serviceId]);
  return { comments, serviceId, errMsg, loading };
};
export default useComments;
