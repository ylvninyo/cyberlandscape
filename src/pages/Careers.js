import React, {Component} from 'react'
import MetaTags from 'react-meta-tags';

class Careers extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="careers-view background-dark-grey">
                <MetaTags>
                    <title>Israeli Cybersecurity companies are hiring!</title>
                    <meta name="robots" content="noindex"/>
                    <meta name="description"
                          content="The Cybersecurity industry remains robust and resilient even as COVID-19 pummels the market. In this difficult time, let’s band together and create a resource for highly qualified professionals in the community looking for their next role!"/>
                    <meta property="og:title" content="Israeli Cybersecurity companies are hiring!"/>
                    <meta property="og:image"
                          content="https://www.ylventures.com/wp-content/uploads/2020/04/og-cybermap-careers.png"/>
                    <meta property="og:image:width" content="1200"/>
                    <meta property="og:image:height" content="630"/>
                </MetaTags>
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
                        href={'https://airtable.com/shryWL3csxTNkq16M'} target="_blank"><strong>here</strong>.</a></h2>
                    <p>List is constantly updating <span className="lds-hourglass"></span></p>
                    <div className="row">
                        <div className="col s0 m2"></div>
                        <div className="col s12 m8">
                            <iframe className="airtable-embed" title="Airtable"
                                    src="https://airtable.com/embed/shr7Qe7WRSczzCDWm?backgroundColor=green&layout=card&viewControls=on"
                                    frameBorder="0" onmousewheel="" width="100%" height="500"></iframe>
                        </div>
                    </div>
                    <p className="align-center">
                        We invite you to get in touch with us at <a
                        href="mailto:dana@ylventures.com">dana@ylventures.com</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default Careers;
