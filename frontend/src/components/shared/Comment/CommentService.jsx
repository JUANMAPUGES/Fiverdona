import PropTypes from "prop-types";

const CommentService = ({ username, createdAt, text, fileName }) => {
  return (
    <div>
      <header>
        <p>@{username}</p>
        <time>
          {new Date(createdAt).toLocaleDateString("es-ES", {
            hour: "2-digit",
            minute: "2-digit",
            day: "2-digit",
            month: "2-digit",
            year: "2-digit",
          })}
        </time>
      </header>
      <body>
        <p>{text}</p>
        {fileName && <a href={`http://localhost:8080/${fileName}`}></a>}
      </body>
    </div>
  );
};

CommentService.propTypes = {
  username: PropTypes.string,
  createdAt: PropTypes.string,
  text: PropTypes.string,
  fileName: PropTypes.string,
};

export default CommentService;
