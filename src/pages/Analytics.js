import React, {Component} from 'react'
import BubbleChartWrapper from '../components/chart/bubble/bubbleChart';
import PerYearSection from '../components/chart/perYear/perYearSection';
import MetaTagsWrapper from '../components/metaTags';
import Tooltip from '../components/tooltip';
import {Collapse} from 'react-collapse';

import '../style/analytics.css'
import FundingSection from '../components/chart/funding/fundingSection';
import AverageSection from '../components/chart/average/averageSection';
import Spinner from '../components/spinner';
import BubbleChartMobile from '../components/chart/bubble/bubbleChartMobile';

import { categoryColor } from '../utils';

class Analytics extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpened: false,

            companies:[],
            exits: [],
            loading: false,

            // for bubblechart data
            bubbleChartData: {},
            filteredBubbleChartData: {},
            totalCompany: 0,
            totalCapital: 0,

            showLessBubble: true
        }
    }

    showLessBubble = () =>  {
        this.setState({showLessBubble: !this.state.showLessBubble})
        console.log('called')
    }


    generateBubble = (data) => {
        
        let totalCapital = 0;

        data.companies.forEach(el => {
            totalCapital += (el.total_funding !== 'N/A') ? el.total_funding : 0;
        })

        // ----------bubble chart ---------- //
        let bubbleChartCategory = data?.companies.reduce((r, a) => {
            r[a.category] = [...r[a.category] || [], a];
            return r;
           }, {});

           let bubbleChartData = [];

            Object.keys(bubbleChartCategory).forEach((category) => {
                let obj = {};

                obj.label = category;
                obj.value = bubbleChartCategory[category].length*100/data.companies.length > 1 ? (bubbleChartCategory[category].length*100/data.companies.length).toFixed(1) : (bubbleChartCategory[category].length*100/data.companies.length).toFixed(0);
                obj.color = categoryColor(category);

                bubbleChartData.push(obj);
            });
            
        //* set state section
        this.setState({
                bubbleChartData, 
                filteredBubbleChartData: bubbleChartData, 
                totalCompany:data?.companies.length,
                totalCapital
            }); 

    }


    componentDidMount() {

        this.setState({loading: true})

        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };

        fetch("https://script.google.com/macros/s/AKfycbzb8LxPHh2JRpmBiZfjKXy0AV1nbZrdpgOsNvVlioTkl81TXLUCx6CZBjoLxA1471ko/exec", requestOptions)
            .then(response => response.text())
            .then(result => {
                let data = JSON.parse(result);
                console.log(data);

                const exits = data.exits.map((e) => {
                     e.exit_date =  new Date(e.exit_date).getFullYear();
                     return e;
                });

                this.setState({companies:data.companies,exits});

                this.generateBubble(data);

                this.setState({loading: false})
        
            })
            .catch(error => console.log('error', error));
        
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
        let totalCapital = 0;
            
        if (fData.all === 'all') {
            this.state.companies.map(v => {
                if (v.total_funding !== 'N/A') totalCapital +=v.total_funding;
            })

            this.generateBubble({'companies': this.state.companies});
            return;
            
        } 

// -----------------------
        else if (fData.start === 0 && fData.end === 10) {
            var resultForCount = this.state.companies.filter((data) => {
                return (data.total_funding >= 0 && data.total_funding <= 10)  || data.total_funding === 'N/A';
            });
        }
// ----------------------
        else if (fData.start === 10 && fData.end === 30) {
            var resultForCount = this.state.companies.filter((data) => {
                return data.total_funding > 10 && data.total_funding <= 30
            });
        }
// ----------------------
        else if (fData.start === 30 && fData.end === 50) {
            var resultForCount = this.state.companies.filter((data) => {
                return data.total_funding > 30 && data.total_funding <= 50
            });

            
            var result = this.state.bubbleChartData.filter((data) => {
                    return data.value > 30 && data.value <= 50
            });
        }
// ----------------------
        else {  
            var resultForCount = this.state.companies.filter((data) => {
                return data.total_funding > 50;
            });


            var result = this.state.bubbleChartData.filter((data) => {
                    return data.value > 50;
            });
        }

        this.generateBubble({'companies': resultForCount});

        resultForCount.map(v => {
            if (v.total_funding !== 'N/A') totalCapital +=v.total_funding;
        })


        this.setState({
            totalCompany:resultForCount.length,
            totalCapital
        });
    }

    showCollapse = () => {
        this.setState({isOpened:!this.state.isOpened})
    }

    render() {
        const capitalRaised = Math.ceil(this.state.totalCapital,5);
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


                    <div className="row background-dark-grey page-top white-text center" style={{'marginBottom': 0}}>
                        <div className="font-14 bubble-chart_title">
                            <span className="left left-align main-company-counter">
                                Companies by Category  
                                <Tooltip
                                    text="Percentage of active companies in each category"
                                    icon="help_outline"
                                    randomID = 'company-category' 
                                />
                            </span>
                            <div className="right left-align top-menu hide-on-med-and-down">

                                <button onClick={(e) => this.filterCategoryByFunding(e,{all:'', start: 0, end: 10})}  className="cybermap-list_btn">$0-10M</button>

                                <button onClick={(e) => this.filterCategoryByFunding(e,{all:'', start: 10, end: 30})} className="cybermap-list_btn">$10-30M</button>

                                <button onClick={(e) => this.filterCategoryByFunding(e,{all:'', start: 30, end: 50})} className="cybermap-list_btn">$30-50M</button>

                                <button onClick={(e) => this.filterCategoryByFunding(e,{all:'', start: 50, end: null})} className="cybermap-list_btn">+$50M</button>

                                <button onClick={(e) => this.filterCategoryByFunding(e, {all:'all', start: null, end: null})} className="cybermap-list_btn active">All</button>


                                <div className="clear"></div>
    
                            </div>
                        </div>
                    </div>

                    <hr/>

                   <div className="cybermap-bubble_chart_wrapper">
                        {/* <div className="row"> */}
                            <div className="cybermap-bubble_desc">
                                <div className="hide-on-med-and-down">
                                    <p>
                                            Total companies
                                            <span>{this.state.totalCompany}</span>
                                    </p>

                                    <p>
                                            Total capital raised <br/>
                                            by active companies
                                            <span>${Number.parseFloat(capitalRaised*0.001).toFixed(2)}B</span>
                                    </p>
                                </div>

                                <div className="mobile-filter_btn hide-on-large-only">
                                        <button className="filterCollapse" onClick={this.showCollapse}>
                                            Filter by funding <i className="material-icons valign-middle no-margin">arrow_drop_down</i>
                                        </button>
                                        <Collapse isOpened={this.state.isOpened}>
                                            <button onClick={(e) => this.filterCategoryByFunding(e, {all:'all', start: null, end: null})} className="cybermap-list_collapse active">All</button>

                                            <button onClick={(e) => this.filterCategoryByFunding(e,{all:'', start: 0, end: 10})}  className="cybermap-list_collapse">$0-10M</button>

                                            <button onClick={(e) => this.filterCategoryByFunding(e,{all:'', start: 10, end: 30})} className="cybermap-list_collapse">$10-30M</button>

                                            <button onClick={(e) => this.filterCategoryByFunding(e,{all:'', start: 30, end: 50})} className="cybermap-list_collapse">$30-50M</button>

                                            <button onClick={(e) => this.filterCategoryByFunding(e,{all:'', start: 50, end: null})} className="cybermap-list_collapse">+$50M</button>
                                        </Collapse>
                                    </div>
                            </div>
                            {this.state.showLessBubble && <div className="cybermap-bubble_chart right" style={{ position: 'relative' }}>
                                {this.state.filteredBubbleChartData.length ? <BubbleChartWrapper chartData={this.state.filteredBubbleChartData} />: <p>No Data</p>}
                            </div>}
                            <div className="show-less-centered hide-on-large-only">
                                <button className="show-less_bubble" onClick={this.showLessBubble}>
                                    Show {this.state.showLessBubble ? 'Less' : 'More' }
                                     <i className="material-icons">{this.state.showLessBubble ? 'expand_less' : 'expand_more'}</i>
                                </button>
                            </div>
                            <div className="hide-on-large-only">
                            {this.state.filteredBubbleChartData.length ?  <BubbleChartMobile chartData={this.state.filteredBubbleChartData} /> : <p>No Data</p>}
                            </div>
                        {/* </div> */}
                   </div>
                </div>



                <FundingSection exits={this.state.exits} companies={this.state.companies} />

                <PerYearSection exits={this.state.exits} companies={this.state.companies} />

                <AverageSection exits={this.state.exits} />

                {this.state.loading && <Spinner />}

                <div className="an-footer">
                    <div className="container-fluid">
                    <p><i className="material-icons">info_outline</i>
                    Data included refers to accessible public information.
                    Undisclosed were not included in this analys</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Analytics;
