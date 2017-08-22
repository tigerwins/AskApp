import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
      showSignup: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleShowSignup = this.toggleShowSignup.bind(this);
  }

  handleChange(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  toggleShowSignup(e) {
    this.setState({ showSignup: !this.state.showSignup });
  }

  renderErrors() {
    const { errors, formType } = this.props;
    let entryErrors;

    if (formType === "signup" && errors.errorType === "signup") {
      entryErrors = errors.errorList;
    } else {
      entryErrors = [];
    }

    const errorList = entryErrors.map((error, i) => (
      <li key={`error-${i}`}>
        {error}
      </li>
    ));

    return (
      <ul className="error-list">
        {errorList}
      </ul>
    );
  }

  renderFormContainer() {
    const { formType } = this.props;

    if (formType === "signup" && !this.state.showSignup) {
      return (
        <div className="signup-container">
          <span className="login-btn google-btn">
            Continue with Google
          </span>

          <br/>
          <span className="login-btn facebook-btn">
            Continue with Facebook
          </span>
          <br/>
          <span>
            <Link to="/" onClick={this.toggleShowSignup}>
              Continue With Email
            </Link>.
            Signing up usually indicates that you have read and agree to the Terms of Service and Privacy Policy, but let's not kid ourselves.
          </span>
        </div>
      );
    } else {
      return (
        <div>
          {this.renderSignupForm()}
        </div>
      );
    }
  }

  renderSignupForm() {
    const { formType } = this.props;

    return (
      <form onSubmit={this.handleSubmit} className="signup-form-box">
        <h4 className="form-title signup-title">Sign Up</h4>

        <div className="signup-names-input">
          <label>First Name
            <input type="text"
              value={this.state.fname}
              onChange={this.handleChange("fname")}
              className="fname-input"
              />
          </label>

          <label>Last Name
            <input type="text"
              value={this.state.lname}
              onChange={this.handleChange("lname")}
              className="lname-input"
              />
          </label>
        </div>

        <label>Email
          <input type="text"
            value={this.state.email}
            onChange={this.handleChange("email")}
            className="email-input"
            />
        </label>

        <label>Password
          <input type="password"
            value={this.state.password}
            onChange={this.handleChange("password")}
            className="password-input"
            />
        </label>

        <Link to="/" onClick={this.toggleShowSignup}>
          Cancel
        </Link>

        <input type="submit" value="Sign Up" />

        {this.renderErrors()}
      </form>
    );
  }

  render() {
    return (
      <div className="signup-form-container">
        {this.renderFormContainer()}
      </div>
    );
  }
}

export default SignupForm;
