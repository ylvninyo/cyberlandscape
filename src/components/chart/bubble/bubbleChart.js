import React from 'react';
import BubbleChart from '@weknow/react-bubble-chart-d3';

const BubbleChartWrapper = ({chartData}) => {

    return (
      <BubbleChart
        graph= {{
          zoom: .55,
          offsetX: 0,
          offsetY: -0.01,
        }}
        
        width={window.innerWidth > 991 ? 1099 : 650}
        height={window.innerWidth > 991 ? 500 : 450}
        padding={20} // optional value, number that set the padding between bubbles
        showLegend={false} // optional value, pass false to disable the legend.
        valueFont={{
              family: 'Arial',
              size: 15,
              color: '#fff',
              weight: 'normal',
            }}
        labelFont={{
              family: 'Arial',
              size: 12,
              color: '#fff',
              weight: 'normal',
            }}

        // bubbleClickFunc={this.bubbleClick}
        // legendClickFun={this.legendClick}
        data={chartData}
      />)
}
 
export default BubbleChartWrapper;