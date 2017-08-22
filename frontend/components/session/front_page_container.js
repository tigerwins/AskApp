import { connect } from 'react-redux';
import FrontPage from './front_page';

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser,
  };
};

export default connect(mapStateToProps, null)(FrontPage);
