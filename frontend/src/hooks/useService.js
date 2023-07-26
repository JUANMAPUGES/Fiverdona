import { useEffect, useState } from "react";
import getServiceUtility from "../utilities/getServiceUtility";

const useService = (id) => {
  const [service, setService] = useState(null);
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadService = async () => {
      try {
        setLoading(true);
        const serviceData = await getServiceUtility(id);
        setService(serviceData);
      } catch (error) {
        setErrMsg(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadService();
  }, [id]);

  return { service, errMsg, loading };
};

export default useService;
