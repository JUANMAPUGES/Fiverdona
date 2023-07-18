import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import serviceCreateUtility from '../../../utilities/createNewUtility';
//import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const ServiceCreateForm = ({ token }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fileName, setFileName] = useState();
  const [errMsg, setErrMsg] = useState('');
  const [loading, setLoading] = useState(false);

  // Función que maneja el envío del formulario.
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      setLoading(true);

      await serviceCreateUtility(title, description, fileName, token);

      // Redireccionamos a la página principal.
      navigate('/');
    } catch (err) {
      setErrMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>¿Qué servicio quieres publicar? 🤔</h2>
      <input
        type='text'
        placeholder='Título del servicio'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        minLength='5'
        autoFocus
        required
      />
      <input type='file' onChange={(e) => setFileName(e.target.files[0])} />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        minLength='10'
        required
      />

      <button disabled={loading}>Crear servicio</button>

      {loading && <p>cargando...</p>}

      {errMsg && <ErrorMessage msg={errMsg} />}
    </form>
  );
};

ServiceCreateForm.propTypes = {
  token: PropTypes.string,
};

export default ServiceCreateForm;
