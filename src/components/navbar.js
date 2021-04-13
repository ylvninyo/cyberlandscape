import React, {Component} from 'react'
import '../style/navbar.css'
import { NavLink } from "react-router-dom";

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
                    <li><NavLink to="/analytics">Analytics</NavLink></li>
                    {/* <li><Link to="/careers">Careers</Link></li> */}
                    <li><a target="_blank" href="https://www.ylventures.com" rel="noopener noreferrer">ylventures.com</a></li>
                </ul>
                <nav className="nav-gradient">
                    <div className="container">
                        <div className="nav-wrapper fixed-navbar padding-top-bottom">
                            <a href="/" className="brand-logo"><img src="/logo.png" alt="logo"/></a>
                            <ul className="right hide-on-med-and-down">
                                <li><a className="modal-trigger" href="#about">About</a></li>
                                <li><a className="modal-trigger" href="#addcompany">Add a company</a></li>
                                {/* <li><Link to="/careers">Careers</Link></li> */}
                                {/* <li><a className="no-hover cursor-default opacity-04">Analytics (soon)</a></li> */}
                                <li><NavLink to="/analytics">Analytics</NavLink></li>
                                <li><a target="_blank" href="https://www.ylventures.com"
                                       rel="noopener noreferrer">ylventures.com</a></li>
                            </ul>
                            <a href="#!" className="sidenav-trigger" data-target="sidenav"><i
                                className="material-icons">menu</i></a>
                        </div>
                    </div>
                </nav>
                <div id="about" className="modal outline-0 modal-with-x">
                    <div className="modal-closing-btn modal-close cursor-pointer"><i
                        className="material-icons modal-icon">close</i></div>
                    <div className="modal-content center modal-content-with-x">
                        <p className="black-text nav-modal-p pre-wrap">
                            <b>What is CyberMap?</b>
                            {`

CyberMap, by YL Ventures, is the first live map of Israel’s cybersecurity startup landscape. It was designed by the firm for internal use and later published to share its potential with the wider public.

Today, CyberMap enables anyone interested in Israel’s startup cybersecurity industry, including entrepreneurs, investors, journalists, and CISOs, as well as other security practitioners, to explore its full ecosystem with ease and efficiency.

CyberMap encompasses the full scope of Israel’s cybersecurity industry. For ease of use, its search function offers filtering tools for 30 cyber categories and funding ranges to help you find the exact company you are looking for.

`}
                            <b>Tell us your thoughts!</b>
                            {`

We made this live map to help our industry grow. If you have any questions, comments, or ideas on how to improve this map, we would love to hear them! We invite you to get in touch with us at `}
                            <a href="mailto:dana@ylventures.com">dana@ylventures.com</a><br/><br/>

                            <b>About YL Ventures</b>
                            {`
                            
YL Ventures funds and supports brilliant Israeli tech entrepreneurs from seed to lead. Based in Silicon Valley and Tel Aviv, YL Ventures manages over $300 million and exclusively invests in cybersecurity. YL Ventures accelerates the evolution of portfolio companies via strategic advice and U.S. - based operational execution, leveraging a powerful network of Chief Information Security Officers and global industry leaders. The firm's track record includes successful, high-profile portfolio company acquisitions by major corporations including Palo Alto Networks, Microsoft, CA, and Proofpoint.  

`}
                        </p>
                        <a href="https://www.ylventures.com" target="_blank" rel="noopener noreferrer" className="turquoise-text">
                            www.ylventures.com
                        </a>
                    </div>
                </div>
                <div id="addcompany" className="modal outline-0">
                    <div className="modal-closing-btn modal-close cursor-pointer"><i
                        className="material-icons modal-icon">close</i></div>
                    <div className="modal-content center">
                        <h4 className="turquoise-text">Add a company</h4>
                        <p className="black-text nav-modal-p pre-wrap">
                            {`                        
Want to appear on the map? Please send an email with your company’s name, website and logo (png or svg) to`} <a
                            href="mailto:dana@ylventures.com"> dana@ylventures.com </a>

                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar
