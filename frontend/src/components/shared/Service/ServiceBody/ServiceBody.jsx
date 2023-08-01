import PropTypes from 'prop-types';

const ServiceBody = ({ service }) => {
  return (
    <>
      <div>
        <p>{service.description}</p>
      </div>
    </>
  );
};

ServiceBody.propTypes = {
  service: PropTypes.object,
};
export default ServiceBody;
