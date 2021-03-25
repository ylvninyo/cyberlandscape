import React, { Component } from 'react';
import BubbleChart from '@weknow/react-bubble-chart-d3';

const BubbleChartWrapper = ({data}) => {
    return (
      <BubbleChart
        graph= {{
          zoom: .4,
          offsetX: 0,
          offsetY: 0,
        }}
        width={1099}
        height={500}
        padding={100}
        padding={0} // optional value, number that set the padding between bubbles
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
        data={data}
      />)
}
 
export default BubbleChartWrapper;