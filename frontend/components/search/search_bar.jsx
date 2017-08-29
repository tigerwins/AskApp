import React from 'react';
import { withRouter } from 'react-router-dom';
import { searchQuestions } from '../../util/question_api_util';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      searchResults: [],
    };

    this.focused = false;

    this.getSuggestions = this.getSuggestions.bind(this);
    this.getSuggestionValue = this.getSuggestionValue.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);

    this.handleChange = this.handleChange.bind(this);
    // this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.searchQuestions = searchQuestions.bind(this);
  }

  getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    if (inputLength === 0) {
      return [];
    } else {
      return this.state.searchResults;
    }
  }

  getSuggestionValue(suggestion) {
    return suggestion.body;
  }

  renderSuggestion(suggestion, { query }) {
    const matches = match(suggestion.body, query);
    const parts = parse(suggestion.body, matches);

    return (
      <span>
        {parts.map((part, idx) => {
          const className = part.highlight ? "react-autosuggest__suggestion-match" : null;

          return (
            <span className={ className } key={ idx }>
              { part.text }
            </span>
          );
        })}
      </span>
    );
  }

  onSuggestionsFetchRequested({ value }) {
    this.setState({ searchResults: this.getSuggestions(value) });
  }

  onSuggestionsClearRequested() {
    this.setState({ searchResults: [] });
  }

  onSuggestionSelected(e, { suggestion, sValue, sIndex, sectionIndex, method}) {
    this.props.history.push(`/questions/${suggestion.id}`);
  }

  // ^ REACT-AUTOSUGGEST

  handleChange(e, { newValue }) {
    const self = this;
    this.setState({ query: newValue }, () => this.searchQuestions(this.state.query).then(
      searchResults => {
        if (Object.prototype.toString.call(searchResults) === '[object Array]') {
          self.setState({ searchResults: searchResults });
        } else {
          self.setState({ searchResults: [] });
        }
      })
    );
  }

  handleFocus(e) {

  }

  handleBlur(e) {
    setTimeout(() => this.setState({ searchResults: [] }), 100);
  }

  render() {
    const { query, searchResults } = this.state;
    const inputProps = {
      placeholder: "Search Ask()",
      value: query,
      onChange: this.handleChange,
    };

    return (
      <Autosuggest
        suggestions={ searchResults }
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        onSuggestionSelected={this.onSuggestionSelected}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default withRouter(SearchBar);
