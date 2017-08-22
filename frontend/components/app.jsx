import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HeaderContainer from './header_container';
import FrontPageContainer from './session/front_page_container';

const App = () => {
  return (
    <div className="ask-app">
      <ProtectedRoute path="/" component={HeaderContainer} />
      <Switch>
        <ProtectedRoute path="/questions" />
        <ProtectedRoute path="/questions/:id" />
        <ProtectedRoute path="/answer" />
        <ProtectedRoute path="/topics/:id" />
        <Route exact path="/" component={FrontPageContainer} />
      </Switch>

    </div>
  );
};

export default App;
