import React, {Component} from 'react'
import MetaTags from 'react-meta-tags';
import ReactTooltip from 'react-tooltip';


class Analytics extends Component {
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
                    <h1>CyberMap Analytics</h1>
                    <div className="row">
                        <div className="col s0 m1 l2"></div>
                        <div className="col s12 m10 l8 pre-wrap">
                            <p className="align-justify">
                            Explore YL Ventures’ CyberMap analytics to gain in-depth perspectives of the Israeli cybersecurity ecosystem. 
                            Track the industry's movements
                            and market trends with our data-driven findings of solution categories, funding rounds, exits, and more!
                            </p>
                        </div>
                        <div className="col s0 m1 l2"></div>
                    </div>


                    <div className="background-dark-grey page-top white-text center">
                <div className="container">
                    <div className="font-14">
                        <span className="left left-align main-company-counter hide-on-med-and-down">
                            Companies by Category  
                            <sup data-tip={'Percentage of activecompanies in each category'}><i className="material-icons valign-middle no-margin">help_outline</i></sup>
                            <ReactTooltip />
                        </span>
                        <div className="right left-align top-menu">
                            <span>
                                <button className="cybermap-list_btn">All</button>
                            </span>

                            <span>
                                <button className="cybermap-list_btn">$0-10M</button>
                            </span>

                            <span>
                                <button className="cybermap-list_btn">$10-30M</button>
                            </span>

                            <span>
                                <button className="cybermap-list_btn">$30-50M</button>
                            </span>

                            <span>
                                <button className="cybermap-list_btn">+$50M</button>
                            </span>

                        </div>
                        <div className="clear"></div>
                        <br/>
                    </div>
                </div>
            </div>

                    <hr/>
                    
                </div>
            </div>
        );
    }
}

export default Analytics;
