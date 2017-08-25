import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';

class EntryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEmail: "hidden",
      showIcon: "show",
      showSignup: false,
      email: "",
      password: ""
    };

    this.displayEmail = this.displayEmail.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.loginOpensSignup = this.loginOpensSignup.bind(this);
    this.toggleShowSignup = this.toggleShowSignup.bind(this);
  }

  displayEmail(e) {
    this.setState({ showEmail: "show", showIcon: "hidden" });
  }

  handleChange(field, newValue) {
    this.setState({ [field]: newValue });
  }

  toggleShowSignup(e) {
    this.setState({ showSignup: !this.state.showSignup });
  }

  loginOpensSignup(e) {
    this.setState({ showSignup: true });
  }

  render() {
    return (
      <div className="front-page">
        <div className="entry-forms-box">
          <h1 className="logo entry-page">Ask(<span className="logo-space"> </span>)</h1>
          <span className="tagline">We might just have the answers you're looking for</span>
          <div className="entry-forms-outer-box">
            <div className="entry-forms-inner-box">
              <div className="signup entry-form">
                <SignupFormContainer
                  showSignup={this.state.showSignup}
                  email={this.state.email}
                  password={this.state.password}
                  toggleSignup={this.toggleShowSignup}
                  handleChange={this.handleChange}
                  />
              </div>
              <div className="login entry-form">
                <LoginFormContainer
                  handleChange={this.handleChange}
                  toggleSignup={this.loginOpensSignup}
                  />
              </div>
            </div>
          </div>

          <div className="footer-border">
            Coded by Jonathan Liu. Inspired by <a href="https://www.quora.com" target="_blank">Quora</a>.
          </div>
          <nav className="entry-footer">
            <ul className="personal-info">
              <li><a href="https://github.com/tigerwins/AskApp/" target="_blank">
                <svg width="24" height="24">
                  <image width="24" height="24" xlinkHref={window.images.github_svg} />
                </svg>
              </a></li>

              <li className="center-li">
                <a href="https://www.linkedin.com/in/jonathanzliu/" target="_blank">
                  <svg width="24" height="24">
                    <image width="24" height="24" xlinkHref={window.images.linkedin_svg} />
                  </svg>
                </a>
              </li>

              <li className={this.state.showIcon}>
                <svg onClick={this.displayEmail} width="24" height="24">
                  <image width="24" height="24" xlinkHref={window.images.gmail_svg} />
                </svg>
              </li>

              <li className={`${this.state.showEmail} email`}>
                <span><a href="mailto:jonathan.liu137@gmail.com" target="_blank">
                  jonathan.liu137@gmail.com
                </a></span>
              </li>
            </ul>
          </nav>
      ``</div>
      </div>
    );
  }
}

export default EntryPage;
