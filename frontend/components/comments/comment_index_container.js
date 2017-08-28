import { connect } from 'react-redux';
import CommentIndex from './comment_index';

const mapStateToProps = (state, { answerId }) => {
  let comments = {};
  state.entities.answers[answerId].commentIds.forEach(id => {
    comments[id] = state.entities.comments[id];
  });

  return {
    comments: state.entities.comments,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
