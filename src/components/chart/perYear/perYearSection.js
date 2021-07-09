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
    let exitThisYearImages = [];
    let exitRecentImages = [];

    Object.keys(exitDates).forEach((year) => {
        let obj = {};
        const d = new Date();
        const n = d.getFullYear();

        obj.name = year;
        obj.year = year;
        obj.company = exitDates[year].length;

        if(Number(year) === n) {
            exitThisYear = exitDates[year].length;
            exitThisYearImages = exitDates[year];
            exitRecentImages = [...exitDates[year]];
            exitRecentImages.splice(1,6)
        }

        exitPerYears.push(obj);
    });

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
                    <div className="col s12 m9">

                        <div className="section-chart_peryear">
                            {exitPerYears.length ? <PerYearChart data={exitPerYears} {...{exitDates,companies}} /> : <p>Fetching data...</p> } 
                        </div>
                    </div>

                    <div className="col s12 m3">
                        <div className="cybermap_box blackBox">
                            <div className="cybermap_box_flex">
                                <span>
                                    Number of this <br/>
                                    year's exits
                                </span>
                                <span>
                                    { exitThisYear ? exitThisYear : 0 }
                                </span>
                            </div>
                        </div>

                        <div className="title_out">
                            <span>
                                Recent Exits
                            </span>
                        </div>
                        <div className="cybermap_box">
                            <div className="row box-img_wrapper">
                                {exitRecentImages?.map((img, index)=>{
                                    return <img alt={'cybermap analytics'} className="logo-image" key={index} src={img.logo} />
                                })
                                
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default PerYearSection;