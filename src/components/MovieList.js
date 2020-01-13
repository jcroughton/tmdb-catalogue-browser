import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';
import Popularity from './Popularity';
export class MovieList extends Component {
  render() {
    return (
      <ul className="
        flex
        flex-row
        flex-wrap
      ">
        {
          Object.keys(this.props.moviesToList).map((movieId, index) =>
            <li
              key={movieId}
              className=
                {
                  `w-6/12
                  ${(index % 2) ? 'pl-4' : 'pr-4'}
                  `
                }
            >
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

                <p><Popularity score={this.props.moviesToList[movieId].vote_average} /></p>
              </div>
            </li>
          )
        }
      </ul>
    )
  };
}

export default MovieList;
