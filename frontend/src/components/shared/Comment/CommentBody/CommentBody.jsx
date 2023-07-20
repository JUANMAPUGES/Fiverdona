import PropTypes from "prop-types";

const CommentBody = ({ text, fileName }) => {
  return (
    <div>
      <p>{text}</p>
      {fileName && (
        <img
          src={`http://localhost:8080/${fileName}`}
          alt="Archivo adjunto al comentario"
        />
      )}
    </div>
  );
};

CommentBody.propTypes = {
  text: PropTypes.string,
  fileName: PropTypes.string,
};

export default CommentBody;
