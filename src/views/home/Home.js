import React, { Component } from 'react';

export class Home extends Component {
  handleSubmit(event) {
    event.preventDefault();
    console.log('*** handleSubmit');
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="search">

          Enter a tv show or movie to search:

          <input
            id="search"
            type="text"
            placeholder="Search"
          />
        </label>

        <button
          type="submit"
        >
          Send
        </button>
      </form>
    )
  };
}

export default Home;
