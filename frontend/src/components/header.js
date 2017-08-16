import React, { Component } from 'react'
import './resume.css'

class Header extends Component {
    render() {
        const name = this.props.basicInfo.name
        const email = this.props.basicInfo.email
        const blog = this.props.basicInfo.blog
        const github = `https://github.com/${this.props.basicInfo.github}`
        
        return (
            <div>
                <p id="name">{name}</p>
                <p className="grey">{email}</p>
                <p className="grey"><a href={blog} target="_blank">{blog}</a></p>
                <p className="grey"><a href={github} target="_blank">{github}</a></p>
                <hr />
            </div>
        )
    }
}

export default Header