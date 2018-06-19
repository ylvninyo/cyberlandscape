import React, { Component } from 'react'
import Modal from './modal'
import '../style/list.css'
const M = window.M


class List extends Component {
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
                <div className="background-white company-list inline-block center cursor-pointer" onClick={this.open}>
                    <img className="logo-list" src={item.logo} alt="logo"></img>
                </div>
                <Modal id={key} item={item}/>
            </span>
        )
    }
}

export default List