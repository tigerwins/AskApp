import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HeaderContainer from './content/header_container';
import FrontPageContainer from './session/front_page_container';
import HomeContainer from './questions/home_container';

const App = () => {
  return (
    <div className="ask-app">
      <div className="outer-header">
        <ProtectedRoute path="/" component={HeaderContainer} />
      </div>
      <Switch>
        <ProtectedRoute path="/questions" component={HomeContainer} />
        <ProtectedRoute path="/questions/:id" />
        <ProtectedRoute path="/answer" />
        <ProtectedRoute path="/topics/:id" />
        <Route exact path="/" component={FrontPageContainer} />
      </Switch>
    </div>
  );
};

export default App;
