import { connect } from 'react-redux';
import QuestionIndex from './question_index';
import { allQuestions } from '../../reducers/selectors';
import { fetchQuestions, createQuestion } from '../../actions/question_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    questions: allQuestions(state),
    errors: state.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestQuestions: () => dispatch(fetchQuestions()),
    createQuestion: question => dispatch(createQuestion(question)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);
