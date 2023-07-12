import { useEffect, useState } from "react";
import { getSingleServicioService } from "../services";

const useServicio = (id) => {
  const [servicio, setServicio] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadServicio = async () => {
      try {
        setLoading(true);
        const data = await getSingleServicioService(id);

        setServicio(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadServicio();
  }, [id]);

  return { servicio: servicio, error, loading };
};

export default useServicio;
