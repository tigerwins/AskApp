import { connect } from 'react-redux';
import NewQuestions from './new_questions';
import { unansweredQuestions } from '../../reducers/selectors';
import { fetchQuestions } from '../../actions/question_actions';

const mapStateToProps = (state) => {

};

const mapDispatchToProps = (dispatch) => {
  return {
    requestQuestions: () => dispatch(fetchQuestions()),
  };
};

export default connect(null, mapDispatchToProps)(NewQuestions);
