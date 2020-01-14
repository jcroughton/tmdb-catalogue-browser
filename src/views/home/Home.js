import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { searchMovies, clearSearch, updateSearchValue } from 'actions/index';

import MovieList from 'components/MovieList';
import PopularMovies from 'components/PopularMovies';

import logo from 'images/logo-tmdb.svg';
import magnify from 'images/magnify.svg';
import close from 'images/close.svg';

const mapStateToProps = state => {
  return {
    searchResults: state.searchResults,
    searchValue: state.searchValue
  }
};

const matchDispatchToProps = dispatch => {
  return {
    searchMovies: searchResults => dispatch(searchMovies(searchResults)),
    clearSearch: () => dispatch(clearSearch()),
    updateSearchValue: searchValue => dispatch(updateSearchValue(searchValue))
  };
};

export class Home extends Component {
  constructor(props) {
    super(props);

    this.handleClearSearch = this.handleClearSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleClearSearch(event) {
    this.props.updateSearchValue('');
    this.props.clearSearch();
  };

  handleChange(event) {
    this.props.updateSearchValue(event.target.value);
  };

  handleSubmit(event) {
    event.preventDefault();

    fetch(`https://api.themoviedb.org/3/search/multi?api_key=6ed12e064b90ae1290fa326ce9e790ff&query=${this.props.searchValue}`)
    .then(res => res.json())
    .then(
      (result) => {
        let sorted = result.results.sort((a,b)=> {
          return new Date(b.release_date) - new Date(a.release_date);
        });

        this.props.searchMovies(sorted);
      },
      (error) => {
        throw Error('Error retrieving search result.');
      }
    );

  };

  render() {
    return (
      <Fragment>
        <header className="Header">
          <img src={logo} alt="The Movie Database" />
        </header>

        <div className="mx-4">

          <form onSubmit={this.handleSubmit}>
            <label
              className="block mb-11"
              htmlFor="search"
            >
              <div className="
                bg-white
                flex
                flex-row
                items-center
                p-4
                rounded-full
              ">
                <input
                  id="search"
                  className="
                    placeholder-charlie
                  "
                  type="text"
                  placeholder="Search"
                  value={this.props.searchValue}
                  onChange={this.handleChange}
                />

                <img
                  onClick={this.handleClearSearch}
                  className={
                    this.props.searchResults.length < 1 ?
                      'hidden'
                    :
                      'Button--clear'
                  }
                  src={close} alt="Clear search"
                />

                <button
                  type="submit"
                  className={
                    this.props.searchResults.length < 1 ?
                      'block'
                    :
                      'hidden'
                  }
                >
                  <img src={magnify} alt="Search" />
                </button>
              </div>
            </label>

          </form>

          {
            this.props.searchResults.length < 1 ?
              <PopularMovies />
            :
              <MovieList moviesToList={this.props.searchResults} />
          }
        </div>
    </Fragment>
    )
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(Home);
