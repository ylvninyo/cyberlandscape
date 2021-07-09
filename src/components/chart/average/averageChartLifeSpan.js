import React from 'react';

import CategoryBarChart from '../bar/categoryBarChart';

export default function AverageChartLifeSpan({ data }) {
    return (
        <CategoryBarChart
            data={data}
            labelFontSize={14}
            chartHeight={10}
            barCategoryGap={0.5}
            gridHorizontal={false}
            gridVerticalFill={'#22272c'}
            gridVerticalPoints={['200', '300', '400', '500', '600']}
            xAxisTickCount={12}
            xAxisMinTickGap={0}
            xAxisTickFormatter={(tick) => `${tick}Y`}
            yAxisFontSize={14}
            yAxisLine={false}
        />
    );
}
