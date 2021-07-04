import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PerYearLogos from './perYearLogos';

class PerYearChart extends Component  {

  constructor(props) {
    super(props)
    this.state = {
      data:[],
      show: false,
      year: null,
      cx: 0,
      cy: 0,
      logos:[]
    }
}

componentDidMount() {
  this.setState({data:this.props.data});
}

  clickedDot = ({cx,cy,payload}) => {
    this.setState({show:true, cx,cy,logos:payload});

    const y = payload.year;
    this.setState({year:payload.year})
    let logos = [];

    const selectedYearCompanies = this.props.exitDates.[`${y}`]

    selectedYearCompanies.map((c) => {
      logos.push(c.logo);
    });

    this.setState({logos})

  }

  close = () => {
    this.setState({show:false});
  }

   render () {
    return (
      <>
        <ResponsiveContainer width='100%'>
          <LineChart
            data={this.props.data}
            margin={{
              top: 5,
              right: 30,
              left: -30,
              bottom: 5,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#129a74" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#129a74" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeOpacity={.2} strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Line dot strokeWidth={3} isAnimationActive={false} type="monotone" dataKey="company" fill="url(#gradient4)" stroke="#3E999A" activeDot={{ onClick: (event, payload) => this.clickedDot(payload) }} />
          </LineChart>
        </ResponsiveContainer>

        {this.state.show && 
        <PerYearLogos
          cx={this.state.cx} 
          cy={this.state.cy} 
          year={this.state.year} 
          logos={this.state.logos} 
          data = {this.props.exitDates}
          close={this.close} 
        /> } 

      </>
    );
   }
}
 
export default PerYearChart;