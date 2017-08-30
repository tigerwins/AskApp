import QuestionIndex from '../questions/question_index';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchQuestionsByTopic } from '../../actions/question_actions';
import { allQuestions } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    questions: allQuestions(state),
    errors: state.errors,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const topicId = ownProps.match.params.id;

  return {
    requestQuestions: () => dispatch(fetchQuestionsByTopic(topicId)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuestionIndex));
