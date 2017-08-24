import { connect } from 'react-redux';
import QuestionIndexItem from './question_index_item';
import { allAnswers } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    // answers: allAnswers(state, ownProps.question.id),

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndexItem);
