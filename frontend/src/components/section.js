import React, { Component } from 'react'
import Row from './row'

class Section extends Component {
    render() {
        const name = this.props.info.title
        const rows = this.props.info.rows.map((row, key) => {
            return <Row info={row} key={key} />
        })
        return (
            <div className="section-container">
                <div className="section-header">
                    {name}
                </div>
                    <div className="section-rows">
                    {rows}
                    </div>
            </div>
        )
    }
}

export default Section