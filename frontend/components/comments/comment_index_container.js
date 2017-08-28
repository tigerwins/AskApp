import { connect } from 'react-redux';
import CommentIndex from './comment_index';

const mapStateToProps = (state, { answerId }) => {
  let comments = {};
  if (state.entities.answers[answerId]) {
    state.entities.answers[answerId].commentIds.forEach(id => {
      comments[id] = state.entities.comments[id];
    });
  }

  return {
    comments,

  };
};

const mapDispatchToProps = (dispatch, { answerId }) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
