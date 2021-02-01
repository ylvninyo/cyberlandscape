import React, { Component } from 'react'
import Modal from './modal'
import '../style/tile.css'
const M = window.M


class Tile extends Component {
    componentDidMount() {
        M.Modal.init(this.instance.querySelectorAll('.modal'))
    }

    open = () => {
        let modal = this.instance.getElementsByClassName('modal')[0]
        let twtr = this.instance.getElementsByClassName('twtr')[0]
        if(twtr) twtr.className = 'twitter-timeline'
        window.twttr.widgets.load(modal)
        M.Modal.getInstance(modal).open()
    }

    render() {
        const toSnakeCase = str => 
            str && 
            str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map(x => x.toLowerCase())
            .join('_');
        let item = this.props.item
        let key = (item.category + item.subcategory + item.name).replace(/[^a-zA-Z0-9]/g,'')
        let alt = `${toSnakeCase(item.name)}_cybermap_ylventures`
        return(
            <span ref={el => (this.instance = el)}>
                <div className="background-white company-tile inline-block center cursor-pointer" onClick={this.open}>
                    <img className="logo-tile" src={item.logo} alt={alt}></img>
                    <br />
                    <hr />
                    <div className="black-text">
                        <div className="tile-title bolder">{item.name}</div>
                    </div>
                </div>
                <Modal id={key} item={item}/>
            </span>
        )
    }
}

export default Tile