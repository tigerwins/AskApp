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

  renderErrors() {
    const { errors, formType } = this.props;
    let entryErrors;

    if (formType === "login" && errors.errorType === "login") {
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

  render() {
    const { formType } = this.props;

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className={formType + "-form-box"}>
          <h4 className="form-title login-title">Login</h4>

          <label>
            <input type="text"
              value={this.state.email}
              placeholder="Email"
              onChange={this.handleChange("email")}
              className="login-email"
              />
          </label>

          <label>
            <input type="password"
              value={this.state.password}
              placeholder="Password"
              onChange={this.handleChange("password")}
              className="login-password"
              />
          </label>

          <input type="submit" value="Login" />

          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default LoginForm;
