import React from 'react';
import { searchQuestions } from '../../util/question_api_util';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      searchResults: [],
    };

    this.focused = false;

    this.handleChange = this.handleChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(e) {
    const self = this;
    this.setState({ query: e.target.value }, () => searchQuestions(this.state.query).then(
      searchResults => {
        if (Object.prototype.toString.call(searchResults) === '[object Array]') {
          self.setState({ searchResults: searchResults });
        } else {
          self.setState({ searchResults: [] });
        }
      })
    );
  }

  handleSearchClick(questionId) {
    return e => {
      this.setState({ searchResults: [] });
      this.props.requestQuestion(questionId).
        then(this.props.history.push(`/questions/${questionId}`));
    };
  }

  handleFocus(e) {

  }

  handleBlur(e) {
    setTimeout(() => this.setState({ searchResults: [] }), 100);
  }

  renderResults() {
    let results;
    if (this.state.searchResults > 0) {
      results = this.state.searchResults.map ((result, idx) => {
        return (
          <div className="search-result" key={idx}>

          </div>
        );
      });
    }
  }

  render() {

  }
}

export default SearchBar;
