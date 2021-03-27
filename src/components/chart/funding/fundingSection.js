import React from 'react';
import Tooltip from '../../tooltip';
import TotalFundingAmount from './totalFundingAmount';
import TotalFundingCategory from './totalFundingCategory';


const FundingSection  = ({companies}) => { 

        
    // -------funding by category chart codes section ----- //
    let group =  companies.reduce((r, a) => {
        r[a.category] = [...r[a.category] || [], a];
        return r;
        }, {});

        let fundingByCategory = [];

        Object.keys(group).forEach((category) => {
            let count = 0;
            let obj = {};

            group[category].forEach(i => {

                if(i.total_funding !== 'N/A') {
                    count +=i.total_funding;
                } else {
                    count +=0;
                }
            });
            
            obj.name = category;
            obj.value = count;

            fundingByCategory.push(obj);
        });

    // recent funding rounds logos
    let sortedDateLogos = companies.sort((a,b) => {
        return new Date(b.last_fundraising_date) - new Date(a.last_fundraising_date);
        });

    let recentFundingRounds = sortedDateLogos.slice(0, 6);

    return(
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
                                {recentFundingRounds.length ? 

                                recentFundingRounds.map((item,i) => {
                                    return (
                                        <div  className="col s4" key={i}>
                                            <img src={item.logo} />
                                        </div>
                                    )
                                })
                                : <p>Fetching images...</p>
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
                        {fundingByCategory.length ? <TotalFundingCategory data={fundingByCategory} /> : <p>Fetching data...</p>}
                    </div>
                </div>

            </div>
            </div>
        </section>
    )
}

export default FundingSection;