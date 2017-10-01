import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'

import Resume from './resume'
import CreateResumeForm from './createResume'

import './resume.css'

class Home extends Component {
    render() {
        return (
            <div>
                {/* <div id="nav">
                    <NavLink exact to="/">Resume</NavLink>
                    <NavLink exact to="/new">New</NavLink>
                </div>
                <hr /> */}
                <Route exact path="/" component={Resume} />
                <Route exact path="/new" component={CreateResumeForm} />
            </div>
        )
    }
}

export default Home