import PropTypes from 'prop-types';

const ServiceHeader = ({ username, createdAt }) => {
    return (
        <header>
            <p>@{username}</p>
            <time>
                {new Date(createdAt).toLocaleDateString('es-ES', {
                    hour: '2-digit',
                    minute: '2-digit',
                    day: '2-digit',
                    month: '2-digit',
                    year: '2-digit',
                })}
            </time>
        </header>
    );
};

ServiceHeader.propTypes = {
    username: PropTypes.string,
    createdAt: PropTypes.string,
};

export default ServiceHeader;
