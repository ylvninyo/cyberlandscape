import React, { Component } from 'react';
import BubbleChart from '../../../libraries/react-bubble-chart-d3';

class BubbleChartWrapper extends Component {
    constructor(props){
      super(props);
      this.state = {
        chartData:[]
      }
    }

componentDidMount() {
  // this.setState({chartData: this.props.chartData});

  if (window.innerWidth < 991) {
    const smallPercents = this.props.chartData.filter( v => {
      return v.value > 8;
      // console.log(v)
    })

    console.log(smallPercents)

    this.setState({chartData: smallPercents});
  }
}

static getDerivedStateFromProps(props, nextProps) {
  if (nextProps.chartData !== props.chartData) {
    let gSmall;
    if (window.innerWidth < 991) {
      const smallPercents = props.chartData.filter(v => {
        return v.value > 8;
        // console.log(v)
      })
      gSmall = smallPercents;

      return {
        chartData: gSmall
      }
    } else {
      return {
        chartData: props.chartData
      }
    }

  }
  return null
}

// componentWillReceiveProps() {
//   console.log('received')
//   this.setState({chartData: this.props.chartData});
// }

componentDidUpdate() {
  // console
    const textValue = document.getElementsByClassName("value-text");
    Array.from(textValue).forEach(v => {
        v.textContent += "%";
    });
}
render() {
  return (
    <React.Fragment>
      <div 
        id="bubble_chart_tooltip"
        className="tooltip"
        style={{
          opacity: 0, 
          backgroundColor: 'white', 
          border: 'solid', 
          border: '1px solid transparent', 
          borderRadius: '3px', 
          padding: '8px 21px',
          position: 'absolute',
          color: '#222',
          fontWeight: 600,
          fontSize: '13px',
          transition: 'opacity 0.3s ease-out'
        }}
      ></div>
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
        color={'rgb(230, 85, 13)'}
        // bubbleClickFunc={this.bubbleClick}
        // legendClickFun={this.legendClick}
        data={this.state.chartData}
      />
    </React.Fragment>
  )
}
}
 
export default BubbleChartWrapper;