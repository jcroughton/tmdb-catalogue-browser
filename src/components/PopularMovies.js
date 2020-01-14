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
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=6ed12e064b90ae1290fa326ce9e790ff`)
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
