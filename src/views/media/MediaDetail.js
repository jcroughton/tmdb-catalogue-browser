import React, { Component, Fragment } from 'react'
import moment from 'moment';
import GoBack from '../../components/GoBack';

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
        <GoBack />
        <h2>
          Media Detail
        </h2>
        {
          this.state.mediaItem === null ?
            <p>Loading...</p>
          :
            <Fragment>
              <div className="bg-gray-300">
              {
                this.state.mediaItem.backdrop_path !== null ?
                  <img src={`https://image.tmdb.org/t/p/w500${this.state.mediaItem.backdrop_path}`} alt={`${this.state.mediaItem.title} poster`} />
                :
                  null
                }
              </div>

              <div>
              {
                this.state.mediaItem.poster_path !== null ?
                  <img src={`https://image.tmdb.org/t/p/w500${this.state.mediaItem.poster_path}`} alt={`${this.state.mediaItem.title} poster`} />
                :
                  "No poster image available."
                }
              </div>

              <p>{this.state.mediaItem.title}</p>
              <p>{moment(this.state.mediaItem.release_date).format('YYYY')}</p>
              <p>{parseFloat(this.state.mediaItem.popularity).toFixed()}% User Score</p>
              <p>{this.formatTime(this.state.mediaItem.runtime)}</p>
              <p>{this.state.mediaItem.overview }</p>
            </Fragment>
        }
      </Fragment>
    )
  };
}

export default MediaDetail;
