import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.loggedIn) {
  //     this.props.history.push('/');
  //   }
  // }

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
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h4>Login</h4>

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

          <input type="submit" value="Login" />

          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default LoginForm;
