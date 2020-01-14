import React, { Component, Fragment } from 'react'
import moment from 'moment';
import GoBack from 'components/GoBack';
import Popularity from 'components/Popularity';

export class MediaDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mediaItem: null,
    };
  };

  componentDidMount() {
    let mediaItemId = this.props.match.params.mediaId;

    fetch(`${process.env.REACT_APP_API_BASE_URL}/movie/${mediaItemId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({ mediaItem: result });
        console.log(this.state.mediaItem);
      },
      (error) => {
        throw Error('Error retrieving media item.');
      }
    );
  };

  formatTime(timeInMinutes) {
    let hours = Math.floor( timeInMinutes / 60);
    let minutes = timeInMinutes % 60;

    return `${hours}h ${minutes}min`;
  };

  render() {
    return (
      <Fragment>
        {
          this.state.mediaItem === null ?
            <p>Loading...</p>
          :
            <Fragment>
              <div className="MediaDetail__header">
                <div
                  className="MediaDetail__backdrop"
                  style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${this.state.mediaItem.backdrop_path})`}}
                  >
                  <GoBack />
                </div>
              </div>
              <div className="
                mx-4
                pb-24
              ">
                <div className="
                  Card
                  CardDetail
                ">
                  {
                    this.state.mediaItem.poster_path !== null ?
                      <img className="Card__image CardDetail__image" src={`https://image.tmdb.org/t/p/w500${this.state.mediaItem.poster_path}`} alt={`${this.state.mediaItem.title} poster`} />
                    :
                      "No poster image available."
                  }
                  <div className="CardDetail__Intro">
                    <h1 className="CardDetail__title">{this.state.mediaItem.title}</h1>
                    <div className="text-xs">
                      <div>
                        {moment(this.state.mediaItem.release_date).format('YYYY')}
                        &nbsp;&bull;&nbsp;
                        <Popularity score={this.state.mediaItem.vote_average} /> User Score
                      </div>

                      <div>{this.formatTime(this.state.mediaItem.runtime)}</div>
                    </div>
                  </div>
                </div>
                <div className="CardDetail__overview">
                  <h2 className="util-mimic-h1">Overview</h2>
                  <p>{this.state.mediaItem.overview }</p>
                </div>
              </div>
            </Fragment>
        }
      </Fragment>
    )
  };
}

export default MediaDetail;
