import React from 'react';
import BubbleChart from '@weknow/react-bubble-chart-d3';

const BubbleChartWrapper = ({chartData}) => {
    return (
      <BubbleChart
        graph= {{
          zoom: .4,
          offsetX: 0,
          offsetY: 0,
        }}
        width={1099}
        height={500}
        padding={5} // optional value, number that set the padding between bubbles
        showLegend={false} // optional value, pass false to disable the legend.
        valueFont={{
              family: 'Arial',
              size: 15,
              color: '#fff',
              weight: 'normal',
            }}
        labelFont={{
              family: 'Arial',
              size: 14,
              color: '#fff',
              weight: 'normal',
            }}

        // bubbleClickFunc={this.bubbleClick}
        // legendClickFun={this.legendClick}
        data={chartData}
      />)
}
 
export default BubbleChartWrapper;