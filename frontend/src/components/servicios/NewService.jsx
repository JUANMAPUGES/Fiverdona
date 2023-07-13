import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { newService } from '../../utilities/index';

export const NewService = ({ addService }) => {
  const { token } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const data = new FormData(e.target);
      const service = await newService({ data, token });

      addService(service);

      e.target.reset();
      setFile(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <h1>Añade nuevo servicio</h1>
      <form className='new-service' onSubmit={handleForm}>
        <fieldset>
          <label htmlFor='text'>Título</label>
          <input type='text' name='text' id='text' required />
        </fieldset>
        <fieldset>
          <input
            type='file'
            name='service'
            id='service'
            onChange={(e) => setFile(e.target.files[0])}
          />
        </fieldset>
        <fielset>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            minLength='10'
            autoFocus
            required
          />
        </fielset>
        <button>Añade el servicio</button>
        {error ? <p>{error}</p> : null}
        {loading ? <p>subiendo servicio...</p> : null}
      </form>
    </>
  );
};
