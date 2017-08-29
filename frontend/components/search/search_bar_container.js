import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchBar from './search_bar';

const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));
