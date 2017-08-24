import { connect } from 'react-redux';
import QuestionDetail from './question_detail';
import {
  fetchQuestion,
  createQuestion,
  updateQuestion,
  deleteQuestion
} from '../../actions/question_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    question: state.entities.questions[ownProps.questionId],
    errors: state.errors,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestQuestion: () => dispatch(fetchQuestion(ownProps.questionId)),
    createQuestion: question => dispatch(createQuestion(question)),
    updateQuestion: question => dispatch(updateQuestion(question)),
    deleteQuestion: question => dispatch(deleteQuestion(question)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetail);
