import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Header from './header';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
