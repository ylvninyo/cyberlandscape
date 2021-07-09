import React from 'react';
import Tooltip from '../../tooltip';
import AverageChart from './averageChart';
import AverageChartLifeSpan from './averageChartLifeSpan';


const AverageSection  = ({exits}) => { 

    // -------average by category chart codes section ----- //
    let group =  exits.reduce((r, a) => {
        r[a.category] = [...r[a.category] || [], a];
        return r;
        }, {});

        let averages = [];
        let averagesLifeSpan = [];

        Object.keys(group).forEach((category) => {
            let count = 0;
            let count2 = 0;

            let obj = {};
            let obj2 = {};

            group[category].forEach(i => {
                count +=i.total_funding_until_exited_m !== '-' ? i.total_funding_until_exited_m : 0;
                count2 +=i.lifespan_years !== '' ? i.lifespan_years : 0;
            });
            
            obj.name = category;
            obj.value = group[category].length ? count/group[category].length : 0;

            obj2.name = category;
            obj2.value = group[category].length ? count2/group[category].length : 0;

            averages.push(obj);
            averagesLifeSpan.push(obj2);
        });

    return(
        <section className="section section-4">
        <div className="container-fluid">
            <div className="row">
                <div className="col s12 m6 mobile-padding-bottom">
                    <span className="left left-align section-title">
                        Average Exits Value by Category
                        <Tooltip
                            text="Average deal size in each category"
                            icon="help_outline"
                            randomID = 'company-category' 
                        />
                    </span>

                    <div style={{'height': '1100px', 'marginBottom': '100px'}}>
                        {averages.length ? <AverageChart data={averages} /> : <p>Fetching data...</p>}
                    </div>
                </div>

                <div className="col s12 m6 mobile-padding-top">
                    <span className="left left-align section-title">
                        Average Lifespan Until Exit by Category
                        <Tooltip
                            text="Average amount of time (by years) until companies are acquired in each category"
                            icon="help_outline"
                            randomID = 'company-category' 
                        />
                    </span>

                    <div style={{'height': '1100px', 'marginBottom': '100px'}}>
                        {averagesLifeSpan.length ? <AverageChartLifeSpan data={averagesLifeSpan} /> : <p>Fetching data...</p>}
                    </div>
                </div>

            </div>
        </div>
    </section>

    )
}

export default AverageSection;
