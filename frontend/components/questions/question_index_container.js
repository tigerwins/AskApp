import { connect } from 'react-redux';
import QuestionIndex from './question_index';
import { allQuestions } from '../../reducers/selectors';
import { fetchQuestions } from '../../actions/question_actions';

const mapStateToProps = (state) => {
  return {
    questions: allQuestions(state),
    // errors: state.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestQuestions: () => dispatch(fetchQuestions()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);
