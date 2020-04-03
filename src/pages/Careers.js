import React, {Component} from 'react'

class Careers extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="careers-view background-dark-grey">
                <div className="container-fluid">
                    <h1>Israeli Cybersecurity companies are <strong>hiring</strong>!</h1>
                    <div className="row">
                        <div className="col s0 m1 l2"></div>
                        <div className="col s12 m10 l8 pre-wrap">
                            <p className="align-justify">
                                The Cybersecurity industry remains robust and resilient even as COVID-19 pummels the
                                market. In this difficult time, let’s band together and create a resource for highly
                                qualified
                                professionals in the community looking for their next role!
                            </p>
                        </div>
                        <div className="col s0 m1 l2"></div>
                    </div>
                    <hr/>
                    <h2>Is your Cybersecurity company <strong>recruiting?</strong><br/>Submit who you’re looking for <a
                        href={'https://airtable.com/shryWL3csxTNkq16M'}><strong>here</strong>.</a></h2>
                    <br/>
                    <p>List is constantly updating <span className="lds-hourglass"></span></p>
                    <div>
                        <iframe className="airtable-embed" title="Airtable"
                                src="https://airtable.com/embed/shrKwzSU2vFPIyRw2?backgroundColor=transparent&layout=card"
                                frameBorder="0" onmousewheel="" width="100%" height="533"></iframe>
                    </div>
                </div>
            </div>
        );
    }
}

export default Careers;
