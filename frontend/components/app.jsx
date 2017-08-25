import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import HeaderContainer from './content/header_container';
// import Content from './content/content';
import EntryPage from './session/entry_page';

import Home from './questions/home';
import QuestionDetailContainer from './questions/question_detail_container';
import NewQuestionsContainer from './questions/new_questions_container';
import TopicShowContainer from './topics/topic_show_container';

const App = ({ currentUser, modal }) => {
  return (
    <div className="ask-app">
      { currentUser ? (
        <div className="logged-in">
          <div className="outer-header">
            <Route path="/" component={HeaderContainer} />
          </div>

          <div className="content">
            <Switch>
              <Route path="/topics/:id" component={TopicShowContainer} />
              <Route path="/questions/:id" component={QuestionDetailContainer} />
              <Route path="/answer" component={NewQuestionsContainer} />
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
          
          {modal}
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
