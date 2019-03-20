import React, { Component } from "react";
import { Link } from "react-router-dom";

class News extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <div>Top</div>
        </Link>
        <p>News Contents.</p>
      </div>
    );
  }
}
export default News;
