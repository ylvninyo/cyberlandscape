import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PerYearLogos from './perYearLogos';

class PerYearChart extends Component  {

  constructor(props) {
    super(props)
    this.state = {
      data:[],
      show: false,
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
    let logos = [];

    const selectedYearCompanies = this.props.exitDates.[`${y}`]

    // selectedYearCompanies.map((c) => {
      const l = this.props.companies.filter((fD) => {
        // console.log(c.company_name)
        // console.log(fD.name);
        return fD.name === 'BigID';
        // console.log(fD)
      })
    // })

    console.log(l);
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
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeOpacity={.2} strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="company" stroke="#8884d8" activeDot={{ onClick: (event, payload) => this.clickedDot(payload) }} dot />
          </LineChart>
        </ResponsiveContainer>

        {this.state.show && <PerYearLogos cx={this.state.cx} cy={this.state.cy} logos={this.state.logos} close={this.close} /> } 

      </>
    );
   }
}
 
export default PerYearChart;