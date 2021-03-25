import React, {Component} from 'react'
import AverageChart from '../components/chart/averageChart';
import AverageChartLifeSpan from '../components/chart/averageChartLifeSpan';
import BubbleChartWrapper from '../components/chart/bubbleChart';
import PerYearChart from '../components/chart/perYearChart';
import TotalFundingAmount from '../components/chart/totalFundingAmount';
import TotalFundingCategory from '../components/chart/totalFundingCategory';
import MetaTagsWrapper from '../components/metaTags';
import Tooltip from '../components/tooltip';
import '../style/analytics.css'


class Analytics extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                "status": true,
                "companies": [
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
                        "logo": "https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2.jpg"
                    },
                    {
                        "category": "Application Security",
                        "name": "Apiiro",
                        "total_funding": 35,
                        "last_fundraising_date": "2020-11-13T00:00:00.000Z",
                        "description": "Move fast and break bureaucracy (stealth-mode)",
                        "crunchbase": "/",
                        "homepage": "apiiro.com",
                        "twitter": "https://twitter.com/apiiroSecurity",
                        "linkedin": "https://www.linkedin.com/company/apiiro/",
                        "subcategory": "",
                        "logo": "https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2.jpg"
                    },
                    {
                        "category": "Cloud Security",
                        "name": "Apiiro",
                        "total_funding": 29.5,
                        "last_fundraising_date": "2020-12-13T00:00:00.000Z",
                        "description": "Move fast and break bureaucracy (stealth-mode)",
                        "crunchbase": "/",
                        "homepage": "apiiro.com",
                        "twitter": "https://twitter.com/apiiroSecurity",
                        "linkedin": "https://www.linkedin.com/company/apiiro/",
                        "subcategory": "",
                        "logo": "https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2.jpg"
                    },
                    {
                        "category": "Cloud Security",
                        "name": "Apiiro",
                        "total_funding": 29.5,
                        "last_fundraising_date": "2020-09-13T00:00:00.000Z",
                        "description": "Move fast and break bureaucracy (stealth-mode)",
                        "crunchbase": "/",
                        "homepage": "apiiro.com",
                        "twitter": "https://twitter.com/apiiroSecurity",
                        "linkedin": "https://www.linkedin.com/company/apiiro/",
                        "subcategory": "",
                        "logo": "https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2.jpg"
                    },
                    {
                        "category": "Data Protection",
                        "name": "Apiiro",
                        "total_funding": 5,
                        "last_fundraising_date": "2020-03-13T00:00:00.000Z",
                        "description": "Move fast and break bureaucracy (stealth-mode)",
                        "crunchbase": "/",
                        "homepage": "apiiro.com",
                        "twitter": "https://twitter.com/apiiroSecurity",
                        "linkedin": "https://www.linkedin.com/company/apiiro/",
                        "subcategory": "",
                        "logo": "https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2.jpg"
                    },
                    {
                        "category": "Email Security",
                        "name": "Apiiro",
                        "total_funding": 8,
                        "last_fundraising_date": "2020-12-13T00:00:00.000Z",
                        "description": "Move fast and break bureaucracy (stealth-mode)",
                        "crunchbase": "/",
                        "homepage": "apiiro.com",
                        "twitter": "https://twitter.com/apiiroSecurity",
                        "linkedin": "https://www.linkedin.com/company/apiiro/",
                        "subcategory": "",
                        "logo": "https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2.jpg"
                    },
                    {
                        "category": "Endpoint Security",
                        "name": "Apiiro",
                        "total_funding": 2,
                        "last_fundraising_date": "2020-10-13T00:00:00.000Z",
                        "description": "Move fast and break bureaucracy (stealth-mode)",
                        "crunchbase": "/",
                        "homepage": "apiiro.com",
                        "twitter": "https://twitter.com/apiiroSecurity",
                        "linkedin": "https://www.linkedin.com/company/apiiro/",
                        "subcategory": "",
                        "logo": "https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2.jpg"
                    },
                    {
                        "category": "Endpoint Security",
                        "name": "Apiiro",
                        "total_funding": 2,
                        "last_fundraising_date": "2020-10-13T00:00:00.000Z",
                        "description": "Move fast and break bureaucracy (stealth-mode)",
                        "crunchbase": "/",
                        "homepage": "apiiro.com",
                        "twitter": "https://twitter.com/apiiroSecurity",
                        "linkedin": "https://www.linkedin.com/company/apiiro/",
                        "subcategory": "",
                        "logo": "https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2.jpg"
                    },
                    {
                        "category": "Fraud & Transactions",
                        "name": "Apiiro",
                        "total_funding": 15,
                        "last_fundraising_date": "2020-10-13T00:00:00.000Z",
                        "description": "Move fast and break bureaucracy (stealth-mode)",
                        "crunchbase": "/",
                        "homepage": "apiiro.com",
                        "twitter": "https://twitter.com/apiiroSecurity",
                        "linkedin": "https://www.linkedin.com/company/apiiro/",
                        "subcategory": "",
                        "logo": "https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2.jpg"
                    },
                    {
                        "category": "Identity & Access Management",
                        "name": "Apiiro",
                        "total_funding": 27,
                        "last_fundraising_date": "2020-10-13T00:00:00.000Z",
                        "description": "Move fast and break bureaucracy (stealth-mode)",
                        "crunchbase": "/",
                        "homepage": "apiiro.com",
                        "twitter": "https://twitter.com/apiiroSecurity",
                        "linkedin": "https://www.linkedin.com/company/apiiro/",
                        "subcategory": "",
                        "logo": "https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2.jpg"
                    },
                    {
                        "category": "IoT",
                        "name": "Apiiro",
                        "total_funding": 22,
                        "last_fundraising_date": "2020-10-13T00:00:00.000Z",
                        "description": "Move fast and break bureaucracy (stealth-mode)",
                        "crunchbase": "/",
                        "homepage": "apiiro.com",
                        "twitter": "https://twitter.com/apiiroSecurity",
                        "linkedin": "https://www.linkedin.com/company/apiiro/",
                        "subcategory": "",
                        "logo": "https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2.jpg"
                    },
                    {
                        "category": "Mobile Security",
                        "name": "Apiiro",
                        "total_funding": 39,
                        "last_fundraising_date": "2020-10-13T00:00:00.000Z",
                        "description": "Move fast and break bureaucracy (stealth-mode)",
                        "crunchbase": "/",
                        "homepage": "apiiro.com",
                        "twitter": "https://twitter.com/apiiroSecurity",
                        "linkedin": "https://www.linkedin.com/company/apiiro/",
                        "subcategory": "",
                        "logo": "https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2.jpg"
                    },
                    {
                        "category": "Identity & Access Management",
                        "name": "Apiiro",
                        "total_funding": 27,
                        "last_fundraising_date": "2020-10-13T00:00:00.000Z",
                        "description": "Move fast and break bureaucracy (stealth-mode)",
                        "crunchbase": "/",
                        "homepage": "apiiro.com",
                        "twitter": "https://twitter.com/apiiroSecurity",
                        "linkedin": "https://www.linkedin.com/company/apiiro/",
                        "subcategory": "",
                        "logo": "https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2.jpg"
                    },
                    {
                        "category": "Network Security",
                        "name": "Apiiro",
                        "total_funding": 28,
                        "last_fundraising_date": "2020-10-13T00:00:00.000Z",
                        "description": "Move fast and break bureaucracy (stealth-mode)",
                        "crunchbase": "/",
                        "homepage": "apiiro.com",
                        "twitter": "https://twitter.com/apiiroSecurity",
                        "linkedin": "https://www.linkedin.com/company/apiiro/",
                        "subcategory": "",
                        "logo": "https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2.jpg"
                    },
                    {
                        "category": "Security Operations",
                        "name": "Apiiro",
                        "total_funding": 31,
                        "last_fundraising_date": "2020-10-13T00:00:00.000Z",
                        "description": "Move fast and break bureaucracy (stealth-mode)",
                        "crunchbase": "/",
                        "homepage": "apiiro.com",
                        "twitter": "https://twitter.com/apiiroSecurity",
                        "linkedin": "https://www.linkedin.com/company/apiiro/",
                        "subcategory": "",
                        "logo": "https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2.jpg"
                    },
                    {
                        "category": "Threat Intelligence",
                        "name": "Apiiro",
                        "total_funding": 44,
                        "last_fundraising_date": "2020-10-13T00:00:00.000Z",
                        "description": "Move fast and break bureaucracy (stealth-mode)",
                        "crunchbase": "/",
                        "homepage": "apiiro.com",
                        "twitter": "https://twitter.com/apiiroSecurity",
                        "linkedin": "https://www.linkedin.com/company/apiiro/",
                        "subcategory": "",
                        "logo": "https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2.jpg"
                    },
                    {
                        "category": "Vulnerability & Risk Mgmt",
                        "name": "Apiiro",
                        "total_funding": 36,
                        "last_fundraising_date": "2020-10-13T00:00:00.000Z",
                        "description": "Move fast and break bureaucracy (stealth-mode)",
                        "crunchbase": "/",
                        "homepage": "apiiro.com",
                        "twitter": "https://twitter.com/apiiroSecurity",
                        "linkedin": "https://www.linkedin.com/company/apiiro/",
                        "subcategory": "",
                        "logo": "https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2.jpg"
                    },
                ],
                "exits": [
                    {
                        "company_name": "TowerSec",
                        "category": "IOT Automotive",
                        "founded": "2012-01-01T00:00:00.000Z",
                        "exit_date": "2016-01-06T00:00:00.000Z",
                        "lifespan_years": 4,
                        "exit_strategy": "M&A",
                        "acquisition_amount_m": 75,
                        "total_funding_until_exited_m": 2.5,
                        "acquirer_name": "Harman International Industries"
                    },
                    {
                        acquirer_name: "SuperCom",
                        acquisition_amount_m: "-",
                        category: "Endpoint Security",
                        company_name: "Safend",
                        exit_date: "2016-03-03T00:00:00.000Z",
                        exit_strategy: "M&A",
                        founded: "2003-01-01T00:00:00.000Z",
                        lifespan_years: 13,
                        total_funding_until_exited_m: 16.4,
                    },
                    {
                        acquirer_name: "Cyberark",
                        acquisition_amount_m: "-",
                        category: "Network Security",
                        company_name: "Agata Solutions",
                        exit_date: "2016-03-11T00:00:00.000Z",
                        exit_strategy: "M&A",
                        founded: "2008-01-01T00:00:00.000Z",
                        lifespan_years: 8,
                        total_funding_until_exited_m: "-"
                    },
                    {
                        acquirer_name: "SuperCom",
                        acquisition_amount_m: "-",
                        category: "Endpoint Security",
                        company_name: "Safend",
                        exit_date: "2016-03-03T00:00:00.000Z",
                        exit_strategy: "M&A",
                        founded: "2003-01-01T00:00:00.000Z",
                        lifespan_years: 13,
                        total_funding_until_exited_m: 16.4,
                    },
                    {
                        acquirer_name: "Cyberark",
                        acquisition_amount_m: "-",
                        category: "Network Security",
                        company_name: "Agata Solutions",
                        exit_date: "2016-03-11T00:00:00.000Z",
                        exit_strategy: "M&A",
                        founded: "2008-01-01T00:00:00.000Z",
                        lifespan_years: 8,
                        total_funding_until_exited_m: "-"
                    },

                ]
            },

            // for bubblechart data
            bubbleChartData: {},
            filteredBubbleChartData: {},
            totalCompany: 0,

            // for funding by category
            fundingByCategory: [],
            recentFundingRounds: []

        }
    }


    componentDidMount() {

        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };

        fetch("https://script.google.com/macros/s/AKfycbzlqEQo5DlLqgI3GMk-Nn7XCtAhNaCYDuPBYZCHhRLjQ2vfMa945gpf09N50GNwwKa4kQ/exec", requestOptions)
            .then(response => response.text())
            .then(result => {
                let data = JSON.parse(result);
                console.log(data);
                this.setState({data});
            })
            .catch(error => console.log('error', error));

        console.log(this.state.data);



        // -------bubble chart codes section ----- //
        let bubbleChartData = this.state.data?.companies.map(company => ({ label: company.category, value: company.total_funding }));


        // -------funding by category chart codes section ----- //
        let group =  this.state.data?.companies.reduce((r, a) => {
            r[a.category] = [...r[a.category] || [], a];
            return r;
           }, {});

           let fundingByCategory = [];

            Object.keys(group).forEach((category) => {
                let count = 0;
                let obj = {};

                group[category].forEach(i => {
                    count +=i.total_funding;
                });
                
                obj.name = category;
                obj.value = count;

                fundingByCategory.push(obj);
            });

        // recent funding rounds logos
        let sortedDateLogos = this.state.data?.companies.sort((a,b) => {
            return new Date(b.last_fundraising_date) - new Date(a.last_fundraising_date);
          });

        let recentFundingRounds = sortedDateLogos.slice(0, 6);



        //* set state section
        this.setState({
                bubbleChartData, 
                filteredBubbleChartData: bubbleChartData, 
                totalCompany:bubbleChartData.length,
                fundingByCategory,
                recentFundingRounds
            }); 

    }


    // set active class to filter buttons
    setActiveClass = (element) => {
        Array.from(document.getElementsByClassName("cybermap-list_btn")).forEach((el) => {
            el.classList.remove('active');
        });
        element.target.classList.add('active');
    }



    // function for filter bubble chart 
    filterCategoryByFunding = (e, fData) => {    

        this.setActiveClass(e);

            
        if (fData.all === 'all') {
            this.setState({
                filteredBubbleChartData: this.state.bubbleChartData, 
                totalCompany:this.state.bubbleChartData.length
            });
            return;
            
        } 

        let result = this.state.bubbleChartData.filter((data) => {
            return data.value > fData.start && data.value < fData.end
        });
        this.setState({
            filteredBubbleChartData: result,
            totalCompany:result.length
        });
    }

    render() {
        return (
            <div className="careers-view background-dark-grey">
                <MetaTagsWrapper />
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
                                    <button onClick={(e) => this.filterCategoryByFunding(e, {all:'all', start: null, end: null})} className="cybermap-list_btn active">All</button>

                                    <button onClick={(e) => this.filterCategoryByFunding(e,{all:'', start: 0, end: 10})}  className="cybermap-list_btn">$0-10M</button>

                                    <button onClick={(e) => this.filterCategoryByFunding(e,{all:'', start: 10, end: 30})} className="cybermap-list_btn">$10-30M</button>

                                    <button onClick={(e) => this.filterCategoryByFunding(e,{all:'', start: 30, end: 50})} className="cybermap-list_btn">$30-50M</button>

                                    <button onClick={(e) => this.filterCategoryByFunding(e,{all:'', start: 50, end: null})} className="cybermap-list_btn">+$50M</button>
                                </div>
                                <div className="clear"></div>
                                <br/>
                            </div>
                        </div>
                    </div>

                    <hr/>

                   <div className="cybermap-bubble_chart_wrapper">
                       <div className="cybermap-bubble_desc left">
                           <p>
                            Total companies
                            <span>{this.state.totalCompany}</span>
                           </p>

                           <p>
                            Total capital raised <br/>
                            by active companies
                            <span>$9B</span>
                           </p>
                       </div>
                        <div className="cybermap-bubble_chart right">
                            {this.state.filteredBubbleChartData.length ? <BubbleChartWrapper chartData={this.state.filteredBubbleChartData} />: <p>No Data</p>}
                        </div>
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
                                        {this.state.recentFundingRounds.length ? 

                                        this.state.recentFundingRounds.map((item,i) => {
                                            return (
                                                <div  className="col s4" key={i}>
                                                    <img src={item.logo} />
                                                </div>
                                            )
                                        })
                                         : <p>No recent images</p>
                                        }
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
                                {this.state.fundingByCategory.length ? <TotalFundingCategory data={this.state.fundingByCategory} /> : <p>No Data</p>}
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
