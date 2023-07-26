import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import CommentForm from "../../components/shared/CommentForm/CommentForm";
import { useParams } from "react-router-dom"; // Importa useParams para obtener el id del servicio desde la URL.

import "./commentCreatePage.css";

const CommentCreatePage = () => {
  const { token } = useAuth();
  const { id } = useParams(); // Obtiene el id del servicio desde la URL.
  console.log(id);
  // Si la persona NO está logueada la redirigimos a la página de Login.
  if (!token) return <Navigate to="/login" />;

  return (
    <main className="commentCreate">
      {/* Pasa el id del servicio como prop al componente CommentForm */}
      <CommentForm token={token} serviceId={Number(id)} />
    </main>
  );
};

export default CommentCreatePage;
