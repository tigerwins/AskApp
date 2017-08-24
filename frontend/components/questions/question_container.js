import { connect } from 'react-redux';
import Question from './question';
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

export default connect(mapStateToProps, mapDispatchToProps)(Question);
