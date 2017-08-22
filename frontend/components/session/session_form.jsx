import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
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
    } else if (formType === "login" && errors.errorType === "login") {
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
          <span className="google-button-text">
            Continue with Google
          </span>
          <br/>
          <span className="facebook-button-text">
            Continue with Facebook
          </span>
          <br/>
          <Link to="/" onClick={this.toggleShowSignup}>
            Continue With Email
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          {this.renderLoginForm()}
        </div>
      );
    }
  }

  renderLoginForm() {
    const { formType } = this.props;
    const formText = formType === "login" ? "Login" : "Sign Up";

    return (
      <form onSubmit={this.handleSubmit} className={formType + "-form-box"}>
        <h4 className="form-title">{formText}</h4>

        {this.renderSignupUnique()}

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

        { formType === "signup" &&
          <Link to="/" onClick={this.toggleShowSignup}>
            Cancel
          </Link>
        }

        <input type="submit" value={formText} />

        {this.renderErrors()}
      </form>
    );
  }

  renderSignupUnique() {
    if (this.props.formType === "signup") {
      return (
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
      );
    }
  }

  render() {
    return (
      <div className={this.props.formType + "-form-container"}>
        {this.renderFormContainer()}
      </div>
    );
  }
}

export default SessionForm;
