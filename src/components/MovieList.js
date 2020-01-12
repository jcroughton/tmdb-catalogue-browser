import React, { Component } from 'react'

export class MovieList extends Component {
  render() {
    return (
      <ul>
        {
          Object.keys(this.props.moviesToList).map((movieId) =>
            <li key={movieId}>
              <div>
              {
                this.props.moviesToList[movieId].backdrop_path !== null ?
                  <img src={`https://image.tmdb.org/t/p/w500${this.props.moviesToList[movieId].backdrop_path}`} alt={`${this.props.moviesToList[movieId].title} poster`} />
                :
                  "No poster image available."
              }
              </div>
              <div>
                <h3>{this.props.moviesToList[movieId].title}</h3>
                <p>{this.props.moviesToList[movieId].overview}</p>
                <p>Released: {this.props.moviesToList[movieId].release_date}</p>
              </div>
            </li>
          )
        }
      </ul>
    )
  };
}

export default MovieList;
