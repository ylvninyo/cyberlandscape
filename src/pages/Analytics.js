import React, {Component} from 'react'
import BubbleChartWrapper from '../components/chart/bubble/bubbleChart';
import PerYearSection from '../components/chart/perYear/perYearSection';
import MetaTagsWrapper from '../components/metaTags';
import Tooltip from '../components/tooltip';
import '../style/analytics.css'
import FundingSection from '../components/chart/funding/fundingSection';
import AverageSection from '../components/chart/average/averageSection';
// import Dropdown from '../components/dropdown';


class Analytics extends Component {
    constructor(props) {
        super(props)
        this.state = {

            companies:[],
            exits: [],

            // for bubblechart data
            bubbleChartData: {},
            filteredBubbleChartData: {},
            totalCompany: 0,
            totalCapital: 0
        }
    }


    componentDidMount() {

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

                let totalCapital = 0;

                data.companies.forEach(el => {
                    totalCapital += el.total_funding !== 'N/A' ? el.total_funding : 0;
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
                        obj.value = bubbleChartCategory[category].length;
        
                        bubbleChartData.push(obj);
                    });


                //* set state section
                this.setState({
                        bubbleChartData, 
                        filteredBubbleChartData: bubbleChartData, 
                        totalCompany:bubbleChartData.length,
                        totalCapital
                    }); 
        
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

                                {/* <Dropdown title="Filter by funding" colored={'#ddd'} options={dropdowns} onChange={this.onFundingFilter}  /> */}
                                <div className="clear"></div>
                                <br/>
                            </div>
                        </div>
                    </div>

                    <hr/>

                   <div className="cybermap-bubble_chart_wrapper">
                        {/* <div className="row"> */}
                            <div className="cybermap-bubble_desc left">
                                <p>
                                        Total companies
                                        <span>{this.state.totalCompany}</span>
                                </p>

                                <p>
                                        Total capital raised <br/>
                                        by active companies
                                        <span>${Math.ceil(this.state.totalCapital)}B</span>
                                </p>
                            </div>
                            <div className="cybermap-bubble_chart right">
                                {this.state.filteredBubbleChartData.length ? <BubbleChartWrapper chartData={this.state.filteredBubbleChartData} />: <p>No Data</p>}
                            </div>
                        {/* </div> */}
                   </div>
                </div>



                <FundingSection companies={this.state.companies} />

                <PerYearSection exits={this.state.exits} companies={this.state.companies} />

                <AverageSection exits={this.state.exits} />
            </div>
        );
    }
}

export default Analytics;
