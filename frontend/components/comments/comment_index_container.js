import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { deleteComment } from '../../actions/comment_actions';

const mapStateToProps = (state, { answerId }) => {
  let comments = {};
  if (state.entities.answers[answerId]) {
    state.entities.answers[answerId].commentIds.forEach(id => {
      comments[id] = state.entities.comments[id];
    });
  }

  return {
    comments,
    users: state.entities.users,
  };
};

const mapDispatchToProps = (dispatch, { answerId }) => {
  return {
    deleteComment: (comment) => dispatch(deleteComment(comment)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
