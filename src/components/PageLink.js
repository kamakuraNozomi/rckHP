import React, { Component } from "react";
import { Link } from "react-router-dom";

class PageLink extends Component {
  render() {
    return (
      <div className="page-link">
        <ul className="page-link-item">
          <Link to="/" className="page-link-item-li">
            <li>
              <div>Photo</div>
            </li>
          </Link>
          <Link to="/movie" className="page-link-item-li">
            <li>
              <div>Movie</div>
            </li>
          </Link>
        </ul>
        <ul className="page-link-item">
          <Link to="/news" className="page-link-item-li">
            <li>
              <div>News</div>
            </li>
          </Link>
          <Link to="/note" className="page-link-item-li">
            <li>
              <div>Note</div>
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default PageLink;
