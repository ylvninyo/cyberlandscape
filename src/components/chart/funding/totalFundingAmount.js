import React, { Component } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, CartesianGrid} from 'recharts';


class TotalFundingAmount extends Component { 

  constructor(props) {
    super(props);

    this.state = {
      data:[
        {
          name: '$0-10M',
          value: 0,
        },
        {
          name: '$10-30M',
          value: 0,
        },
        {
          name: '$30M-50M',
          value: 0,
        },
        {
          name: '$50M',
          value: 0,
        }
      ]
    }
  }
 

  componentDidMount() {
    let newData = this.state.data.map((el,i) => {
      el.value = this.props.amounts[i];
      return el;
  });
  
  this.setState({data: newData});
  }

  render() {

    const CustomizedLabel = ({x,y,value}) => {
      return <text 
              x={x+10} 
              y={y-5} 
              fontSize={10} 
              fill={'#fff'}
              textAnchor="start" dominantBaseline="start">{Math.ceil(value)}</text>
      }

    return(
      <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                  barSize={40}
                  fill="#1b1f22"
                  data={this.state.data}
                  height={40} barCategoryGap={.5}
                  margin={{ top: 0, right: 50, left: 0, bottom: 0 }}
              >
                  <CartesianGrid horizontal verticalFill={'#1b1f22'} strokeOpacity={.2} strokeDasharray="3 3" />
                  <XAxis type="category"   stroke="#fff" fontSize={12} dataKey="name" />
                  {/* <YAxis type="number" width={100} axisLine={{ stroke: 'transparent' }} stroke="#fff" padding={{ left: 20 }} fontSize={10} /> */}
                      
              <Bar 
                  width={50}
                  height={89}
                  dataKey="value" 
                  fill="#3182bd"
                  label={<CustomizedLabel />}
                  radius={50}
                  />
                  
          </BarChart>
      </ResponsiveContainer>

  )
  }
}

export default TotalFundingAmount;