import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Service() {
  // const [todo, setTodo] = useState();
  const { id } = useParams();

  useEffect(() => {
    // Llamaríamos a nuestro servicio para coger la tarea
    // const response = await getTodo(id);
    // setTodo(response.data.todo)
  }, []);

  return <>{`Servicio con el id ${id}`}</>;
}

export default Service;
