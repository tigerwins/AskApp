import { connect } from 'react-redux';
import AnswerIndex from './answer_index';

const mapStateToProps = (state) => {
  return {
    answers: state.entities.answers,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};


export default connect(mapStateToProps, mapDispatchToProps)(AnswerIndex);
