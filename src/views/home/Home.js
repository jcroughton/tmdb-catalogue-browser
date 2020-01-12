import React, { Component, Fragment } from 'react';

import MovieList from 'components/MovieList';

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

    fetch(`${process.env.REACT_APP_API_BASE_URL}/search/multi?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${this.state.searchValue}`)
    .then(res => res.json())
    .then(
      (result) => {
        let sorted = result.results.sort((a,b)=> {
          return new Date(b.release_date) - new Date(a.release_date);
        });

        this.setState({ searchResults: sorted });
      },
      (error) => {
        throw Error('Error retrieving search result.');
      }
    );

  };

  render() {
    return (
      <Fragment>
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

        <h2>Search results</h2>
        <MovieList moviesToList={this.state.searchResults} />
    </Fragment>
    )
  };
}

export default Home;
