import PropTypes from 'prop-types';

const ServiceBody = ({ text, file}) => {
    return (
        <div>
            <p>{text}</p>
            {file && (
                <input
                    src={`http://localhost:8080/${file}`}
                    alt='Archivo adjunto del servicio'
                />

            )}
        </div>
    );
};

ServiceBody.propTypes = {
    text: PropTypes.string,
    file: PropTypes.string,
};

export default ServiceBody;
