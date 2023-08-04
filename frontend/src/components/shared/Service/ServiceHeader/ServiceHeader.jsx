import PropTypes from 'prop-types';
import './serviceHeader.css';

const ServiceHeader = ({ username, createdAt, title }) => {
  return (
    <ul className='container-service-header'>
      <li>
        <p className='user-sh'>@{username}</p>
      </li>
      <li>
        <time className='time-sh'>
          {new Date(createdAt).toLocaleDateString('es-ES', {
            hour: '2-digit',
            minute: '2-digit',
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
          })}
        </time>
      </li>
      <li>
        <p className='titulo-sh'>{title}</p>
      </li>
    </ul>
  );
};

ServiceHeader.propTypes = {
  username: PropTypes.string,
  createdAt: PropTypes.string,
  title: PropTypes.string,
};

export default ServiceHeader;
