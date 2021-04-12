import React, { Component } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid} from 'recharts';


class AverageChart extends Component { 

    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }


    componentDidMount() {
            
        let newData = this.props.data.sort((a,b) => {
            return b.value - a.value;
        })

        this.setState({data: newData});
    }

    formatTick = (tick) => {
        if (tick >= 1000000) {
            return `$${tick}M`;
        } else {
            return `$${tick}`;
        }
    }


 render() {
    const CustomizedLabel = ({x,y,value}) => {
        return <text 
                x={x+20} 
                y={y} 
                fontSize={14} 
                fill={'#fff'}
                textAnchor="start" dominantBaseline="end">{Math.ceil(value) >0 ? Math.ceil(value) : 'N/A'}</text>
        }
    return(
        <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                    barSize={15}
                    fill="#1f2428"
                    data={this.state.data}
                    layout="vertical" height={10} barCategoryGap={.5}
                    margin={{ top: 0, right: 50, left: 0, bottom: 0 }}
                >
                    <CartesianGrid vertical verticalFill={'#1f2428'} strokeOpacity={.2} strokeDasharray="3 3" />
                    <XAxis type="number" tickFormatter={(tick) => this.formatTick(tick)}   stroke="#fff" fontSize={14} />
                    <YAxis type="category" width={100} axisLine={{ stroke: 'transparent' }} stroke="#fff" padding={{ left: 20 }} fontSize={14} dataKey="name"/>
                        
                <Bar 
                    dataKey="value" 
                    fill="#a1d99b"
                    label={<CustomizedLabel />}
                    radius={10}
                    />
                    
            </BarChart>
        </ResponsiveContainer>

    )
 }
}

export default AverageChart;