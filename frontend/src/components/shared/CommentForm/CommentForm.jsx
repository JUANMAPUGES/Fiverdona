/* import useComments from "../../../hooks/useComments"; */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import addCommentUtility from "../../../utilities/addCommentUtility";
import Spinner from "../Spinner/Spinner";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const CommentForm = ({ token, serviceId }) => {
  const navigate = useNavigate();

  const [text, setText] = useState("");
  const [fileName, setFileName] = useState();
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);

  // Función que maneja el envío del formulario.
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      setLoading(true);

      await addCommentUtility(text, fileName, serviceId, token);

      // Redireccionamos a la página principal.
      navigate("/"); //??*****
    } catch (err) {
      setErrMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        ¿Que te ha parecido este servicio?,¿lo recomendarías?. ❤Deja tu
        comentario❤.
      </h2>

      <input type="file" onChange={(e) => setFileName(e.target.files[0])} />

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        minLength="10"
        autoFocus
        required
      />

      <button disabled={loading}>Enviar</button>

      {loading && <Spinner />}

      {errMsg && <ErrorMessage msg={errMsg} />}
    </form>
  );
};

CommentForm.propTypes = {
  token: PropTypes.string,
};

export default CommentForm;
