import PropTypes from 'prop-types';

const ServiceHeader = ({ username, createdAt, title }) => {
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
            <p>{title}</p>
        </header>
    );
};

ServiceHeader.propTypes = {
    username: PropTypes.string,
    createdAt: PropTypes.string,
    title: PropTypes.string,
};

export default ServiceHeader;
