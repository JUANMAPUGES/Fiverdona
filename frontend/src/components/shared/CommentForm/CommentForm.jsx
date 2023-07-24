import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import addCommentUtility from "../../../utilities/addCommentUtility";
import Spinner from "../Spinner/Spinner";
import ErrorPopUp from "../error-pop-up/ErrorPopUp";

const CommentForm = ({ token, serviceId }) => {
  const navigate = useNavigate();

  const [text, setText] = useState("");
  const [fileName, setFileName] = useState();
  const [errorPopUp, setErrorPopUp] = useState("");
  const [loading, setLoading] = useState(false);

  // Función que maneja el envío del formulario.
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      setLoading(true);

      await addCommentUtility(text, fileName, serviceId, token);

      // Redireccionamos a la página principal.
      navigate("/"); // Redirecciona a la página principal después de agregar el comentario correctamente.
    } catch (err) {
      setErrorPopUp(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        ¿Qué te ha parecido este servicio? ¿Lo recomendarías? ❤ Deja tu
        comentario ❤.
      </h2>

      <input type="file" onChange={(e) => setFileName(e.target.files[0])} />

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        minLength="10"
        autoFocus
        required
      />

      <button disabled={loading}>Enviar comentario</button>

      {loading && <Spinner />}

      {errorPopUp && (
        <ErrorPopUp open={true} onClose={() => setErrorPopUp(false)} />
      )}
    </form>
  );
};

CommentForm.propTypes = {
  token: PropTypes.string,
  serviceId: PropTypes.number.isRequired, // Aseguramos que serviceId sea requerido y sea de tipo number.
};

export default CommentForm;
