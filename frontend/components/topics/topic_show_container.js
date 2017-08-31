import TopicShow from './topic_show';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchQuestionsByTopic } from '../../actions/question_actions';
import { allQuestions } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    topic: state.entities.topics[ownProps.match.params.id],
    questions: allQuestions(state),
    errors: state.errors,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestQuestions: (topicId) => dispatch(fetchQuestionsByTopic(topicId)),
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopicShow));
