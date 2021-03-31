import React from 'react';
import Tooltip from '../../tooltip';
import PerYearChart from './perYearChart';

const PerYearSection = ({exits,companies}) => {
    
        
    // per year chart 
    let exitDates = exits?.reduce((r, a) => {
      r[a.exit_date] = [...r[a.exit_date] || [], a];
      return r;
    }, {});

    let exitPerYears = [];
    let exitThisYear = 0;

    console.log((exitDates))

    Object.keys(exitDates).forEach((year) => {
        let obj = {};
        const d = new Date();
        const n = d.getFullYear();

        obj.name = year;
        obj.year = year;
        obj.company = exitDates[year].length;

        if(Number(year) === n) exitThisYear = exitDates[year].length;

        exitPerYears.push(obj);
    });

   console.log(exitPerYears);

    return (
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
                    <div className="col s12 m8">

                        <div style={{'height': '500px'}}>
                            {exitPerYears.length ? <PerYearChart data={exitPerYears} {...{exitDates,companies}} /> : <p>Fetching data...</p> } 
                        </div>
                    </div>

                    <div className="col s12 m4">
                        <div className="cybermap_box">
                            <div className="cybermap_box_flex">
                                <span>
                                    Number of this <br/>
                                    year's exits
                                </span>
                                <span>
                                    {exitThisYear}
                                </span>
                            </div>
                        </div>

                        <div className="cybermap_box">
                            <span>
                                Latest Exits
                            </span>
                            <div className="row">
                                <div  className="col s6">
                                    <img alt={'cybermap analytics'} src="https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2.jpg" />
                                </div>
                                <div  className="col s6">
                                    <img alt={'cybermap analytics'} src="https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2.jpg" />
                                </div>
                                <div  className="col s6">
                                    <img alt={'cybermap analytics'} src="https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2.jpg" />
                                </div>
                                <div  className="col s6">
                                    <img alt={'cybermap analytics'} src="https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2.jpg" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default PerYearSection;