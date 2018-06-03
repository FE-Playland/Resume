import React, { Component } from 'react'

class ItemList extends Component {
    render() {
        const items = this.props.items.map((item, key) => {
            return <li key={key} dangerouslySetInnerHTML={{__html: item.text}}></li>
        })

        return (
            <ul>
                {items}
            </ul>
        )
    }
}

class ExtraInfoItem extends Component {
    render() {
        return (
            <div className="row-right">
                <p className="grey">{this.props.location}</p>
                <p className="grey">{this.props.date}</p>
            </div>
        )
    }
}

class Row extends Component {
    render() {
        const info = this.props.info
        let icon = null
        if (info.icon !== undefined) {
            icon = <img src={info.icon} />
        }
        let items = null
        if (info.items !== undefined) {
          items = <ItemList items={info.items} />
        }
        return (
            <div className="section-row">
                <div className="row-left">
                    <div className="row-header">
                        <a href={info.link} target="_blank">{info.name}</a>
                        {icon}
                        <p className="row-sub-header">{info.subtitle}</p>
                    </div>
                    {items}
                </div>
                <ExtraInfoItem date={info.date} location={info.location} />
            </div>
        )
    }
}

export default Row