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

    render(){
        let item = this.props.item
        let key = (item.category + item.subcategory + item.name).replace(/[^a-zA-Z0-9]/g,'')
        return(
            <span ref={el => (this.instance = el)}>
                <div className="background-white company-tile inline-block center cursor-pointer" onClick={this.open}>
                    <img className="logo-tile" src={item.logo} alt="logo"></img>
                    <br />
                    <hr />
                    <div className="black-text">
                        <div className="tile-title bolder">{item.name}</div>
                        <div className="font-8">{item.category}{item.subcategory ? (' | '+item.subcategory) : ''}</div>
                    </div>
                </div>
                <Modal id={key} item={item}/>
            </span>
        )
    }
}

export default Tile