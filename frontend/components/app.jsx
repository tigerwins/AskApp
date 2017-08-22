import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Header from './header';
import FrontPage from './session/front_page';
import QuestionFeed from './questions/question_feed';

const App = () => {
  return (
    <div>
      // will want a switcher for the routes, including with nav
      // or conditionally render only the front page
      <Header /> // need a header container

      <Switch>
        <AuthRoute path="/" component={QuestionFeed} />
        <AuthRoute path="/" component={FrontPage} />
      </Switch>

    </div>
  );
};

export default App;
