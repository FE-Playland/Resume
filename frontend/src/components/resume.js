import React, { Component } from 'react'
import './resume.css'
import Header from './header'
import Section from './section'

class Resume extends Component {
    componentDidMount() {
        fetch('http://localhost:8989/db')
            .then(res => res.json())
            .then(res => this.setState({resume: res}))
    }
    
    state = {
        resume: null,
    }

    render() {
        if (!this.state.resume) {
            return (
                <div></div>
            )
        }
        const sections = this.state.resume.sections.map((section, key) => {
            return <Section info={section} key={key}/>
        })
        return (
            <div id="container">
                <Header basicInfo={this.state.resume.basic_info}/>
                {sections}
            </div>
        )
    }
}

export default Resume