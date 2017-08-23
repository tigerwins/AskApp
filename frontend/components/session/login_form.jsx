import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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

  demoLogin(e) {
    e.preventDefault();
    const demoUser = {
      email: "testuser@me.com",
      password: "hiddenPassword"
    };
    // this.props.processForm()
  }

  renderErrors() {
    const { errors, formType } = this.props;
    let entryErrors;

    if (formType === "login" && errors.errorType === "login") {
      entryErrors = errors.errorList;
    } else {
      entryErrors = [];
    }

    const errorList = entryErrors.map((error, i) => (
      <li className="entry-error" key={`error-${i}`}>
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

  render() {
    const { formType } = this.props;

    return (
      <div className="login-form-container">
        <form className={formType + "-form-box"}>
          <h4 className="form-title login-title">Login</h4>

          <input type="text"
            value={this.state.email}
            placeholder="Email"
            onChange={this.handleChange("email")}
            className="login-input email"
          />

          <input type="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.handleChange("password")}
            className="login-input password"
          />

        <div className="login-btns">
          <input
            onClick={this.handleSubmit}
            disabled={!this.state.email}
            className="submit-btn login-btn"
            type="submit"
            value="Login"
          />

          <input
            onClick={this.demoLogin}
            className="submit-btn demo-btn"
            type="submit"
            value="Demo Login"
          />
        </div>

          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default LoginForm;
