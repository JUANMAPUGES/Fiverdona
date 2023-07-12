import { useEffect, useState } from "react";
import { getAllServiciosService, getUserServiciosService } from "../services";

const useServicios = (id) => {
  const [servicios, setServicios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadServicios = async () => {
      try {
        setLoading(true);
        const data = id
          ? await getUserServiciosService(id)
          : await getAllServiciosService();

        setServicios(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadServicios();
  }, [id]);

  const addServicio = (data) => {
    setServicios([data, ...servicios]);
  };
  //****************************** */
  const removeServicio = (id) => {
    setServicios(servicios.filter((tweet) => tweet.id !== id));
  };

  return { servicios: servicios, error, loading, addServicio, removeServicio };
};

export default useServicios;
