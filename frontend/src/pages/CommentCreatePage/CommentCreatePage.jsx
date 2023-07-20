import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import CommentForm from "../../components/shared/CommentForm/CommentForm";

import "./commentCreatePage.css";

const CommentCreatePage = () => {
  const { token } = useAuth();

  // Si la persona NO está logeada la redirigimos a la página principal.
  if (!token) return <Navigate to="/" />;

  return (
    <main className="commentCreate">
      <CommentForm token={token} />
    </main>
  );
};

export default CommentCreatePage;
