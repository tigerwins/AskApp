import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';

const FrontPage = ({ currentUser }) => {
  if (currentUser) {
    return (
      <Redirect to="/" />
      );
    }

  return (
    <div className="signup-login">
      <Route exact path="/" component={LoginFormContainer} />
      <Route exact path="/" component={SignupFormContainer} />
    </div>
  );
};

export default FrontPage;
