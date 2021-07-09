import React from 'react';

import { compareDates } from '../../../utils';
import Tooltip from '../../tooltip';

import TotalFundingAmount from './totalFundingAmount';
import TotalFundingCategory from './totalFundingCategory';

const FundingSection = ({ companies, exits }) => {
    // -------funding by category chart codes section ----- //
    let group = companies.reduce((r, a) => {
        r[a.category] = [...(r[a.category] || []), a];
        return r;
    }, {});

    let fundingByCategory = [];

    Object.keys(group).forEach((category) => {
        let count = 0;
        let obj = {};

        group[category].forEach((i) => {
            if (i.total_funding !== 'N/A') {
                count += i.total_funding;
            } else {
                count += 0;
            }
        });

        obj.name = category;
        obj.value = count;

        fundingByCategory.push(obj);
    });

    let amounts = [];

    let st0_10 = 0;
    let st10_30 = 0;
    let st30_50 = 0;
    let st50 = 0;

    companies.forEach((el) => {
        if (el.total_funding >= 0 && el.total_funding <= 10) {
            st0_10 += 1;
        } else if (el.total_funding === 'N/A') {
            st0_10 += 1;
        } else if (el.total_funding > 10 && el.total_funding <= 30) {
            st10_30 += 1;
        } else if (el.total_funding > 30 && el.total_funding <= 50) {
            st30_50 += 1;
        } else if (el.total_funding > 50) {
            st50 += 1;
        }
    });

    amounts = [st0_10, st10_30, st30_50, st50];

    const recentFundingRounds = [...companies]
        .sort((a, b) => {
            const dateA = new Date(a.last_fundraising_date);
            const dateB = new Date(b.last_fundraising_date);

            return compareDates(dateA, dateB);
        })
        .slice(0, 6);

    return (
        <section className="section section-2">
            <div className="container-fluid fullheight">
                <div className="row fullheight">
                    <div className="col s12 m6 fullheight mobile-padding-bottom">
                        <div>
                            <span className="left left-align section-title">
                                Companies by Total Funding Amount
                                <Tooltip
                                    text="Number of companies by total amount of funding raised since inception"
                                    icon="help_outline"
                                    randomID="chart_id_2"
                                />
                            </span>
                            <div className="section-2_chart2 clearbox">
                                {fundingByCategory.length ? (
                                    <TotalFundingAmount {...{ amounts }} />
                                ) : (
                                    <p>Fetching data...</p>
                                )}
                            </div>
                        </div>

                        <div
                            style={{ marginTop: '100px' }}
                            className="hide-on-med-and-down"
                        >
                            <span className="left-align section-title">
                                Recent Funding Rounds
                                <Tooltip
                                    text="Recent funding rounds by chronological order"
                                    icon="help_outline"
                                    randomID="chart_id_4"
                                />
                            </span>
                            <div className="logo-wrappers cybermap_box">
                                <div className="row box-img_wrapper2">
                                    {recentFundingRounds.length ? (
                                        recentFundingRounds.map(
                                            (item, index) => {
                                                return (
                                                    <img
                                                        className="logo-image"
                                                        key={index}
                                                        alt={
                                                            'cybermap analytics'
                                                        }
                                                        src={item.logo}
                                                    />
                                                );
                                            }
                                        )
                                    ) : (
                                        <p>Fetching images...</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m6 mobile-padding-top mobile-padding-bottom">
                        <span className="left left-align section-title">
                            Total Funding by Category
                            <Tooltip
                                text="The total funding amount companies raised in each category since inception"
                                icon="help_outline"
                                randomID="chart_id_3"
                            />
                        </span>

                        <div className="common-chart_wrapper section-2_chart3">
                            {fundingByCategory.length ? (
                                <TotalFundingCategory
                                    data={fundingByCategory}
                                />
                            ) : (
                                <p>Fetching data...</p>
                            )}
                        </div>
                    </div>

                    <div className="col s12 hide-on-large-only">
                        <div style={{ marginTop: '100px' }}>
                            <span className="left-align section-title">
                                Recent Funding Rounds
                                <Tooltip
                                    text="Recent funding rounds by chronological order"
                                    icon="help_outline"
                                    randomID="chart_id_4"
                                />
                            </span>
                            <div className="logo-wrappers cybermap_box">
                                <div className="row box-img_wrapper2">
                                    {recentFundingRounds.length ? (
                                        recentFundingRounds.map(
                                            (item, index) => {
                                                return (
                                                    <img
                                                        className="logo-image"
                                                        key={index}
                                                        alt={
                                                            'cybermap analytics'
                                                        }
                                                        src={item.logo}
                                                    />
                                                );
                                            }
                                        )
                                    ) : (
                                        <p>Fetching images...</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FundingSection;
