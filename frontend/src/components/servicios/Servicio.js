import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

export const Servicio = ({ servicio }) => {
  const navigate = useNavigate();
  const { token, user } = useContext(AuthContext);
  const [error, setError] = useState('');

  return (
    <article className='servicio'>
      <p>{servicio.text}</p>
      {servicio.image ? (
        <img
          src={`${process.env.REACT_APP_BACKEND}/uploads/${servicio.image}`}
          alt={servicio.text}
        />
      ) : null}
      <p>
        By <Link to={`/user/${servicio.user_id}`}>{servicio.email}</Link> on{' '}
        <Link to={`/servicio/${servicio.id}`}>
          {new Date(servicio.created_at).toLocaleString()}
        </Link>
      </p>
    </article>
  );
};
