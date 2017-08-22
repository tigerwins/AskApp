import { connect } from 'react-redux';
import LoginForm from './login_form';
// import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    formType: "login",
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
// export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);