import React, { Component } from 'react';

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
      searchResults: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    this.setState({ searchValue: event.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();
    console.log('*** handleSubmit');
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="search">

          Enter a tv show or movie to search:

          <input
            id="search"
            type="text"
            placeholder="Search"
            value={this.state.searchValue}
            onChange={this.handleChange}
          />
        </label>

        <button
          type="submit"
        >
          Send
        </button>
      </form>
    )
  };
}

export default Home;
