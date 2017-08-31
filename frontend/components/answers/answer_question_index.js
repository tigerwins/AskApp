import QuestionIndex from '../questions/question_index';
import { connect } from 'react-redux';
import { unansweredQuestions } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    questions: unansweredQuestions(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, null)(QuestionIndex);
