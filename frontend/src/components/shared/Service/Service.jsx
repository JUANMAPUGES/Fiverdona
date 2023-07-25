import PropTypes from 'prop-types';
import ServiceHeader from './ServiceHeader/ServiceHeader';
import ServiceBody from './ServiceBody/ServiceBody';
import ServiceFooter from './ServiceFooter/ServiceFooter';
import { Link } from 'react-router-dom';

import './service.css';

const Service = ({ service }) => {
  return (
    <Link to={`/services/service/${service.id}`}>
      <li className='service-button'>
        <ServiceHeader
          username={service.username}
          createdAt={service.createdAt}
          title={service.title}
        />
        <ServiceBody
          description={service.description}
          fileName={service.fileName}
        />
        <ServiceFooter
          serviceId={service.id}
          owner={service.owner}
          resolved={service.resolved}
        />
      </li>
    </Link>
  );
};

Service.propTypes = {
  service: PropTypes.object,
};

export default Service;
