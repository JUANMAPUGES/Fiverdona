import PropTypes from 'prop-types';

const ServiceBody = ({ description, file}) => {
    return (
        <div>
            <p>{description}</p>
            {file && (
                <input
                    src={`http://localhost:8080/${fileName}`}
                    alt='Archivo adjunto del servicio'
                />

            )}
        </div>
    );
};

ServiceBody.propTypes = {
    description: PropTypes.string,
    fileName: PropTypes.string,
};

export default ServiceBody;
