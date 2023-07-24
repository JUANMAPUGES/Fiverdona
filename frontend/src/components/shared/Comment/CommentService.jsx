import PropTypes from "prop-types";
//import useAuth from "../../../hooks/useAuth";
import CommentHeader from "./CommentServiceHeader/CommentServiceHeader";
import CommentBody from "./CommentServiceBody/CommentServiceBody";
import Spinner from "../Spinner/Spinner";
import "./Comment.css";

const CommentService = ({ comments, loading }) => {
  //const { token } = useAuth();

  return (
    <ul className="commentsList">
      {loading ? (
        <p>Cargando comentarios...</p>
      ) : comments.length === 0 ? (
        <p>No hay comentarios para este servicio.</p>
      ) : (
        comments.map((comment) => (
          <li className="Comment" key={comment.id}>
            <CommentHeader
              username={comment.username}
              createdAt={comment.createdAt}
            />
            <CommentBody text={comment.text} fileName={comment.fileName} />
          </li>
        ))
      )}
    </ul>
  );
};

CommentService.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
};

export default CommentService;
