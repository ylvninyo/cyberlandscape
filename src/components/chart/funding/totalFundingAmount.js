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
  //   let newData = this.state.data.map((el,i) => {
  //     el.value = this.props.amounts[i];
  //     return el;
  // });
  
  // this.setState({data: newData});
  }
  render() {

    return(
     <div className="amount-chart_wrapper">
       <div className="amount-chart_item" data-attr="$0-10M">
         <div className="amount-chart_circle" style={{'height': '100px', 'width': '100px'}}>
            <span>62</span>
         </div>
        </div>

        <div className="amount-chart_item" data-attr="$10-30M">
         <div className="amount-chart_circle" style={{'height': '80px', 'width': '80px'}}>
            <span>51</span>
         </div>
        </div>

        <div className="amount-chart_item" data-attr="$30M-50M">
         <div className="amount-chart_circle" style={{'height': '70px', 'width': '70px'}}>
            <span>21</span>
         </div>
         </div>

         <div className="amount-chart_item" data-attr="$50M">
         <div className="amount-chart_circle" style={{'height': '120px', 'width': '120px'}}>
            <span>43</span>
         </div>
       </div>
     </div>

  )
  }
}

export default TotalFundingAmount;