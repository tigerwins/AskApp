import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CreateQuestionModal from '../questions/create_question_modal_container';
import SearchBar from '../search/search_bar';
import Avatar from 'react-avatar';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.askQuestion = this.askQuestion.bind(this);
  }

  handleLogout(e) {
    this.props.logout();
  }

  askQuestion(e) {
    this.props.toggleModal(<CreateQuestionModal />);
  }

  render() {
    return (
      <div className="header">
        <div className="header-left header-border"></div>
        <div className="header-contents">
          <Link className="logo-link" to="/">
            <h2 className="logo">Ask(<span className="logo-space"> </span>)</h2>
          </Link>
          <div className="header-nav">
            {/*<div className="notification-blank"></div>*/}
            <NavLink className="nav-item" exact={true} to="/"
              activeClassName="active-nav"
              activeStyle={{ color: "#b92b27", iconColor: "#b92b27", borderColor: "#b92b27", opacity: "1" }}
            >
              <span className="nav-item-icon">
                <svg width="24px" height="24px" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g id="Icons" stroke="none" strokeWidth="1" fill="var(--icon_color, #555)" fillRule="evenodd">
                    <path d="M4,7.99448227 C4,5.23610588 6.24325385,3 9.00365614,3 L46,3 L46,42.1055177 C46,44.8638941 43.7567461,47.1 40.9963439,47.1 L4,47.1 L4,7.99448227 M11,12 L25,12 L25,14 L11,14 M11,20 L25,20 L25,22 L11,22 M11,28 L39,28 L39,30 L11,30 M11,36 L39,36 L39,38 L11,38 M29,12 L39,12 L39,22 L29,22 Z"></path>
                  </g>
                </svg>
              </span>
              <span className="nav-item-text">Home</span>
            </NavLink>

            <NavLink className="nav-item" to="/answer"
              activeClassName="active-nav"
              activeStyle={{ color: "#b92b27", icon_color: "#b92b27", borderColor: "#b92b27", opacity: "1" }}
            >
              <span className="nav-item-icon">
                <svg width="24px" height="24px" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <title>answer</title>
                  <g id="answer" stroke="none" strokeWidth="1" fill="var(--icon_color, #555)" fillRule="evenodd">
                    <path d="M25,24.907293 L25,45.3 C25,45.5761424 24.7761424,45.8 24.5,45.8 L23.42,45.8 C23.1438576,45.8 22.92,45.5761424 22.92,45.3 L22.92,45.3 L22.92,24.907293 L25,24.907293 Z M23.96,22.92 L44.2873495,22.92 C44.5634919,22.92 44.7873495,23.1438576 44.7873495,23.42 L44.7873495,23.42 L44.7873495,24.407293 C44.7873495,24.6834354 44.5634919,24.907293 44.2873495,24.907293 L23.96,24.907293 L22.92,24.907293 L22.92,23.96 C22.92,23.3856239 23.3856239,22.92 23.96,22.92 Z" id="Combined-Shape" transform="translate(33.853675, 34.360000) rotate(-180.000000) translate(-33.853675, -34.360000) "></path>
                    <path d="M7.32,6.187293 L7.32,26.58 C7.32,26.8561424 7.09614237,27.08 6.82,27.08 L5.74,27.08 C5.46385763,27.08 5.24,26.8561424 5.24,26.58 L5.24,26.58 L5.24,6.187293 L7.32,6.187293 Z M6.28,4.2 L26.6073495,4.2 C26.8834919,4.2 27.1073495,4.42385763 27.1073495,4.7 L27.1073495,4.7 L27.1073495,5.687293 C27.1073495,5.96343537 26.8834919,6.187293 26.6073495,6.187293 L6.28,6.187293 L5.24,6.187293 L5.24,5.24 C5.24,4.66562386 5.70562386,4.2 6.28,4.2 Z"></path>
                    <g id="FILLED-PENCIL" transform="translate(23.869499, 26.014975) rotate(-315.000000) translate(-23.869499, -26.014975) translate(18.369499, -2.985025)">
                      <path d="M4.05262878,56.4260093 L0,47.1640748 L10.4,47.1640748 L6.34737122,56.4260093 C6.07010171,57.059685 5.33163476,57.3486092 4.69795913,57.0713397 C4.40933948,56.945052 4.17891647,56.714629 4.05262878,56.4260093 Z M5.00959999,-1.59773453e-15 L5.2,-1.59773453e-15 L5.2,-1.77635684e-15 C8.0718807,-2.30392962e-15 10.4,2.3281193 10.4,5.2 L10.4,47.1640748 L5.2,47.1640748 L-5.42101086e-20,47.1640748 L-5.42101086e-20,5.00959999 L-8.8817842e-16,5.00959999 C-1.2269916e-15,2.24287431 2.24287431,-3.04449391e-15 5.00959999,-3.55271368e-15 L5.00959999,-1.59773453e-15 M1.04 49.92 9.36 49.92 9.36 50.923491 6.50507812 50.923491 1.04 50.923491 Z"></path>
                    </g>
                  </g>
                </svg>
              </span>
              <span className="nav-item-text">Answer</span>
            </NavLink>

            {/* <div className="nav-item">
              <span className="nav-item-icon">
                <svg width="24px" height="24px" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g id="notif" stroke="var(--icon_color, #555)" strokeWidth="1" fill="none" fillRule="evenodd">
                    <circle id="Oval-2" strokeWidth="2" cx="25" cy="6" r="4"></circle>
                    <path d="M44.3677416,38.7603695 C44.7558518,39.1065 45,39.6095035 45,40.171277 L45,42.0557374 C45,42.5772392 44.5778459,43 44.0506834,43 L5.94931662,43 C5.42502353,43 5,42.5809343 5,42.0557374 L5,40.171277 C5,39.6151146 5.24153801,39.114956 5.62540672,38.7685392 C5.6491992,38.7398562 5.67509747,38.7119483 5.70315955,38.6849553 C5.74283541,38.646791 5.82071637,38.5705726 5.93130097,38.4602319 C6.11756644,38.2743773 6.32562152,38.0621858 6.54994662,37.8276204 C7.19094603,37.1573596 7.83183795,36.4442733 8.42800806,35.7210339 C8.94816428,35.0900101 9.40934188,34.4807785 9.7953965,33.9063569 C10.248826,33.2316862 10.5871027,32.6216318 10.792064,32.0989806 C11.13741,31.2183483 11.384584,29.7331115 11.5292656,27.8459477 C11.661919,26.1156745 11.6966328,24.2899605 11.6753126,22.7028739 C11.6696562,22.545891 11.6667593,22.3882109 11.6666689,22.22988 C11.6665698,22.2211647 11.6665738,22.2125021 11.6666792,22.2038926 C11.6766586,14.909887 17.6423655,9 25,9 C32.3576345,9 38.3233414,14.909887 38.3333208,22.2038926 C38.3334262,22.2125021 38.3334302,22.2211647 38.3333311,22.22988 C38.3332407,22.3882109 38.3303438,22.545891 38.3246874,22.7028739 C38.3033672,24.2899605 38.338081,26.1156745 38.4707344,27.8459477 C38.615416,29.7331115 38.86259,31.2183483 39.207936,32.0989806 C39.4128973,32.6216318 39.751174,33.2316862 40.2046035,33.9063569 C40.5906581,34.4807785 41.0518357,35.0900101 41.5719919,35.7210339 C42.168162,36.4442733 42.809054,37.1573596 43.4500534,37.8276204 C43.6743785,38.0621858 43.8824336,38.2743773 44.068699,38.4602319 C44.1792836,38.5705726 44.2571646,38.646791 44.2968405,38.6849553 C44.3222313,38.7093788 44.3458507,38.7345514 44.3677416,38.7603695 Z" strokeWidth="2" fill="var(--icon_color, #555)" fillRule="nonzero"></path>
                    <path d="M20,43 C20,45.7614237 22.2385763,48 25,48 C27.7614237,48 30,45.7614237 30,43 L20,43 Z"></path>
                  </g>
                </svg>
              </span>
              <span className="nav-item-text">
                Notifications
              </span>
            </div> */}
          </div>

          <SearchBar />

          <div className="header-menu nav-item">
            <input id="menu-check" type="checkbox" name="menu" />
            <label htmlFor="menu-check">
              <Avatar className="header-avatar" name={this.props.currentUser.name} size={26} round={true}
              textSizeRatio={2} />
            </label>

            <ul className="menu">
              <li><span><a href="#" className="action-link logout" onClick={this.handleLogout}>
                Logout
              </a></span></li>
            </ul>
          </div>

          <div className="ask-question">
            <button className="question-btn" onClick={this.askQuestion}>
              Ask Question
            </button>
          </div>

        </div>
        <div className="header-right header-border"></div>
      </div>
    );
  }
}

export default Header;
