import React, { Component, Fragment } from 'react'

export class Popularity extends Component {
  calculatePopularity() {
    return parseFloat(this.props.score) * 10;
  };

  render() {
    return (
      <Fragment>
        {
          `${this.calculatePopularity()}%`
        }
      </Fragment>
    )
  }
}

export default Popularity
