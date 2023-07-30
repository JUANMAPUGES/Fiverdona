import PropTypes from 'prop-types';
import ServiceHeader from './ServiceHeader/ServiceHeader';
import ServiceBody from './ServiceBody/ServiceBody';

import './service.css';

const Service = ({ service }) => {
  return (
    <li className='service-button'>
      <ServiceHeader
        username={service.username}
        createdAt={service.createdAt}
        title={service.title}
      />
      <ServiceBody service={service} />
    </li>
  );
};

Service.propTypes = {
  service: PropTypes.object,
};

export default Service;
