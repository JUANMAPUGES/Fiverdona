import PropTypes from 'prop-types';
import ServiceHeader from './ServiceHeader/ServiceHeader';
import ServiceBody from './ServiceBody/ServiceBody';

import './service1.css';

const Service1 = ({ service }) => {
  return (
    <li className='service-button-1'>
      <ServiceHeader
        username={service.username}
        createdAt={service.createdAt}
        title={service.title}
      />
      <ServiceBody service={service} />
    </li>
  );
};

Service1.propTypes = {
  service: PropTypes.object,
};

export default Service1;
