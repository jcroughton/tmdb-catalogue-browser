import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';
export class MovieList extends Component {
  render() {
    return (
      <ul>
        {
          Object.keys(this.props.moviesToList).map((movieId) =>
            <li key={movieId}>
              <Link to={`/media-detail/${this.props.moviesToList[movieId].id}`}>
              {
                this.props.moviesToList[movieId].poster_path !== null ?
                  <img src={`https://image.tmdb.org/t/p/w500${this.props.moviesToList[movieId].poster_path}`} alt={`${this.props.moviesToList[movieId].title} poster`} />
                :
                  "No poster image available."
              }
              </Link>
              <div>
                <h3>{this.props.moviesToList[movieId].title}</h3>
                <p>{moment(this.props.moviesToList[movieId].release_date).format('MMMM YYYY')}</p>
                <p>{parseFloat(this.props.moviesToList[movieId].popularity).toFixed()}%</p>
              </div>
            </li>
          )
        }
      </ul>
    )
  };
}

export default MovieList;
