import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import QuestionDetail from './question_detail';
import {
  fetchQuestions,
  fetchQuestion,
  createQuestion,
  updateQuestion,
  deleteQuestion
} from '../../actions/question_actions';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const { questions, users } = state.entities;
  let asker;
  if (questions[id]) {
    asker = users[questions[id].asker_id];
  }

  return {
    currentUser: state.session.currentUser,
    questionId: id,
    question: questions[id],
    asker,
    errors: state.errors,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestQuestions: () => dispatch(fetchQuestions()),
    requestQuestion: (id) => dispatch(fetchQuestion(id)),
    createQuestion: question => dispatch(createQuestion(question)),
    updateQuestion: question => dispatch(updateQuestion(question)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuestionDetail));
