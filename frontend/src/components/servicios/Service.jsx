import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import  AuthContext  from '../../context';

export const Service = ({ service }) => {
  const navigate = useNavigate();
  const { token, user } = useContext(AuthContext);
  const [error, setError] = useState('');

  return (
    <article className='service'>
      <p>{service.text}</p>
      {service.file ? (
        <img
          src={`${process.env.REACT_APP_BACKEND}/uploads/${service.file}`}
          alt={service.text}
        />
      ) : null}
      <p>
        By <Link to={`/user/${service.user_id}`}>{service.email}</Link> on{' '}
        <Link to={`/service/${service.id}`}>
          {new Date(service.created_at).toLocaleString()}
        </Link>
      </p>
    </article>
  );
};
