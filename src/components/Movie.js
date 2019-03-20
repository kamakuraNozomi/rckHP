import React, { Component } from "react";
import { Link } from "react-router-dom";

class Movie extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <div>Top</div>
        </Link>
        <p>Movies Contents.</p>
      </div>
    );
  }
}
export default Movie;
