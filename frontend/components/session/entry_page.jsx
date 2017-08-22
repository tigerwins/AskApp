import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';

const EntryPage = () => {
  return (
    <div className="signup-login">
      <h1>Ask()</h1>
      <h3>Knowledge: Ask and ye shall receive</h3>
      <Route exact path="/" component={LoginFormContainer} />
      <Route exact path="/" component={SignupFormContainer} />
    </div>
  );
};

export default EntryPage;
