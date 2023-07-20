import PropTypes from "prop-types";
import ServiceHeader from "./ServiceHeader/ServiceHeader";
import ServiceBody from "./ServiceBody/ServiceBody";
import ServiceFooter from "./ServiceFooter/ServiceFooter";

import "./service.css";

const Service = ({ service, resolvedService, loading }) => {
  return (
    <li className="service">
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
        resolved={service.resolved}
        serviceId={service.id}
        owner={service.owner}
        resolvedService={resolvedService}
        loading={loading}
      />
    </li>
  );
};

Service.propTypes = {
  service: PropTypes.object,
  toogleLike: PropTypes.func,
  resolvedService: PropTypes.func,
  loading: PropTypes.bool,
};

export default Service;
