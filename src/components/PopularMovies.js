import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';

import { addPopularMovies } from '../actions/index';

import MovieList from '../components/MovieList';

const mapStateToProps = state => {
  return {
    popularMovies: state.popularMovies
  }
};

const matchDispatchToProps = dispatch => {
  return {
    addPopularMovies: popularMovies => dispatch(addPopularMovies(popularMovies))
  };
};

export class PopularMovies extends Component {
  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.props.addPopularMovies(result.results);
        },
        (error) => {
          throw Error('Error retrieving popular movies.');
        }
      )
  };

  render() {
    return (
      <Fragment>
        <h1>Popular Movies</h1>

        <MovieList moviesToList={this.props.popularMovies} />
      </Fragment>
    )
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(PopularMovies);
