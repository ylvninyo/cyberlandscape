import React, {Component} from 'react'
import MetaTags from 'react-meta-tags';
import ReactTooltip from 'react-tooltip';
import AverageChart from '../components/chart/averageChart';
import AverageChartLifeSpan from '../components/chart/averageChartLifeSpan';
import BubbleChartWrapper from '../components/chart/bubbleChart';
import BubbleChart from '../components/chart/bubbleChart';
import PerYearChart from '../components/chart/perYearChart';
import TotalFundingAmount from '../components/chart/totalFundingAmount';
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
                        <BubbleChartWrapper />
                   </div>
                </div>

                <section className="section section-2">
                    <div className="container-fluid fullheight">
                        <div className="row fullheight">
                        <div className="col s6 fullheight">
                            <div>
                                <span className="left left-align section-title">
                                Companies by Total Funding Amount
                                    <Tooltip
                                        text="Number of companies by total amount of funding raised since inception"
                                        icon="help_outline" 
                                        randomID = 'chart_id_2'
                                    />
                                </span>
                                <div className="section-2_chart2" style={{'height':'400px'}}>
                                    <TotalFundingAmount />
                                </div>
                            </div>

                            <div style={{'marginTop': '150px'}}>
                                <span className="left left-align section-title">
                                    Recent Funding Rounds
                                    <Tooltip
                                        text="Recent funding rounds by chronological order"
                                        icon="help_outline" 
                                        randomID = 'chart_id_4'
                                    />
                                </span>
                                <div className="logo-wrappers">
                                    <div className="row">
                                        <div  className="col s4">
                                            <img src="https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2.jpg" />
                                        </div>
                                        <div  className="col s4">
                                            <img src="https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2.jpg" />
                                        </div>
                                        <div  className="col s4">
                                            <img src="https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2.jpg" />
                                        </div>
                                        <div  className="col s4">
                                            <img src="https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2.jpg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div  className="col s6" style={{'height':'800px'}}>
                            <span className="left left-align section-title">
                              Total Funding by Category
                                <Tooltip
                                    text="The total funding amount companies raised in each category since inception"
                                    icon="help_outline" 
                                    randomID = 'chart_id_3'
                                />
                            </span>

                            <div className="common-chart_wrapper section-2_chart3">
                                <TotalFundingCategory />
                            </div>
                        </div>

                    </div>
                    </div>
                </section>



                <section className="section section-3">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col s12">
                                <span className="left left-align section-title">
                                    Exited Companies per Year
                                    <Tooltip
                                        text="Total number of companies exited per year"
                                        icon="help_outline" 
                                        randomID = 'chart_id_2'
                                    />
                                </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s8">

                                <div style={{'height': '500px'}}>
                                    <PerYearChart />
                                </div>
                            </div>

                            <div className="col s4">
                                <div className="cybermap_box">
                                    <div className="cybermap_box_flex">
                                        <span>
                                            Number of this <br/>
                                            year's exits
                                        </span>
                                        <span>
                                            00
                                        </span>
                                    </div>
                                </div>

                                <div className="cybermap_box">
                                    <span>
                                        Latest Exits
                                    </span>
                                    <div className="row">
                                        <div  className="col s6">
                                            <img src="https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2.jpg" />
                                        </div>
                                        <div  className="col s6">
                                            <img src="https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2.jpg" />
                                        </div>
                                        <div  className="col s6">
                                            <img src="https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2.jpg" />
                                        </div>
                                        <div  className="col s6">
                                            <img src="https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2.jpg" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section section-4">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col s6">
                                <span className="left left-align section-title">
                                    Average Exits Value by Category
                                    <Tooltip
                                        text="Average deal size in each category"
                                        icon="help_outline"
                                        randomID = 'company-category' 
                                    />
                                </span>

                                <div style={{'height': '600px'}}>
                                    <AverageChart />
                                </div>
                            </div>

                            <div className="col s6">
                                <span className="left left-align section-title">
                                    Average Lifespan Until Exit by Category
                                    <Tooltip
                                        text="Average amount of time (by years) until companies are acquired in each category"
                                        icon="help_outline"
                                        randomID = 'company-category' 
                                    />
                                </span>

                                <div style={{'height': '600px'}}>
                                    <AverageChartLifeSpan />
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
