import React, { Component } from 'react'
import '../style/navbar.css'
const M = window.M

class Navbar extends Component {
    componentDidMount() {
        M.Modal.init(this.instance.querySelectorAll('.modal'))
    }

    render() {
        return (
            <div ref={el => (this.instance = el)}>
                <nav className="nav-gradient">
                    <div className="container">
                        <div className="nav-wrapper fixed-navbar padding-top-bottom">
                            <a href="/" className="brand-logo"><img src="/logo.png" alt="logo" /></a>
                            <ul className="right hide-on-med-and-down">
                                <li><a className="modal-trigger" href="#about">About</a></li>
                                <li><a className="modal-trigger" href="#addcompany">Add a company</a></li>
                                <li><a className="no-hover cursor-default opacity-04">Analytics (soon)</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div id="about" className="modal outline-0">
                    <div className="modal-content center">
                        <h4 className="turquoise-text">About Us</h4>
                        <p className="black-text nav-modal-p">
                            Lorem idivsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tem amet.
                        </p>
                        <a href="https://www.ylventures.com" target="_blank" rel="noopener noreferrer" className="turquoise-text">
                            www.ylventures.com
                        </a>
                    </div>
                </div>
                <div id="addcompany" className="modal outline-0">
                    <div className="modal-content center">
                        <h4 className="turquoise-text">Add a company</h4>
                        <p className="black-text nav-modal-p">
                            Lorem idivsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar