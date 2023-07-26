import CommentService from "../../Comment/CommentService";

//import useService from "../../../../hooks/useService";
const ServiceBody = ({ service }) => {
  return (
    <>
      <div>
        <p>{service.description}</p>
        {service.fileName && (
          <a href={`http://localhost:8080/${service.fileName}`}></a>
        )}
      </div>
      <ul className="serviceList">
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
export default ServiceBody;
