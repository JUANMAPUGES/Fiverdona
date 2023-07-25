import { useEffect, useState } from "react";
import getServiceUtility from "../utilities/getServiceUtility";

const useService = (id) => {
  const [service, setService] = useState(null);
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const loadService = async () => {
      try {
        setLoading(true);
        const data = await getServiceUtility(id);
        setService(data);
        setComments(data.comments);
      } catch (error) {
        setErrMsg(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadService();
  }, [id]);

  return { comments, service, errMsg, loading };
};

export default useService;
