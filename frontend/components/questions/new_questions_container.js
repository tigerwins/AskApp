import { connect } from 'react-redux';
import NewQuestions from './new_questions';
import { fetchQuestions } from '../../actions/question_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    requestQuestions: () => dispatch(fetchQuestions()),
  };
};

export default connect(null, mapDispatchToProps)(NewQuestions);
