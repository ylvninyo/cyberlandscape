import React from 'react';

import CategoryBarChart from '../bar/categoryBarChart';

export default function TotalFundingCategory({ data }) {
    return (
        <CategoryBarChart
            data={data}
            labelFontSize={12}
            chartHeight={8}
            barCategoryGap={0.4}
            yAxisFontSize={13}
            yAxisLine={{ stroke: 'transparent' }}
            yAxisPadding={{ left: 20 }}
            gridHorizontal={true}
            gridStrokeOpacity={0.2}
        />
    );
}
