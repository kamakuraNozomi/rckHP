import React, { Component } from "react";
import Photo from "./Photo";
import PageLink from "./PageLink";
import LoginHeader from "./LoginHeader";

class App extends Component {
  render() {
    return (
      <div>
        <LoginHeader />
        <PageLink />
        <Photo />
      </div>
    );
  }
}
export default App;
