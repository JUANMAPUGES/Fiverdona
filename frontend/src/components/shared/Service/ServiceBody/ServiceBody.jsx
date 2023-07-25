import PropTypes from "prop-types";

const ServiceBody = ({ description, fileName }) => {
  return (
    <div>
      <p>{description}</p>
      {fileName && <a href={`http://localhost:8080/${fileName}`}></a>}
    </div>
  );
};

ServiceBody.propTypes = {
  description: PropTypes.string,
  fileName: PropTypes.string,
};

export default ServiceBody;
