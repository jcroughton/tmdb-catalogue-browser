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
                  `
                  Card
                  w-6/12
                  ${(index % 2) ? 'pl-4' : 'pr-4'}
                  `
                }
            >
              <Link className="block relative" to={`/media-detail/${this.props.moviesToList[movieId].id}`}>
              {
                this.props.moviesToList[movieId].poster_path !== null ?
                  <div className="Card__container">
                    <img className="Card__image" src={`https://image.tmdb.org/t/p/w500${this.props.moviesToList[movieId].poster_path}`} alt={`${this.props.moviesToList[movieId].title} poster`} />
                    <span
                      className=
                      {
                        `Card__popularity
                        ${(parseFloat(this.props.moviesToList[movieId].vote_average) >= 7) ? 'bg-charlie' : null}
                        ${(parseFloat(this.props.moviesToList[movieId].vote_average) < 7) ? 'bg-foxtrot' : null}
                        ${(parseFloat(this.props.moviesToList[movieId].vote_average) < 3) ? 'bg-golf' : null}
                        `
                      }

                      >
                        <Popularity score={this.props.moviesToList[movieId].vote_average} /></span>
                  </div>
                :
                  "No poster image available."
              }
              </Link>
              <div className="Card__details">
                <h2 className="Card__title">{this.props.moviesToList[movieId].title}</h2>
                <span className="Card__date">{moment(this.props.moviesToList[movieId].release_date).format('MMMM YYYY')}</span>
              </div>
            </li>
          )
        }
      </ul>
    )
  };
}

export default MovieList;
