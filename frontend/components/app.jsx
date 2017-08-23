import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HeaderContainer from './content/header_container';
import FrontPageContainer from './session/front_page_container';
import HomeContainer from './questions/home_container';
import NewQuestionsContainer from './questions/new_questions_container';

const App = () => {
  return (
    <div className="ask-app">
      <div className="outer-header">
        <ProtectedRoute path="/" component={HeaderContainer} />
      </div>
      <Switch>
        <ProtectedRoute path="/questions/:id" />
        <ProtectedRoute path="/answer" component={NewQuestionsContainer} />
        <ProtectedRoute path="/topics/:id" />
        <Route exact path="/" component={FrontPageContainer} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
