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

    if (errorList.length > 0) {
      return (
        <ul className="entry-errors">
          {errorList}
        </ul>
      );
    }
  }

  renderFormContainer() {
    const { formType } = this.props;

    if (formType === "signup" && !this.state.showSignup) {
      return (
        <div className="signup-container">
          <div className="other-login-btn google-btn">
            <span className="other-icon google-icon"></span>
            <span className="other-login-text google-text">Continue with Google</span>
          </div>

          <div className="other-login-btn facebook-btn">
            <span className="other-icon facebook-icon"></span>
            <span className="other-login-text facebook-text">Continue with Facebook</span>
          </div>

          <span>
            <span className="signup-link show-form" onClick={this.toggleShowSignup}>
              Continue With Email
            </span>.
            Signing up typically indicates that you have read and agree to the <span className="tos-pp">Terms of Service</span> and <span className="tos-pp">Privacy Policy</span>, but let's not kid ourselves.
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
    const { fname, lname, email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="signup-form-box">
        <h4 className="form-title signup-title">Sign Up</h4>

        <div className="signup-names-input">
          <div className="form-row half left-half">
            <label htmlFor="signup-fname">First Name</label>
            <input type="text"
              id="signup-fname"
              value={this.state.fname}
              onChange={this.handleChange("fname")}
              className="signup-input fname"
              />
          </div>

          <div className="form-row half right-half">
            <label htmlFor="signup-lname">Last Name</label>
            <input type="text"
              id="signup-lname"
              value={this.state.lname}
              onChange={this.handleChange("lname")}
              className="signup-input lname"
              />
          </div>
        </div>

        <div className="form-row">
          <label htmlFor="signup-email">Email</label>
          <input type="text"
            id="signup-email"
            value={this.state.email}
            onChange={this.handleChange("email")}
            className="signup-input email"
            />
        </div>

        <div className="form-row">
          <label htmlFor="signup-password">Password</label>
          <input type="password"
            id="signup-password"
            value={this.state.password}
            onChange={this.handleChange("password")}
            className="signup-input password"
            />
        </div>
        <span>
          By clicking "Sign Up" you indicate that you have read and agree to the <span className="tos-pp">Terms of Service</span> and <span className="tos-pp">Privacy Policy</span>.
        </span>

        <div className="signup-form-btns">
          <span className="signup-link cancel" onClick={this.toggleShowSignup}>
            Cancel
          </span>

          <input
            className="submit-btn signup-btn"
            type="submit"
            disabled={!(fname && lname && email && password)}
            value="Sign Up" />
        </div>

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
