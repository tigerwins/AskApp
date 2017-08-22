import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
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
    const { formType } = this.props;
    const formText = formType === "login" ? "Login" : "Sign Up";

    return (
      <div className={formType + "-form-container"}>
        <form onSubmit={this.handleSubmit} className={formType + "-form-box"}>
          <h4>{formText}</h4>

        {formType === "signup" &&
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
          }

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

          <input type="submit" value={formText} />
        </form>
      </div>
    );
  }
}

export default SessionForm;
