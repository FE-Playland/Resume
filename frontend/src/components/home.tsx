import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import Resume from "./resume";
import CreateResumeForm from "./createResume";

class Home extends Component {
  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          component={() => (
            <ul
              style={{
                padding: "50px"
              }}
            >
              <li>
                <NavLink to="/en">EN</NavLink>
              </li>
              <li>
                <NavLink to="/cn">CN</NavLink>
              </li>
            </ul>
          )}
        />
        <Route exact path="/en" component={() => <Resume cn={false} />} />
        <Route exact path="/cn" component={() => <Resume cn />} />
        <Route exact path="/new" component={CreateResumeForm} />
      </div>
    );
  }
}

export default Home;
