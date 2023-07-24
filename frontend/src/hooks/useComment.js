import { useEffect, useState } from "react";
import getServiceUtility from "../utilities/getServiceUtility";

const useComments = (serviceId) => {
  const [comments, setComments] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadComments = async () => {
      try {
        setLoading(true);
        const serviceData = await getServiceUtility(serviceId);
        setComments(serviceData.comments);
      } catch (err) {
        setErrMsg(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadComments();
  }, [serviceId]);

  return { comments, errMsg, loading };
};

export default useComments;
