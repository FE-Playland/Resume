import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import Resume from "./resume";
import CreateResumeForm from "./createResume";

class Home extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Resume} />
        <Route exact path="/new" component={CreateResumeForm} />
      </div>
    );
  }
}

export default Home;
