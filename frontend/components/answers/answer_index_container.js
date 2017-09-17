import { connect } from 'react-redux';
import AnswerIndex from './answer_index';

const mapStateToProps = (state) => {
  return {
    answers: state.entities.answers,
    users: state.entities.users,
  };
};

export default connect(mapStateToProps, null)(AnswerIndex);
