import React from 'react';
import { Route } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
// import containers

const App = () => {
  return (
    <div>
      // will want a switcher for the routes, including with nav
      // or conditionally render only the front page
      <nav>
        <h1>Ask() Logo</h1>
      </nav>

      <Route exact path="/" component={LoginFormContainer} />
      <Route exact path="/" component={SignupFormContainer} />

      // other frontend routes
    </div>
  );
};

export default App;
