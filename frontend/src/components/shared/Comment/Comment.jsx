import PropTypes from "prop-types";

import CommentHeader from "./CommentHeader/CommentHeader";
import CommentBody from "./CommentBody/CommentBody";

import "./Comment.css";

const Comment = ({ comment }) => {
  return (
    <li className="Comment">
      <CommentHeader
        username={comment.username}
        createdAt={comment.createdAt}
      />
      <CommentBody text={comment.text} fileName={comment.fileName} />
    </li>
  );
};

Comment.propTypes = {
  comment: PropTypes.object,

  loading: PropTypes.bool,
};

export default Comment;
