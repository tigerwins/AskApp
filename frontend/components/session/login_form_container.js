import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = ({ session, errors }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors,
    formType: "login",
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (user) => {
      dispatch(clearErrors());
      dispatch(login(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
