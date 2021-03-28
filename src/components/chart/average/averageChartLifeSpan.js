import React, { Component } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid} from 'recharts';


class AverageChartLifeSpan extends Component { 

    constructor(props) {
        super(props);

        this.state = {
            data:[]
        }
    }

componentDidMount() {
    let newData = this.props.data.sort((a,b) => {
        return b.value - a.value;
    });

    this.setState({data: newData});
}




    render() {

        const CustomizedLabel = ({x,y,fill,value}) => {
            return <text 
                    x={x+20} 
                    y={y} 
    
                    fontSize={12} 
                    fill={'#fff'}
                    textAnchor="top" dominantBaseline="start">{Math.ceil(value) >0 ? Math.ceil(value) : 'N/A'}</text>
        }
        return(
            <ResponsiveContainer width="100%" height="100%">
                    <BarChart 
                        barSize={15}
                        fill="#22272c"
                        data={this.state.data}
                        layout="vertical" height={10} barCategoryGap={.5}
                        margin={{ top: 0, right: 50, left: 0, bottom: 0 }}
                    >
                        <CartesianGrid horizontal verticalFill={'#22272c'} strokeOpacity={.2} strokeDasharray="3 3" />
                        <XAxis type="number" tickFormatter={(tick) => `${tick}Y`}   stroke="#fff" fontSize={11} />
                        <YAxis type="category" width={100} axisLine={{ stroke: 'transparent' }} stroke="#fff" padding={{ left: 20 }} fontSize={10} dataKey="name"/>
                            
                    <Bar 
                        dataKey="value" 
                        fill="#fdae6b"
                        label={<CustomizedLabel />}
                        radius={10}
                        />
                        
                </BarChart>
            </ResponsiveContainer>
    
        )
    }
}

export default AverageChartLifeSpan;
