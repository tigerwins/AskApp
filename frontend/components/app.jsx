import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import HeaderContainer from './content/header_container';
import Content from './content/content';
import EntryPage from './session/entry_page';
import { withRouter } from 'react-router-dom';

const App = ({ currentUser, modal }) => {
  return (
    <div className="ask-app">
      { currentUser ? (
        <div className="logged-in">
          <div className="outer-header">
            <Route path="/" component={HeaderContainer} />
          </div>

          {modal}

          <Content />
        </div>
      ) : (
        <div>
          <Redirect to="/" />
          <AuthRoute path="/" component={EntryPage} />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ session, ui }) => {
  return {
    currentUser: session.currentUser,
    modal: ui.modal.component,
  };
};

export default withRouter(connect(mapStateToProps, null)(App));
