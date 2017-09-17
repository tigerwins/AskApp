import { connect } from 'react-redux';
import QuestionIndexItem from './question_index_item';
import { allAnswers } from '../../reducers/selectors';

const mapStateToProps = (state, { question }) => {
  const answers = allAnswers(state, question.id);
  return {
    currentUser: state.session.currentUser,
    answer: answers[answers.length - 1],
  };
};

export default connect(mapStateToProps, null)(QuestionIndexItem);
