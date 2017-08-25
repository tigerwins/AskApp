import { connect } from 'react-redux';
import QuestionDetail from './question_detail';
import {
  fetchQuestion,
  createQuestion,
  updateQuestion,
  deleteQuestion
} from '../../actions/question_actions';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  // debugger
  return {
    currentUser: state.session.currentUser,
    questionId: id,
    question: state.entities.questions[id],
    errors: state.errors,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // const id = ownProps.match.params.id;

  return {
    requestQuestion: (id) => dispatch(fetchQuestion(id)),
    createQuestion: question => dispatch(createQuestion(question)),
    updateQuestion: question => dispatch(updateQuestion(question)),
    deleteQuestion: question => dispatch(deleteQuestion(question)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetail);
