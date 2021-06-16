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
        <ResponsiveContainer>
          <LineChart
            width={500}
            height={400}
            data={this.props.data}
            // margin={{
            //   top: 5,
            //   right: 30,
            //   left: 20,
            //   bottom: 5,
            // }}
          >
            <defs>
                <linearGradient id="gradient4" x1="0%" y1="85%" x2="85%" y2="100%">
                    {/* <stop stopColor="#009dbc" /> */}
                    <stop offset="0" stopColor={'#15181b'} />
                    <stop offset="100" stopColor={'#7e179c'} />
                    {/* <stop offset="0.823677" stopColor={'#009dbc'} />
                    <stop offset="1" stopColor="white" stopOpacity="0.01" /> */}
                </linearGradient>
            </defs>
            <CartesianGrid strokeOpacity={.2} strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="company" fill="url(#gradient4)" stroke="#8884d8" activeDot={{ onClick: (event, payload) => this.clickedDot(payload) }} dot />
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