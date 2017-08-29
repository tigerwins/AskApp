import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      searchResults: [],
    };

  }

  handleChange(field) {
    (e) => this.setState({ query: e.target.value }, () => )
  }

  onFocus(e) {

  }

  onBlur(e) {

  }

  render() {

  }
}
