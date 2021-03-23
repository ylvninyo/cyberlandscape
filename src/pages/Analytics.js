import React, {Component} from 'react'
import MetaTags from 'react-meta-tags';
import ReactTooltip from 'react-tooltip';
import BubbleChart from '../components/chart/bubbleChart';
import TotalFundingCategory from '../components/chart/totalFundingCategory';
import Tooltip from '../components/tooltip';
import '../style/analytics.css'


class Analytics extends Component {
    constructor(props) {
        super(props)
        this.state = {
            companies: [
                {
                    "category": "Application Security",
                    "name": "Apiiro",
                    "total_funding": 35,
                    "last_fundraising_date": "2020-10-13T00:00:00.000Z",
                    "description": "Move fast and break bureaucracy (stealth-mode)",
                    "crunchbase": "/",
                    "homepage": "apiiro.com",
                    "twitter": "https://twitter.com/apiiroSecurity",
                    "linkedin": "https://www.linkedin.com/company/apiiro/",
                    "subcategory": "",
                    "logo": ""
                },
            ]
        }
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
                        <div className="col-12 s12 m12 l8">
                            <p className="center-align">
                            Explore YL Ventures’ CyberMap analytics to gain in-depth perspectives of the Israeli cybersecurity ecosystem. 
                            Track the industry's movements
                            and market trends with our data-driven findings of solution categories, funding rounds, exits, and more!
                            </p>
                        </div>
                    </div>


                    <div className="background-dark-grey page-top white-text center">
                        <div className="container">
                            <div className="font-14">
                                <span className="left left-align main-company-counter hide-on-med-and-down">
                                    Companies by Category  
                                    <Tooltip
                                        text="Percentage of activecompanies in each category"
                                        icon="help_outline"
                                        randomID = 'company-category' 
                                    />
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

                   <div className="cybermanp-bubble_chart_wrapper">
                    {/* <BubbleChart value={400} />
                    <BubbleChart value={280} />
                    <BubbleChart value={200} />
                    <BubbleChart value={150} />
                    <BubbleChart value={200} />
                    <BubbleChart value={90} /> */}
                   </div>
                </div>

                <section className="section section-2">
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col s6">
                            nese
                        </div>
                        <div  className="col s6">
                            <span className="left left-align section-title">
                              Total Funding by Category
                                <Tooltip
                                    text="The total funding amount companies raised in each category since inception"
                                    icon="help_outline" 
                                    randomID = 'total-funding-category'
                                />
                            </span>

                            <div style={{'height': '400px'}}>
                                <TotalFundingCategory />
                            </div>
                        </div>
                    </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default Analytics;
