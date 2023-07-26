import PropTypes from 'prop-types';
import CommentService from '../../Comment/CommentService';

const ServiceBody = ({ service }) => {
  return (
    <>
      <div>
        <p>{service.description}</p>
      </div>
      <ul className='commentList'>
        {service.comments?.length > 0 ? (
          service.comments.map((comment) => {
            return (
              <CommentService
                key={comment.id}
                username={comment.username}
                comment={comment}
                createdAt={comment.createdAt}
                text={comment.text}
                filename={comment.fileName}
              />
            );
          })
        ) : (
          <li>¡De momento no hay comentarios asociados a este servicio!</li>
        )}
      </ul>
    </>
  );
};

ServiceBody.propTypes = {
  comment: PropTypes.string,
  service: PropTypes.string,
};
export default ServiceBody;
