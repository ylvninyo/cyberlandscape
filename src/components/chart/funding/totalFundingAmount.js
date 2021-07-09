import React, { Component } from 'react';


class TotalFundingAmount extends Component { 

  constructor(props) {
    super(props);

    this.state = {
      data:[
        {
          name: '$0-10M',
          value: 62,
        },
        {
          name: '$10-30M',
          value: 20,
        },
        {
          name: '$30M-50M',
          value: 53,
        },
        {
          name: '$50M',
          value: 19,
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

  getSize = (ch,index) => {

    if (index == 0) {
      if(window.innerWidth > 991) {
        return {'height': `${ch.value != 0 ? ch.value*2 : '20'}px`, 'width': `${ch.value != 0 ? ch.value*2 : '20'}px`, 'backgroundColor': `#63B77B`}
      }
  
      return {'height': `${ch.value != 0 ? ch.value : '20'}px`, 'width': `${ch.value != 0 ? ch.value : '20'}px`, 'backgroundColor': `#63B77B`}
    }

    else if (index == 1) {
      if(window.innerWidth > 991) {
        return {'height': `${ch.value != 0 ? ch.value*2 : '20'}px`, 'width': `${ch.value != 0 ? ch.value*2 : '20'}px`, 'backgroundColor': `#03B9BA`}
      }
  
      return {'height': `${ch.value != 0 ? ch.value : '20'}px`, 'width': `${ch.value != 0 ? ch.value : '20'}px`, 'backgroundColor': `#03B9BA`}
    }

    else if (index == 2) {
      if(window.innerWidth > 991) {
        return {'height': `${ch.value != 0 ? ch.value*2 : '20'}px`, 'width': `${ch.value != 0 ? ch.value*2 : '20'}px`, 'backgroundColor': `#05585a`}
      }
  
      return {'height': `${ch.value != 0 ? ch.value : '20'}px`, 'width': `${ch.value != 0 ? ch.value : '20'}px`, 'backgroundColor': `#05585a`}
    }


    else {
      if(window.innerWidth > 991) {
        return {'height': `${ch.value != 0 ? ch.value*2 : '20'}px`, 'width': `${ch.value != 0 ? ch.value*2 : '20'}px`, 'backgroundColor': `#63B77D`}
      }
  
      return {'height': `${ch.value != 0 ? ch.value : '20'}px`, 'width': `${ch.value != 0 ? ch.value : '20'}px`, 'backgroundColor': `#63B77D`}
    }
  
  }
  render() {

    const charts = this.state.data.map((ch, index) => {
      return (
        <div className="amount-chart_item" data-attr={`${ch.name}`} key={index}>
         <div className="amount-chart_circle" style={this.getSize(ch,index)}>
            <span>{ch.value}</span>
         </div>
        </div>
      )
    })

    return(
     <div className="amount-chart_wrapper">
        {charts}
     </div>

  )
  }
}

export default TotalFundingAmount;