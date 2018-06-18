import React, { Component } from 'react'
import '../style/navbar.css'
const M = window.M

class Navbar extends Component {
    componentDidMount() {
        M.Modal.init(this.instance.querySelectorAll('.modal'))
        M.Sidenav.init(this.instance.querySelectorAll('.sidenav'))
    }

    render() {
        return (
            <div ref={el => (this.instance = el)}>
                <ul id="sidenav" className="sidenav">
                    <li><a className="modal-trigger" href="#about">About</a></li>
                    <li><a className="modal-trigger" href="#addcompany">Add a company</a></li>
                    <li><a target="_blank" href="http://www.ylventures.com">ylventures.com</a></li>
                </ul>
                <nav className="nav-gradient">
                    <div className="container">
                        <div className="nav-wrapper fixed-navbar padding-top-bottom">
                            <a href="/" className="brand-logo"><img src="/logo.png" alt="logo" /></a>
                            <ul className="right hide-on-med-and-down">
                                <li><a className="modal-trigger" href="#about">About</a></li>
                                <li><a className="modal-trigger" href="#addcompany">Add a company</a></li>
                                <li><a className="no-hover cursor-default opacity-04">Analytics (soon)</a></li>
                                <li><a target="_blank" href="https://www.ylventures.com">ylventures.com</a></li>
                            </ul>
                            <a className="sidenav-trigger" data-target="sidenav"><i className="material-icons">menu</i></a>
                        </div>
                    </div>
                </nav>
                <div id="about" className="modal outline-0 modal-with-x">
                    <div className="modal-closing-btn modal-close cursor-pointer"><i className="material-icons modal-icon">close</i></div>
                    <div className="modal-content center modal-content-with-x">
                        <h4 className="turquoise-text">What is CyberMap?</h4>
                        <p className="black-text nav-modal-p pre-wrap">
{`
CyberMap is the first live map of Israel’s cybersecurity startup landscape. YL Ventures’ in-house research team designed it for ease of use. We created 29 custom categories. These encompass the full scope of Israel’s cybersecurity industry. We further segmented the list by level of funding (ranging from $0-$200M). CyberMap helps entrepreneurs, investors, CISOs, analysts, journalists (and anyone else interested in Israel's startup cybersecurity industry) explore the full ecosystem. Get started by using the search and filter tools on the main page. 

`}
<b>Feedback, questions or comments?</b>
{`
We made this live map to help our industry grow. If you have any questions, comments or ideas on how to improve this map, we would love to hear them.

Send them directly to Idan Ninyo, our CTO: `} <a href="mailto:idan@ylventures.com">idan@ylventures.com</a><br/><br/>

<b>About YL Ventures</b>
{`
YL Ventures funds & supports brilliant Israeli tech entrepreneurs from seed to lead. Based in Silicon Valley and Tel Aviv, we manage $135 million across three funds focused on seed-stage, deep-technology B2B companies in the fields of cyber security, enterprise software and autonomous vehicle technologies. YL Ventures accelerates the evolution of portfolio companies via strategic advice and US-based operational execution.
`}
                        </p>
                        <a href="https://www.ylventures.com" target="_blank" rel="noopener noreferrer" className="turquoise-text">
                            www.ylventures.com
                        </a>
                    </div>
                </div>
                <div id="addcompany" className="modal outline-0">
                    <div className="modal-closing-btn modal-close cursor-pointer"><i className="material-icons modal-icon">close</i></div>
                    <div className="modal-content center">
                        <h4 className="turquoise-text">Add a company</h4>
                        <p className="black-text nav-modal-p pre-wrap">
{`                        
Want to appear on the map? Here are two ways to submit your company:

`}
<b>Github:</b> open a pull request and edit public/data.js
<br/>
<b>Email:</b> send an email with the company’s name, URL and logo (in .png or .svg) to <a href="mailto:idan@ylventures.com">idan@ylventures.com</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar
